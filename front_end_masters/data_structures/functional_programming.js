// map
const double = num => 2*num;
const doubleEach = input => input.map(double);

const square = num => num*num;
const squareEach = input => input.map(square);

const doubleAndSquareEach = input = input.map(double).map(square);

const myMap = (array, fn) => {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    answer.push(fn(array[i]));
  }
  return answer;
};

// reduce
