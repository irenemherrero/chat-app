
const SERVER_PORT = "http://localhost:3000"

const socket = io(SERVER_PORT)

const messages = document.getElementById('messages')
const chatForm = document.getElementById('chatForm')

// client listener to send message to server
chatForm.addEventListener('submit', e => {
	e.preventDefault()
	socket.emit('chatMsg', chatForm.msg.value)
	chatForm.msg.value = ''
})

const addMessage = msg => {
	const newMessage = `<div>${msg}</div>`
	messages.innerHTML += newMessage
}

// socket listener to get message and display it.
socket.on("message", msg => addMessage(msg))


