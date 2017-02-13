import io from 'socket.io-client';
import $ from 'jquery';
import token from '../secretToken.js'

const clientSocket = io.connect('http://ec2-54-218-99-237.us-west-2.compute.amazonaws.com:3000', {
  query: 'token=' + token
});

clientSocket.on('flash:received', function() {
  console.log("He heard me, hooray!!")
})

clientSocket.on('on:received', function() {
  console.log("He heard me, hooray!!")
})

clientSocket.on('off:received', function() {
  console.log("He heard me, hooray!!")
})

// Control from terminal
// process.stdin.resume();
// process.stdin.setEncoding('utf8');
//
// process.stdin.on('data', function(chunk) {
//   switch (chunk.trim()) {
//     case 'on':
//       clientSocket.emit('on');
//       break;
//     case 'off':
//       clientSocket.emit('off');
//       break;
//     case 'flash':
//       clientSocket.emit('flash');
//       break;
//     default:
//       clientSocket.emit('off');
//       break;
//   }
// })

// Control from webpage
$(document).ready(() => {
  $(document).keydown(e => {
    switch (e.which) {
      case 38:
        clientSocket.emit('on');
        break;
      case 39:
        clientSocket.emit('onYellow');
        break;
      case 37:
        clientSocket.emit('onRed');
        break;
      case 40:
        clientSocket.emit('flash');
        break;
      case 68:
        clientSocket.emit('dance');
        break;
      default:
        clientSocket.emit('off');
        break;
    }
  })
  $(document).keyup(e => {
    switch (e.which) {
      case 38:
        clientSocket.emit('off');
        break;
      case 39:
        clientSocket.emit('offYellow');
        break;
      case 37:
        clientSocket.emit('offRed');
        break;
    }
  })
})
