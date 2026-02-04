const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

app.use(express.json());

//routes
app.use(require("./routes/health"));
app.use(require("./routes/hello"));
app.use(require("./routes/rsvp"));

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("rsvp", (data) => {
    console.log("RSVP received:", data);
    socket.emit("rsvp-status", { status: "received" });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(3001,() => {
  console.log('Node API + WS running on port 3001');
});
