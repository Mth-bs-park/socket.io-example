var app = require('express')();
var server = require('http').createServer(app);
// httpServer to socketServer
var io = require('socket.io')(server);

var path = require('path');

app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname + '/../client/index.html'));
});

app.get('/lib/socket.io.js', function(req, res) {

    res.sendFile(path.join(__dirname + '/../client/lib/socket.io.js'));
});

server.listen(3000, function() {
    console.log('Socket IO server listening on port 3000');
});

io.on('connection', function(socket) {

    socket.on('request', function(data){
        console.log('call:: request', data);
        socket.emit('request','hi:: kkk');
    });

    socket.on('disconnect', function(data){
        console.log('disconnect', data, socket.conn.id);
    });
});



