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
const addTogether = list => {
  return list.reduce((acc, num)) => acc+num, 0;
};

const concatenateStringsWithSpaces =  list => {
  return list.reduce((acc, string)) => acc + string + ' ', '');
};

const squaresAndSubtracts = list => {
  return list
    .map( num => num*num )
    .reduce( (accumulator, num) => accumulator-num );
};

const myReduce = (list, fn, seed) => {
  let answer = seed;
  for (let i = 0; i < list.length; i++) {
    answer = fun(answer, list[i]);
  }
  return answer;
};

// filter
const filterOutOdds = nums => nums.filter( num => num % 2 === 0);

const filterState = (list, state) => list.filter(person => person.state === state);

const showOutOfCADevs = list => {
  return list
    .filter( person => person.state != 'CA')
    .map (person => person.name.toUpperCase())
    .reduce( (acc, nume) => '${acc}, ${name}');
  };

  const myFilter = (list,fn) => {
    const answer = [];
    for (let i=0; i < list.length; i++) {
      if (fn(list[i])) {
        answer.push(list[i]);
      }
    }
    return answer;
  };