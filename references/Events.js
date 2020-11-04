const EventEmitter = require('events');
class MyEmitter extends EventEmitter{
   
}
 //init object
 const myEmitter = new MyEmitter();
 //Event Listener
 myEmitter.on('event',()=>console.log('Event Fired!!'));

//Initialise Event

myEmitter.emit('event');

// myEmitter.emit('event');
// myEmitter.emit('event');
// myEmitter.emit('event');
// myEmitter.emit('event');
