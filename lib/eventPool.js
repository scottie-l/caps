// 'use strict';

// // create event
// const Events = require('events');

// // creates a singleton
// const eventPool = new Events();

// module.exports = eventPool;


// driver.js starter code
// const eventPool = require('./eventPool.js');

// function handleLight(payload) {
//   if (payload.brightness > 60) {
//     console.log('closing eyeslids');
//   } else {
//     console.log('opening eyeslids');
//   }
// }

// //pass callback
// eventPool.on('light', handleLight); {
//   console.log('light has changed');
// }

// setInterval(() => {
//   let brightness = Math.floor(Math.random() *100) +1;
//   eventPool.emit('light', { brightness });
// }, 2000);


//vendor.js starter code

// eventPool.on('light', (payload) => {
//   console.log('light has changed');
//   console.log('payload recived', payload);
  
//   if (payload.brightless >60) {
//     console.log('it is very bright');
//   } else {
//     console.log('it is too cold');
//   }
// });

// list of events to respond to 
// the event can be whatever we want put here

// eventPool.emit('light', { brightness: 60 });
// eventPool.on('light', (payload) => {
//   let warm = false;
//   if (payload.brightness <70) {
//     warm = true;
//   }
//   eventPool.emit('warmth', { warm });
// });

// events won't work in dev console. It has no idea what require is. Not a reserved word
