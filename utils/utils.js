const add = (number1, number2) => number1 + number2;

const square = number => number * number;

const setName = (user, fullName) => {
  let names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};

const asyncAdd = (number1, number2, callback) => setTimeout(() => callback(number1 + number2), 1000);

module.exports = { add, square, setName, asyncAdd };
