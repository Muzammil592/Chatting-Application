const socket = io('hhttps://muzammil592.github.io/Chatting-Application/:3000');
var audio=new Audio('1.mp3')

const form = document.getElementById('send-container');
const messageinp = document.getElementById('messageinp');
const messagecontainer = document.querySelector('.container'); 

// Function to append messages to the chat window
const append1 = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
    if(position=='left')
    audio.play()
}

// Prompt the user to enter their name and join the chat
const name1 = prompt("Enter your name to join");

socket.emit('new-user-Joined', name1);

// Listen for other users joining
socket.on('user-joined', name1 => {
    append1(`${name1} joined the chat`, 'right');
});

// Send a message when the form is submitted
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageinp.value;
    append1(`You: ${message}`, 'right');  // Append your own message to the chat
    socket.emit('send', message);  // Send the message to the server
    messageinp.value = "";  // Clear the input
});

// Listen for messages from other users
socket.on('receive', data => {
    append1(`${data.name1} : ${data.message}`, 'left');  // Append received message to the chat
});

// Listen for users leaving
socket.on('left', name1 => {
    append1(`${name1} left the chat`, 'left');  // Append the "left" message to the chat
});
