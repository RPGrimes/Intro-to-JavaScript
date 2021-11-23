// exercise 1, 1
const convertToUpperCase = (string) => {
  return string.toUpperCase();
};

// console.log(convertToUpperCase('testing this'))

//exercise 1, 2

const array = ['Ryan', 'Danielle', 'Ana Marie', 'Freddie'];

//exercise 1, 3

const capsArray = array.map( name => {
  return convertToUpperCase(name);
});

// console.log(capsArray)

//exercise 2, 1

const isEmpty = (string) => {
  if(!string.trim())
  return true
  else;
  return false;
};

// console.log(isEmpty(''))

//exercise 2, 2

const messages = ['Hello', '', 'How is it going?', 'Bye!', '', ' ', 'Who wants some coffee?', '    '];

//exercise 2, 3

const filteredCapitalArray = (array) => {
  const nonBlankNames = messages.filter((name) => {
    if(isEmpty(name) !== true){
      return name
    }
  });
  const nonBlankCaps = nonBlankNames.map( name => {
    return convertToUpperCase(name);
  });
  return nonBlankCaps;
}

console.log(filteredCapitalArray(messages))
