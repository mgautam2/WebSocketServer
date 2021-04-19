const http = require('http')
const socketio = require('socket.io')


const app = require("./app.js");
const PORT = process.env.PORT || 4000;
const server = http.createServer(app);
const io = socketio(server);

server.listen( PORT, () => { 
  console.log("Server started listening on port: 4000");
});



const onConnection = (socket) => {
  console.log("Socket Connected")
  socket.on("disconnect", console.log("disconnected"));
}

io.on("connection", onConnection);

server.listen(PORT);
