'use strict';

const socketioClient = require('socket.io-client');

const socket = socketioClient.connect(process.env.HUB_URL || 'http://localhost:3000/caps');

socket.on('connect', () => {
  console.log(`you are connected with the vendor id: ${socket.id}`);
});

function reqPickup() {
  const newOrder = {
    store: 'Costco',
    orderId: '123abc',
    customer: 'Me Myself NI',
    address: 'Somewhere USA',
  };
  console.log(newOrder);
  console.log('current socket in P/U request is ', socket.id);
  socket.emit('pickup', newOrder);
}

function resToDelivered(payload) {
  console.log(`Thanks, ${payload.customer} for shopping with us`);
}

socket.on('ready for order', () => {
  console.log('caps is ready for order');
  console.log('your socket id: ', socket.id);
  reqPickup();
});


// const ee = require('../caps-server/hub.js');
// const eventPool = require('./eventPool.js');

// // alert when there is a pkg to P/U
// function reqPickup() {
//   const newOrder = {
//     store: 'Costco',
//     orderId: '123abc',
//     customer: 'Me Myself NI',
//     address: 'Somewhere USA',
//   };
//   ee.emit('pickup', newOrder);
// }

// // alert when notified of delivery
// function resToDelivered(payload) {
//   console.log(`Thanks, ${payload.customer} for shopping with us`);
// }

// module.exports = {
//   reqPickup, 
//   resToDelivered,
// };
