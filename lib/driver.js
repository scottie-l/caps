'use strict';

const EE = require('../hub/hub.js');

// listen for P/U req
// alert when pkg in transit
function resToPickup(payload) {
  console.log(`driver: picked up ${payload.orderId}`);
  // EE.emit('pickup', payload);
}

// alert when delivered
function alertDriver(payload) {
  setTimeout(() => {
    console.log(`driver: has delivered ${payload.orderId}`);
    // EE.emit('delivered', payload);
  }, 2000);
}

module.exports = {
  resToPickup, 
  alertDriver,
};

