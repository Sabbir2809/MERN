const databaseName = "demo";
const collectionName = "employee";

// Step-1: The current database to use
use(databaseName);

// Step-2: Create a new collection.
// db.createCollection(collectionName);

// Step-3: insert new document: insertOne(), insertMany()
// db.employee.insertOne({
//   name: "Sabbir Hossain",
//   designation: "CSE",
//   salary: 20000,
//   city: "Dhaka"
// })

// db.employee.insertMany([
//   {
//     name: "A",
//     designation: "CSE",
//     salary: 25000,
//     city: "Dhaka"
//   },
//   {
//     name: "B",
//     designation: "EEE",
//     salary: 70000,
//     city: "Khulna"
//   },
//   {
//     name: "C",
//     designation: "Civil",
//     salary: 10000,
//     city: "Dhaka"
//   },
//   {
//     name: "D",
//     designation: "SWE",
//     salary: 15000,
//     city: "Khulna"
//   }
// ]);

// step-4: select all data: find({}), aggregate([])
// db.employee.find({});
// db.employee.aggregate([]);

// db.employee.find({}).count('total');
// db.employee.aggregate([
//   {$count: 'total'}
// ]);

// db.employee.find({}).sort({name: 1})
// db.employee.aggregate([
//   {$sort: {
//     salary: -1
//   }}
// ]);

// db.employee.find({}).limit(2);
// db.employee.aggregate([
//   {$limit: 3}
// ])

// db.employee.find({}).sort({_id: -1}).limit(2);
db.employee.aggregate([
  // Stage-1: descending Order
  { $sort: { _id: 1 } },
  // Stage-2: sort
  { $limit: 3 },
]);
