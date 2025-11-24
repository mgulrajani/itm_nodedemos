// server.js
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { registerChatHandlers } from "./chat.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

// Import chat logic
registerChatHandlers(io);

httpServer.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
