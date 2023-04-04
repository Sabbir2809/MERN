/*
Problem-16: 

Suppose you are developing an e-commerce website that allows customers to purchase products. You want to implement a feature that suggests related products to customers based on their previous purchases. To do this, you decide to look for pairs of products that customers frequently purchase together.

You have an array of integers representing the product IDs of all purchases made on your website in a single day. You want to find pairs of products that customers frequently purchase together so that you can suggest them as related products.
*/

const purchases = [1, 2, 3, 4, 5, 1, 3, 5, 6, 7, 4, 8, 9, 9];
const target = 10;
const pairs = [];

const totalPurchases = purchases.length;

for (let i = 0; i < totalPurchases; i++) {
  for (let j = i + 1; j < totalPurchases; j++) {
    if (purchases[i] + purchases[j] == target) {
      pairs.push([purchases[i], purchases[j]]);
    }
  }
}

console.log(pairs);
