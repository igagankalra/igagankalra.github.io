const express = require('express');
const app = express();

let clients = [];

// SSE endpoint
app.get('/events', (req, res) => {
  // Set headers for SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  // Add client to the list
  clients.push(res);

  // Remove client when connection closes
  req.on('close', () => {
    clients = clients.filter(client => client !== res);
  });
});

// Function to send an event to all clients
function sendEvent(data) {
  clients.forEach(client => {
    client.write(`data: ${JSON.stringify(data)}\n\n`);
  });
}

// Example: send a message every 5 seconds
setInterval(() => {
  sendEvent({ message: 'Hello at ' + new Date().toISOString() });
}, 5000);

app.listen(3000, () => {
  console.log('SSE server running on http://localhost:3000/events');
});