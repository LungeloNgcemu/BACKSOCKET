import { Server } from "socket.io";

const io = new Server(3000, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("Justin", (msg) => io.emit("Justin", msg));
  socket.on("Tahlia", (msg) => io.emit("Tahlia", msg));
  socket.on("Lungelo", (msg) => io.emit("Lungelo", msg));
  socket.on("Don", (msg) => io.emit("Don", msg));
});

console.log("✅ Socket.IO server running on port 3000");
