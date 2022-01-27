'use strict';

const socketio = require('socket.io');
const PORT = process.env.PORT || 3000;
const server = socketio(PORT);

const caps = server.of('/caps');

caps.on('connection', (socket) => {
  console.log('connected to socket: ', socket.id);
  socket.join('vendors');
  caps.to('vendors').emit('ready for order');

  socket.on('pickup', (payload) => {
    console.log('we have a pickup', socket.id);
    caps.emit('pickup', payload);
  });

  socket.on('delivered', () => {
    console.log('deliverance!!!');
  });
}); 


// const Events = require('events');
// const logger = require('../lib/logger.js');
// const { reqPickup, resToDelivered } = require('../lib/vendor.js');
// const { resToPickup, alertDelivered } = require('../lib/driver.js');
// const ee = new Events;

// console.log('hub.js is running');

// // Listeners
// ee.on('pickup', resToPickup);
// ee.on('pickup', (payload) => logger('in transit', payload));
// ee.on('pickup', alertDelivered);

// // Be notified when pkg delivered
// ee.on('delivered', resToDelivered);
// ee.on('delivered', payload => logger('delivered'. payload));

// setInterval(() => {
//   reqPickup();
// }, 3000);

// module.exports = ee;
