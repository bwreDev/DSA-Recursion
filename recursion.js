//Counting Sheep

function sheepCounter(n) {
  if (n === 0) {
    return console.log('All sheep jumped over the fence');
  }
  console.log(n, 'Another sheep jumps over the fence');
  n--;
  sheepCounter(n);
}

sheepCounter(3);

//Power Calculator

function powerCalculator(n, f) {
  if (f <= 0) {
    return 'Exponent should be > 0';
  }
  if (f == 1) {
    return n;
  }
  f--;
  const result = powerCalculator(n, f);
  if (result > 0) {
    return n * powerCalculator(n, f);
  }
  return result;
}
const result = powerCalculator(10, 2);
console.log(result);

//Reverse String

function reverseString(str) {
  if (str === '') return '';
  else return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString('This is the starting string'));

//nth Triangular Number

function tri(n) {
  if (n <= 1) {
    return n;
  }
  return n + tri(n - 1);
}

console.log(tri(9));

//Fibonacci

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7));
