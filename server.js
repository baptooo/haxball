var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    clients = {};

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/server/views/main.html');
});

app.get('/**/*.js', function(req, res) {
    res.sendfile(__dirname + req.originalUrl);
});

io.sockets.on('connection', function(socket) {
    clients[socket.id] = socket;
    console.log('Welcome to ' + socket.id);
});

server.listen(80);