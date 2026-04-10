---
layout: default
title: Gagandeep Singh Kalra | Senior Software Engineer
description: Senior Software Engineer with 7 years designing event-driven microservices and cloud-native platforms in Go, Python, and TypeScript.
keywords: Gagandeep Singh Kalra, Senior Software Engineer, Go, Golang, Python, TypeScript, Microservices, AWS, GCP, Azure, Kubernetes, AI, LLM, Delhi, India, Gagan Kalra
author: Gagandeep Singh Kalra
---

<h1 align="center">Hi there, I'm Gagandeep Singh Kalra 👋</h1>
<h3 align="center">Senior Software Engineer | Go, Python, TypeScript</h3>
<p align="center">
  Jalandhar, India (Remote)<br/>
  <a href="mailto:gagan.logic@gmail.com">gagan.logic@gmail.com</a> &middot;
  <a href="tel:+918360420520">+91 83604 20520</a><br/>
  <a href="https://www.linkedin.com/in/igagankalra/">LinkedIn</a> &middot;
  <a href="https://github.com/igagankalra">GitHub</a>
</p>

---

Senior Software Engineer with 7 years designing event-driven microservices and cloud-native platforms in Go, Python, and TypeScript. Re-architected Gartner's CRM across 21 microservices and 49+ Lambdas, then built G2's Forge — an AI agent platform that automates the full Jira-to-deployment lifecycle for engineering teams.

---

## Technical Skills

**Languages:** Go, Python, TypeScript, SQL, Shell Scripting

**Backend:** Gin, Fiber, mux, FastAPI, Flask, gRPC, GraphQL, REST

**Frontend:** Next.js 14/15 (App Router), React, Tailwind CSS, TanStack Query, Zustand

**Cloud & Infra:** AWS (Lambda, EC2, S3, SNS, SQS, API Gateway), GCP, Terraform, Docker, Kubernetes, Bazel

**Data:** PostgreSQL, Redis, Elasticsearch, MongoDB, Kafka, RabbitMQ

**AI & Tooling:** LLM agent orchestration, MCP (Model Context Protocol), AI-assisted development workflows

**Testing:** Playwright, Vitest, testcontainers, httptest, table-driven tests, CI/CD (Jenkins, GitHub Actions, GitLab)

**Observability:** Grafana, Datadog, Kibana, LaunchDarkly (feature flags)

---

## Professional Experience

### Advanced Software Engineer — G2

*Feb 2026 – Present &middot; Remote*

- Built **Forge** — an AI agent development platform that takes Jira tickets through a 9-phase lifecycle (planning, implementation, deployment, documentation) using LLM orchestration and MCP knowledge graphs. Adopted by PPL and BX engineering teams.
- Developed a knowledge management portal (Next.js 15) with org-wide and per-team MCP memory graphs, indexing 1,277 Confluence pages across 34 spaces into a searchable developer knowledge base.
- Leading **Gartner Disentanglement** — removing 20+ Gartner dependencies across 4 repos ahead of a hard June 2026 deadline: domain migration, brand removal, Okta auth replacement.
- Driving the **webcall conversion pipeline** initiative — analyzing and documenting the full Portal-to-Legacy flow, building strategy docs and implementation plans for reliable conversion tracking.
- Contributing to **email/SMTP migration** from the SA monolith to SendGrid — multi-brand email support, expansion lead email triggers, and close-match email templates.
- Architected Gondor entity catalogs — mapping 21 entities, field-level schemas, lifecycle states, and Kafka event flows for the data platform.
- Built on-call runbooks and observability specs to reduce incident response time.

### Software Engineer II — Gartner

*May 2022 – Feb 2026 &middot; Gurugram (Remote)*

- Led end-to-end re-architecture of a revenue-critical CRM platform from legacy PHP to Go (Fiber, mux) and Python (FastAPI) — 1,150+ commits across 21 microservices, 49+ Lambda functions, and 90+ Jira tickets.
- Designed event-driven architectures with Kafka producers/consumers, AWS SNS/SQS, and Lambda for real-time billing, invoice processing, and data sync across services.
- Built the **opportunity action scoring system** — SQS-backed Lambda pipeline for scheduling and processing qualification scorecards, with Terraform-provisioned infrastructure.
- Developed **invoice and billing modules** — customer/vendor invoice generation, statement processing, tax calculation, and Braintree payment integration via Kafka consumers.
- Built **advisor compensation and goals APIs** — team goals approval/disapproval endpoints, territory assignment endpoints, and cron-based scoring with result tracking.
- Created the **conversion funnel pipeline** — Lambda functions for conversion tracking, garbage collection, duplicate detection, and multi-market child conversion handling with LaunchDarkly feature flags.
- Implemented **Nylas calendar integration** for advisor scheduling and built lead syncer Lambdas for SA lead data synchronization.
- Managed 49+ Terraform-provisioned resources (Lambda, SNS, SQS, IAM, KMS) and deployed infrastructure changes across 14 services in the midgard Bazel monorepo.
- Contributed to 7 Software Advice repos — adding webcall conversion types, Cognito auth updates, and feature-flagged rollouts.
- Mentored junior engineers through code reviews, system design reviews, and on-call incident response.

### Software Engineer — GlobalLogic

*July 2019 – May 2022 &middot; Noida*

- Drove 3 Go and Python products from development to General Availability (GA), earning a Spot Award for the launch.
- Led development of custom Elastic Beats modules for multi-cloud data ingestion from AWS, GCP, and Azure — shipping data into centralized analytics platforms.
- Automated CI/CD pipelines with Jenkins and GitLab, integrating functional and regression test suites — reduced manual QA effort by ~10 hours/week per release cycle.
- Built Python automation scripts for data validation, monitoring, and operational reporting.
- Coordinated Docker containerization and infrastructure provisioning with QA and DevOps teams.

### SDET Intern — GlobalLogic

*Feb 2019 – June 2019 &middot; Noida*

- Built Docker and Docker Compose pipelines for containerized testing environments.
- Contributed to Jenkins CI/CD automation using Python.

---

## Projects

### LeadMapper — B2B Geo Lead Generation SaaS

[github.com/igagankalra/leadmapper](https://github.com/igagankalra/leadmapper)

Full-stack SaaS built solo from architecture to production. Users search a business niche + location, the Go backend discovers businesses via Google Places API, a goroutine worker pool scrapes each website for emails and socials, and results appear live via 3s polling. Stripe billing with Free/Pro/Business tiers.

- **Backend:** Go, Gin, PostgreSQL, colly scraper, concurrent worker pool, Supabase JWT auth
- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Playwright tests
- **Infra:** Supabase (auth + DB), Stripe (billing), Vercel + Render.com
- **Quality:** 95% backend / 93% frontend test coverage

---

## Education

**Bachelor of Technology (IT)** — DAV Institute of Engineering & Technology, 2015–2019

---

## Certifications

- Cloud Native Application Architecture Nanodegree — Udacity, 2021
- Google Cloud Associate Cloud Engineer — 2019

---

## Achievements

- Excellence Award for Q4'20, GlobalLogic
- Spot Award for leading product to General Availability, GlobalLogic
- Best Fresher Award, GlobalLogic (2019 batch)

---

## Languages

- English (Full Professional Proficiency)
- Hindi (Native)
- Punjabi (Full Professional Proficiency)
