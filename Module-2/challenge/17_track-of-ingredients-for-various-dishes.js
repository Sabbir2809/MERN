// Problem-17: A restaurant wants to keep track of its inventory of ingredients for various dishes. The restaurant's chefs need to be able to easily update the inventory levels for each ingredient as they use them in dishes.

const ingredients = [
  { name: 'Dough', inventory: 10 },
  { name: 'Tomato Sauce', inventory: 8 },
  { name: 'Mozzarella Cheese', inventory: 6 },
  { name: 'Pepperoni', inventory: 4 },
  { name: 'Mushrooms', inventory: 3 },
];

const updateInventory = (name, quantity) => {
  const ingredient = ingredients.find((item) => item.name === name);

  if (ingredient) {
    ingredient.inventory -= quantity;
    console.log(`Inventory Updated for ${name}: ${ingredient.inventory} Remaining`);
  } else {
    console.log(`Ingredient ${name} Not Found`);
  }
};

updateInventory('Dough', 2);
updateInventory('Olives', 1);
