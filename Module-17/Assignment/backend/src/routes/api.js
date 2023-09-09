// Dependencies
const express = require("express");
const router = express.Router();
const {
  totalRevenue,
  quantityByProduct,
  topProducts,
  averagePrice,
  revenueByMonth,
  highestQuantitySold,
  departmentSalaryExpense,
  createProduct,
  createDepartment,
} = require("../controllers/salesController");

// :::::: Build the following API endpoints :::::::
router.get("/sales/total-revenue", totalRevenue);
router.get("/sales/quantity-by-product", quantityByProduct);
router.get("/sales/top-products", topProducts);
router.get("/sales/average-price", averagePrice);
router.get("/sales/revenue-by-month", revenueByMonth);
router.get("/sales/highest-quantity-sold", highestQuantitySold);
router.get("/sales/department-salary-expense", departmentSalaryExpense);

// create product and department
router.post("/sales/create-product", createProduct);
router.post("/sales/create-department", createDepartment);

// Exports
module.exports = router;
