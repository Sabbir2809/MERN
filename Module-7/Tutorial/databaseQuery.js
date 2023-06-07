use('ecommerce');

// db.users.insertOne(
//   {
//     "name": "Sabbir Hossain",
//     "age": 25,
//   }
// )

// db.users.insertMany(
//   [
//     {
//       "name": "Mahfuza Akter Shorna",
//       "age": 23
//     },
//     {
//       "name": "Tahmid",
//       "age": 8
//     },
//   ]
// )

// db.users.find()

// db.users.findOne(
//   {"name": "Sabbir Hossain", "age": 25}
// )

// db.products.insertMany(
//   [
//     {
//       "brand": "DCL",
//       "price": 35000,
//       "color": "Silver"
//     },
//     {
//       "brand": "HP",
//       "price": 50000,
//       "color": "Black"
//     },
//     {
//       "brand": "DELL",
//       "price": 60000,
//       "color": "Gray"
//     },
//     {
//       "brand": "APPLE",
//       "price": 150000,
//       "color": "Silver-gray"
//     },
//   ]
// )

// db.products.find(
//   {},
//   // {"_id": 0, "color": 0}
//   {_id: 0, color: 0}
// )

// db.products.find(
//   {
//     // price: {$eq: 35000}
//     // price: {$gte: 35000}
//     // price: {$ne: 35000}
//     // price: {$in: [35000, 50000]}
//     // price: {$nin: [35000, 50000, 150000]}
//   }
// )

// db.products.find(
//   {
//     // country: {$exists: true}
//     // country: {$exists: false}
//     releaseDate: {$exists: true}
//   }
// )

// db.products.find(
//   {
//     price: {$type: 2},
//   }
// )

// db.monthlyBudget.find(
//   {
//     $expr: {
//       $gt: ['budget', 'spent']
//     }
//   }
// )

// db.monthlyBudget.find(
//   {
//     budget: {
//       $mod: [2, 0]
//     }
//   }
// )

// db.products.find(
//   {
//     brand: {
//       $regex: "D"
//     }
//   }
// )

// db.monthlyBudget.find(
//   {
//     $where: "this.budget>this.spent"
//   }
// )

// db.products.find().sort({
//   // brand: 1
//   brand: -1
// })

// db.products.find().limit(2);

// db.products.find().count();

// db.products.find().sort({"brand": -1}).limit(2);

// db.products.distinct('color');

db.products.deleteOne({
  _id: ObjectId('64802a26f49a0672343153fe'),
});
