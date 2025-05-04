const clock = document.querySelector("#clock");
const day = document.querySelector("#day");

console.log(clock);

let date = new Date();

console.log( "toLocaleTimeString = ", date.toLocaleTimeString());
console.log( "toLocaleDateString = ", date.toLocaleDateString());
console.log( "toDateString = ", date.toDateString());
console.log( "toTimeString = ", date.toTimeString());
console.log( "toLocaleString = ", date.toLocaleString());
console.log( "toString = ", date.toString());
console.log( "toTimeString = ", date.toTimeString());
console.log( "toUTCString = ", date.toUTCString());
console.log( "toISOString = ", date.toISOString());
console.log( "toJSON = ", date.toJSON());
console.log( "date = ", date);
console.log( "getDate = ", date.getDate());
console.log( "getDay = ", date.getFullYear());

setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    day.innerHTML = date.toLocaleDateString();
}, 1000);