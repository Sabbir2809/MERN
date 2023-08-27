// ===== Step-1: The current database to use =====
const databaseName = "demo";
use(databaseName);

const collectionName = "employee";
// ===== 2: Create a new collection =====
// db.createCollection(collectionName);

// Step-3: insert new document: insertOne({}), insertMany([{},{}])

// db.employee.insertOne({
//   name: "Mahfuza Akter Shorna",
//   designation: "Aggro",
//   salary: 250000,
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
//   }
// ]);

// ===== 4: select all data: find({}), aggregate([]) =====

// db.employee.find({});
// db.employee.aggregate([]);

// ===== 5: count(), limit() =====

// db.employee.find({}).count('total');
// db.employee.aggregate([
//   {$count: 'total'}
// ]);

// db.employee.find({}).limit(2);
// db.employee.aggregate([
//   {$limit: 3}
// ])

// ===== 6: sort(), match() =====

// db.employee.find({}).sort({name: 1})
// db.employee.aggregate([
//   {$sort: {
//     salary: -1
//   }}
// ]);

// db.employee.find({}).sort({_id: -1}).limit(2);
// db.employee.aggregate([
//   // Stage-1: descending Order
//   { $sort: { _id: 1 } },
//   // Stage-2: sort
//   { $limit: 3 },
// ]);

// db.employee.find({ salary: { $lte: 20000 } });
// db.employee.aggregate([
//   {$match: {
//     salary: {$eq: 20000}
//   }}
// ])

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

// db.employee.aggregate([
//   // Stage-1: salary
//   {
//     $match: {
//       $or: [{ salary: { $eq: 20000 } }, { designation: "EEE" }],
//     },
//   },
// ]);
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
