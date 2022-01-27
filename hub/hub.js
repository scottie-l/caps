'use strict';

const Events = require('events');
const logger = require('../lib/logger.js');
const { reqPickup, resToDelivered } = require('../lib/vendor.js');
const { resToPickup, alertDelivered } = require('../lib/driver.js');
const EE = new Events;

console.log('hub.js is running');

// Listeners
EE.on('pickup', resToPickup);
EE.on('pickup', (payload) => logger('in transit', payload));
EE.on('pickup', alertDelivered);

// Be notified when pkg delivered
EE.on('delivered', resToDelivered);
EE.on('delivered', payload => logger('delivered'. payload));

setInterval(() => {
  reqPickup();
}, 3000);

module.exports = EE;
