const myFunction = (x, y, ...params) => {
  console.log(x, y);
  console.log(params);
};

myFunction(1, 2, 3, 4, 5, 6, 7, 8, 9);
