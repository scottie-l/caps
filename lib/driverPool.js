'use strict';

const eventPool = require('./eventPool.js');

function handleLight(payload) {
  if (payload.brightness > 60) {
    console.log('closing eyeslids');
  } else {
    console.log('opening eyeslids');
  }
}

//pass callback
eventPool.on('light', handleLight); {
  console.log('light has changed');
}

setInterval(() => {
  let brightness = Math.floor(Math.random() *100) +1;
  eventPool.emit('light', { brightness });
}, 2000);


//eyes.js file