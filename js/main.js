(function () {
  'use strict';

  var toggle = document.getElementById('theme-toggle');
  var sun = document.getElementById('sun-icon');
  var moon = document.getElementById('moon-icon');

  function updateIcon() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    sun.style.display = isDark ? 'block' : 'none';
    moon.style.display = isDark ? 'none' : 'block';
  }

  updateIcon();

  toggle.addEventListener('click', function () {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    var next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.theme = next;
    updateIcon();
  });

  var reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  var navLinks = document.querySelectorAll('.nav-list a[href^="#"]');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      var target = document.querySelector(href);
      if (target) {
        var offset = 80;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }

      navLinks.forEach(function (l) { l.classList.remove('active'); });
      this.classList.add('active');
    });
  });

  window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('section[id]');
    var scrollY = window.pageYOffset + 120;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });
})();
