const EventEmitter = require('events');

console.log(EventEmitter);

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
console.log(myEmitter);
myEmitter.on('Waterfull', () => {
  console.log('Tank has filled please turn off the motor now!');
});
myEmitter.on('Waterempty', () => {
    console.log('Tank has become empty please turn on the motor now!');
  });
console.log(myEmitter);
myEmitter.emit('Waterfull');
myEmitter.emit('Waterempty')