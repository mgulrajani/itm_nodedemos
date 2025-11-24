// server.js
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { registerChatHandlers } from "./chat.js";
import { registerRoomHandlers } from "./rooms.js";
import { registerAuthHandlers } from "./auth.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

// Modular handlers
registerAuthHandlers(io);
registerChatHandlers(io);
registerRoomHandlers(io);

httpServer.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});

