// Problem-20: in a web application that displays a list of products with their prices in different currencies. Let's say that we have an array of products, where each product has a name and a price property in USD. We want to display a list of these products with their prices converted to a different currency, based on the user's preferences.

const products = [
  { name: 'DCL', price: 332 },
  { name: 'Samsung', price: 66 },
  { name: 'Huawei', price: 151 },
  { name: 'Logitech', price: 13 },
];

const currencyExchangeRate = 105;
const currencySymbol = '৳';

const productsInTk = products.map((product) => ({
  name: product.name,
  price: `${(product.price * currencyExchangeRate).toFixed(2)} ${currencySymbol}`,
}));

console.log(productsInTk);
