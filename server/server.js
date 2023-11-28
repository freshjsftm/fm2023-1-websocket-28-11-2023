const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');

const port = process.env.PORT || 3000;
const server = http.createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('', () => {});
});

server.listen(port, () => {
  console.log('server started at port ', port);
});
