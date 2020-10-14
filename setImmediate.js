// setTimeout(function() {
//     console.log('setTimeout')
// }, 0);
// setImmediate(function() {
//     console.log('setImmediate')
// });

// setImmediate(() => console.log('this is set immediate 1'));
// setImmediate(() => console.log('this is set immediate 2'));
// setImmediate(() => console.log('this is set immediate 3'));

// setTimeout(() => console.log('this is set timeout 1'), 0);
// setTimeout(() => {
//     console.log('this is set timeout 2');
//     process.nextTick(() => console.log('this is process.nextTick added inside setTimeout'));
// }, 0);
// setTimeout(() => console.log('this is set timeout 3'), 0);
// setTimeout(() => console.log('this is set timeout 4'), 0);
// setTimeout(() => console.log('this is set timeout 5'), 0);

// process.nextTick(() => console.log('this is process.nextTick 1'));
// process.nextTick(() => {
//     process.nextTick(console.log.bind(console, 'this is the inner next tick inside next tick'));
// });
// process.nextTick(() => console.log('this is process.nextTick 2'));
// process.nextTick(() => console.log('this is process.nextTick 3'));
// process.nextTick(() => console.log('this is process.nextTick 4'));

Promise.resolve().then(() => console.log('promise1 resolved'));
Promise.resolve().then(() => console.log('promise2 resolved'));
Promise.resolve().then(() => {
    console.log('promise3 resolved');
    process.nextTick(() => console.log('next tick inside promise resolve handler'));
});
Promise.resolve().then(() => console.log('promise4 resolved'));
Promise.resolve().then(() => console.log('promise5 resolved'));
setImmediate(() => console.log('set immediate1'));
setImmediate(() => console.log('set immediate2'));

process.nextTick(() => console.log('next tick1'));
process.nextTick(() => console.log('next tick2'));
process.nextTick(() => console.log('next tick3'));

setTimeout(() => console.log('set timeout'), 0);
setImmediate(() => console.log('set immediate3'));
setImmediate(() => console.log('set immediate4'));