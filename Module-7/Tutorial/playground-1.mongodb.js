// ===== Step-1: The current database to use =====
const databaseName = "demo";
use(databaseName);

const collectionName = "products";
// ===== 2: Create a new collection =====
// db.createCollection(collectionName);

// Step-3: insert new document: insertOne({}), insertMany([{},{}])

// db.employee.insertOne({
//   name: "Mahfuza Akter Shorna",
//   designation: "Aggro",
//   salary: 250000,
//   city: "Dhaka"
// })
// db.products.insertMany([
//   {
//     CategoryID: 1654327845,
//     BrandID: 1652474116,
//     Name: "560 ltr Refrigerator",
//     Price: "100000",
//     Unit: "lt",
//     Details: "Refrigerator",
//     CreatedDate: {
//       $date: Date.now(),
//     },
//     ProductID: 1654332429,
//   },
//   {
//     CategoryID: 1654327845,
//     BrandID: 1654327435,
//     Name: "510 ltr Refrigerator",
//     Price: "75000",
//     Unit: "lt",
//     Details: "Refrigerator",
//     CreatedDate: {
//       $date: Date.now(),
//     },
//     ProductID: 1654332476,
//   },
// ]);

// ===== 4: select all data from database: find({}), aggregate([]) =====

// db.employee.find({});
// db.employee.aggregate([]);

// ===== 5: count(), limit() =====

// db.employee.find({}).count('total');
// db.employee.aggregate([{ $count: "total" }]);

// db.employee.find({}).limit(2);
// db.employee.aggregate([{ $limit: 3 }]);

// ===== 6: sort(), match() =====

// db.employee.find({}).sort({name: 1})
// db.employee.aggregate([
//   {
//     $sort: {
//       salary: -1,
//     },
//   },
// ]);

// db.employee.find({}).sort({ _id: -1 }).limit(2);
// db.employee.aggregate([
//   // Stage-1: descending Order
//   { $sort: { _id: 1 } },
//   // Stage-2: sort
//   { $limit: 3 },
// ]);

// db.employee.find({ salary: { $lte: 20000 } });
// db.employee.aggregate([
//   {
//     $match: {
//       salary: { $eq: 20000 },
//     },
//   },
// ]);

// db.employee.aggregate([
//   // Stage-1: salary
//   {
//     $match: {
//       salary: { $eq: 20000 },
//     },
//   },
//   // Stage-2: designation
//   {
//     $match: {
//       designation: "CSE",
//     },
//   },
// ]);

db.employee.aggregate([
  {
    $match: {
      $or: [{ salary: { $eq: 20000 } }, { designation: "EEE" }],
    },
  },
]);
// db.employee.find({ $and: [{ salary: 20000 }, { city: "Dhaka" }] });

// db.employee.aggregate([
//   {
//     $match: {
//       name: /a/,
//     },
//   },
// ]);
// db.employee.find({ city: /D/ });

// ===== Step-7: match in =====
// db.employee.aggregate([
//   {
//     $match: {
//       name: {
//         $in: ["Sabbir Hossain", "Mahfuza Akter Shorna"],
//       },
//     },
//   },
// ]);
// db.employee.find({ name: { $in: ["A", "D"] } });

// ====== Step-8: Projection ======

// db.employee.find({}, { _id: 0, name: 1 });
// db.employee.aggregate([
//   {
//     $project: {
//       _id: 0,
//       designation: 1,
//     },
//   },
// ]);

// ====== Step-9: skip(), limit() pagination ======

// db.employee.aggregate([{ $skip: 1 }, { $limit: 3 }]);
// db.employee.find({}).skip(3).limit(3);

// ====== Step-10: group by sub, avg, max, min ======
// db.employee.aggregate([
//   {
//     $group: {
//       // _id: "$designation",
//       _id: 0,
//       // _id: { designation: "$designation", city: "$city" },
//       sum: { $sum: "$salary" },
//       avg: { $avg: "$salary" },
//       max: { $max: "$salary" },
//       min: { $min: "$salary" },
//     },
//   },
// ]);

// ====== Step-11: join by lookup, projection operator ======
// db.products.aggregate([
//   {
//     $lookup: {
//       from: "categories",
//       localField: "CategoryID",
//       foreignField: "CategoryID",
//       as: "categoryDetails",
//     },
//   },
//   {
//     $lookup: {
//       from: "brands",
//       localField: "BrandID",
//       foreignField: "BrandID",
//       as: "brandDetails",
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       CategoryID: 1,
//       BrandID: 1,
//       productName: "$Name",
//       price: { $toDouble: "$Price" },
//       Unit: 1,
//       Details: 1,
//       CreatedDate: 1,
//       ProductID: 1,
//       category: { $first: "$categoryDetails.Name" },
//       brand: { $first: "$brandDetails.Name" },
//     },
//   },
// ]);

// ====== Step-12: Facet Operator ======
// db.products.aggregate([
//   {
//     $facet: {
//       "total product": [{ $count: "total" }],
//       walton: [
//         {
//           $match: {
//             BrandID: 1654327435,
//           },
//         },
//       ],
//       samsung: [
//         {
//           $match: {
//             BrandID: 1652474116,
//           },
//         },
//       ],
//     },
//   },
// ]);

// ====== Step-13: Add new Field With Result, Arithmetic Operator, String Operator======

// db.products.aggregate([
//   {
//     $match: {
//       Unit: "lt",
//     },
//   },
//   {
//     $addFields: {
//       image: "image url",
//     },
//   },
//   {
//     $addFields: {
//       // add: { $add: [20, 10] },
//       // divided: { $divide: [20, 10] },
//       // multiply: { $multiply: [20, 10] },
//       // squareRoot: { $sqrt: 32 },
//       // pawer: { $pow: [10, 2] },
//       // modulus: { $mod: [10, 3] },
//       // concat: { $concat: ["$Name", " ", "$Details"] },
//       // split: { $split: ["$Name", " "] },
//       // toUpperCase: { $toUpper: ["$Details"] },
//       // toLowerCase: { $toLower: ["$Details"] },
//     },
//   },
// ]);
