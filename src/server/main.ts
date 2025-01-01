import express from "express";
import ViteExpress from "vite-express";
import { createServer } from "node:http";
import {Server} from "socket.io";

const app = express();


app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});
const server = ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected with id '+socket.id);
  io.to(socket.id).emit("connection");
  socket.on("test",(val)=>{
    console.log("test event received with val"+val);
  });
});