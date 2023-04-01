// Problem-11: A food ordering app needs to sort the menu items by price.

const menuItems = [
  { name: 'Burger', price: '90' },
  { name: 'Pizza', price: '300' },
  { name: 'Fries', price: '120' },
  { name: 'Soda', price: '100' },
];

menuItems.sort((a, b) => a.price - b.price);

console.log(menuItems);
