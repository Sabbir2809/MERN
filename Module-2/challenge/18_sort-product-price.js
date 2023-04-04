// Problem-18: Given an array of objects representing products, sort the products by price from lowest to highest.

const products = [
  { name: 'DCL', price: 35000 },
  { name: 'Samsung', price: 7000 },
  { name: 'Huawei', price: 16000 },
  { name: 'Logitech', price: 1400 },
];

products.sort((x, y) => x.price - y.price);

console.log(products);
