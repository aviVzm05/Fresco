//create a new event object and a bind this to a function. when a event is emited, this function is called.

// create a new eventEmitter object.
const events = require('events');
const eventEmitter = new events.EventEmitter();

//create a function which gets called when thi s event of myEvent occurs.

function myFunction(){
    console.log("here we go....")
};

//bind the function to a event name....
eventEmitter.on('myEvent',myFunction);

//trigger the event

eventEmitter.emit('myEvent');
