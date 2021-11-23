//added in as part of ex. 3
const got = require('got');

// console.log(1);

// got('https://api.github.com/repos/sinatra/sinatra').then((response) => {
//   console.log(3)
//   console.log(response);
// });

// console.log(2)


// 1 - using setTimout() function
const printHello = () => {
  setTimeout(function() {
   console.log('Hello');
  }, 5000);
};

// printHello()

// 2 -  using setInterval() function
let count = 0;

const incrementCounter = (count) => {
  setInterval(function() {
    console.log(count++)
  }, 1000)
};

//incrementCounter(count)

//3 - returning a value

