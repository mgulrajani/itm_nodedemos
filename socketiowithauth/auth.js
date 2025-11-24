// auth.js
export function registerAuthHandlers(io) {
    io.use((socket, next) => {
      const token = socket.handshake.auth.token;
      if (token === "valid-token") {
        next();
      } else {
        next(new Error("Authentication error"));
      }
    });
  
    io.on("connection", (socket) => {
      console.log("Authenticated user connected");
    });
  }
  