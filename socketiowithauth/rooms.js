// rooms.js
export function registerRoomHandlers(io) {
    io.on("connection", (socket) => {
      console.log("User connected for rooms");
  
      socket.on("join room", (room) => {
        socket.join(room);
        socket.to(room).emit("message", `A new user joined room: ${room}`);
      });
  
      socket.on("room message", ({ room, msg }) => {
        io.to(room).emit("message", msg);
      });
    });
  }
  