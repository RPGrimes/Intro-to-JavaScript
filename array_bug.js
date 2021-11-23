const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEvenNumber = (number) => {
  number % 2 == 0;
};

const evenNumbers = filter(isEvenNumber(numbers));
