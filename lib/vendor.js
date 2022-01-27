'use strict';

const EE = require('../hub/hub.js');
// const eventPool = require('./eventPool.js');

// alert when there is a pkg to P/U
function reqPickup() {
  const newOrder = {
    store: 'Costco',
    orderId: '123abc',
    customer: 'Me Myself NI',
    address: 'Somewhere USA',
  };
  EE.emit('pickup', newOrder);
}

// alert when notified of delivery
function resToDelivered(payload) {
  console.log(`Thanks, ${payload.customer} for shopping with us`);
}

module.exports = {
  reqPickup, 
  resToDelivered,
};
