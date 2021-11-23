const checkLength = (number) => {
  if (number.length <= 10) return true;
  else return false;
  end;
};

console.log(checkLength(10));

const filterLongNumbers = (array) => {
  return array.filter(checkLength);
};

numbers = [
  "1763687364",
  "4763687363",
  "7867867862",
  "aaaaaaaabbbbbbbcccccdddddddd", // this element should be filtered
];
console.log(filterLongNumbers(numbers));
