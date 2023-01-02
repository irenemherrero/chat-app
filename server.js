const CLIENT_PORT = "http://127.0.0.1:8080" 
const CONNECTED_USER_MESSAGE = 'User connected'
const DISCONNECTED_USER_MESSAGE = 'User connected'

const io = require("socket.io")(3000, {
  cors: {
		origin: [CLIENT_PORT]
	}
});

io.on('connection', socket => {
	console.log(CONNECTED_USER_MESSAGE)
	socket.on('chatMsg', msg => io.emit('message', msg))
	socket.on('disconnect', () => console.log(DISCONNECTED_USER_MESSAGE))
})
