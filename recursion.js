// Counting Sheep

function sheepCounter(n) {
  if (n === 0) {
    return console.log('All sheep jumped over the fence');
  }
  console.log(n, 'Another sheep jumps over the fence');
  n--;
  sheepCounter(n);
}

//sheepCounter(3);

// Power Calculator

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
//console.log(result);

// Reverse String

function reverseString(str) {
  if (str === '') return '';
  else return reverseString(str.substr(1)) + str.charAt(0);
}

//console.log(reverseString('This is the starting string'));

// nth Triangular Number

function tri(n) {
  if (n <= 1) {
    return n;
  }
  return n + tri(n - 1);
}

//console.log(tri(9));

// String Splitter

function stringSplitter(str) {}

// Fibonacci

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//console.log(fibonacci(7));

// Factorial Numbers

function factorial(n) {
  const nextNum = n - 1;
  if (n === 1) {
    return n;
  }
  return n * factorial(nextNum);
}

//console.log(factorial(5));

// Maze Solver

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];
function mazeSolver(maze) {
  function move(column, row) {
    if (maze[column][row] == 'e') {
      console.log('Maze exit');
    } else if (maze[column][row] == ' ') {
      //console.log('Moving through (' + column + ', ' + row + ')');
      maze[column][row] = 6;
      if (maze[column][row] == '*') {
        console.log('D');
        move(column + 1, row);
      }
      if (column < maze.length - 1) {
        console.log('D');
        move(column + 1, row);
      }
      if (row < maze[column].length - 1) {
        console.log('R');
        move(column, row + 1);
      }
      if (column > 0) {
        console.log('L');
        move(column, row - 1);
      }
    }
  }
  move(0, 0);
}

//mazeSolver(maze);

// Anagrams

function anagrams(str) {}

// Organization Chart

function orgChart() {}
