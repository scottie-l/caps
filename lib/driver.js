'use strict';

const socketioClient = require('socket.io-client');

const socket = socketioClient.connect(process.env.HUB_URL || 'http://localhost:3000/caps');

socket.on('connect', () => console.log('driver is ', socket.id));

function resToPickup(payload) {
  console.log(`driver: picked up ${payload.orderId}`);
  socket.emit('package in transit', payload);
  setTimeout(() => {
    alertDelivered(payload);
  }, 2000);
}

function alertDelivered(payload) {
  console.log(`driver: has delivered ${payload.orderId}`);
  socket.emit('delivered', payload);
}

socket.on('pickup', resToPickup);


// const ee = require('../caps-server/hub.js');

// // listen for P/U req
// // alert when pkg in transit
// function resToPickup(payload) {
//   console.log(`driver: picked up ${payload.orderId}`);
//   // ee.emit('pickup', payload);
// }

// // alert when delivered
// function alertDriver(payload) {
//   setTimeout(() => {
//     console.log(`driver: has delivered ${payload.orderId}`);
//     // ee.emit('delivered', payload);
//   }, 2000);
// }

// module.exports = {
//   resToPickup, 
//   alertDriver,
// };
