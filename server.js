let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io').listen(server);
let PlayerService = require('./private/playerService');
let playerService = new PlayerService();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(8081, function () {
  console.log(`Listening on ${server.address().port}`);
  io.on('connection', function (socket) {
    console.log('a user connected', socket.id);
    playerService.addPlayer(socket);
    socket.on('disconnect', function () {
      console.log('user disconnected');
      playerService.removePlayerById(socket);
    });
  });
});