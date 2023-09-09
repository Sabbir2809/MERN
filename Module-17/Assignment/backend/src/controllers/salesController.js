const SaleModel = require("../models/SaleModel");
const DepartmentModel = require("../models/deaprtmentModel");

// :::::: total revenue ::::::
exports.totalRevenue = async (req, res) => {
  try {
    const totalRevenue = await SaleModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
    ]);

    res.status(200).json({
      status: true,
      message: "Total Revenue",
      data: totalRevenue,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// :::::: quantity by product ::::::
exports.quantityByProduct = async (req, res) => {
  try {
    const quantityByProduct = await SaleModel.aggregate([
      {
        $group: {
          _id: "$product",
          totalQuantity: { $sum: "$quantity" },
        },
      },
    ]);

    res.status(200).json({
      status: true,
      message: "Quantity By Product",
      data: quantityByProduct,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// :::::: top product ::::::
exports.topProducts = async (req, res) => {
  try {
    const topProduct = await SaleModel.aggregate([
      {
        $group: {
          _id: "$product",
          totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
      {
        $sort: {
          totalRevenue: -1,
        },
      },
      { $limit: 5 },
    ]);

    res.status(200).json({
      status: true,
      message: "Top 5 Product",
      data: topProduct,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// :::::: average price ::::::
exports.averagePrice = async (req, res) => {
  try {
    const averagePrice = await SaleModel.aggregate([
      {
        $group: {
          _id: null,
          averagePrice: { $avg: "$price" },
        },
      },
    ]);

    res.status(200).json({
      status: true,
      message: "Average Price",
      data: averagePrice,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// :::::: revenue by month ::::::
exports.revenueByMonth = async (req, res) => {
  try {
    const revenueByMonth = await SaleModel.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$date" },
            month: { $month: "$date" },
          },
          totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
      {
        $sort: {
          "_id.year": 1,
          "_id.month": 1,
        },
      },
    ]);

    res.status(200).json({
      status: true,
      message: "Revenue By Month",
      data: revenueByMonth,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// :::::: highest quantity sold ::::::
exports.highestQuantitySold = async (req, res) => {
  try {
    const highestQuantitySold = await SaleModel.aggregate([
      {
        $group: {
          _id: {
            product: "$product",
            date: "$date",
          },
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $sort: {
          totalQuantity: -1,
        },
      },
      {
        $project: {
          _id: 0,
          product: "$_id.product",
          totalQuantity: 1,
        },
      },
    ]);

    res.status(200).json({
      status: true,
      message: "Highest quantity sold on a single day",
      data: highestQuantitySold,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// :::::: Department Salary Expense ::::::
exports.departmentSalaryExpense = async (req, res) => {
  try {
    const departmentSalaryExpense = await DepartmentModel.aggregate([
      {
        $group: {
          _id: "$department_id",
          totalSalaryExpense: { $sum: "$salaryExpense" },
        },
      },
    ]);

    res.status(200).json({
      status: true,
      message: "Total salary expense for each Department.",
      data: departmentSalaryExpense,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// :::::: create new product ::::::
exports.createProduct = async (req, res) => {
  try {
    const reqBody = req.body;
    const info = await SaleModel.create(reqBody);

    res.status(201).json({
      status: true,
      message: "Create New Product",
      data: info,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// :::::: create new product ::::::
exports.createDepartment = async (req, res) => {
  try {
    const reqBody = req.body;
    const info = await DepartmentModel.create(reqBody);

    res.status(201).json({
      status: true,
      message: "Create Department",
      data: info,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};
