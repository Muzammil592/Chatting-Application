const io = require('socket.io')(3000, {
    cors: {
        origin: "https://muzammil592.github.io/Chatting-Application/", 
        methods: ["GET", "POST"]
    }
});

const users = {};

io.on('connection', (socket) => {
    socket.on('new-user-Joined', name1 => {
        users[socket.id] = name1;
        socket.broadcast.emit('user-joined', name1)
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name1: users[socket.id] });
    });

    // User disconnects from the chat
    socket.on('disconnect', () => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
});
