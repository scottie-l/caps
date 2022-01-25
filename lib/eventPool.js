'use strict';

// create event
const Events = require('events');

// creates a singleton
const eventPool = new Events();

module.exports = eventPool;
