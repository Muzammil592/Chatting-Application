Real-Time Chat Application
This project is a real-time chat application designed and developed to enable instant messaging between multiple users. It leverages Socket.IO for bi-directional communication, ensuring messages are delivered instantly and reliably. The frontend is crafted with HTML and CSS, ensuring a responsive and user-friendly experience across devices. The backend is built with Node.js, making it scalable and efficient for managing active connections and user sessions.

Features
  Real-Time Bi-Directional Messaging
    Instant message exchange using Socket.IO for persistent socket connections.

 Responsive UI
    Clean, modern interface that works seamlessly on desktops, tablets, and mobile devices.

 Scalable Backend
    Node.js server handles multiple concurrent connections with optimized session management.

User-Friendly Experience
    Simple login/join chat flow, active user list, and live message feed.

| Layer                   | Technology            |
| ----------------------- | --------------------- |
| Frontend                | HTML, CSS, JavaScript |
| Backend                 | Node.js               |
| Real-Time Communication | Socket.IO             |
| Runtime                 | Node.js               |

How It Works
  User connects:
    When a user opens the chat page, a Socket.IO client establishes a persistent WebSocket connection with the server.

 Message send & receive:
    When a user sends a message, the client emits a message event to the server. The server broadcasts this message to all connected clients.

 Real-time updates:
    All connected clients instantly receive new messages without reloading the page.

 Scalable sessions:
```Node.js handles multiple user sessions, keeping track of connected users for broadcasting.
