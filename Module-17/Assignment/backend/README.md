# Building a Sales Analytics API

You are tasked with building a RESTful API for sales analytics using MongoDB, Mongoose, and Express.js. The API should provide various endpoints to analyze sales data stored in a MongoDB database.

### [Postman Documentation](https://documenter.getpostman.com/view/15226030/2s9YC1WZRY)

#### Build the following API endpoints:

1. GET /api/sales/total-revenue: Calculate and return the total revenue generated by all sales transactions.

1. GET /api/sales/quantity-by-product: Find and return the total quantity sold for each product.

1. GET /api/sales/top-products: Retrieve the top 5 products with the highest total revenue, along with their total revenue values.

1. GET /api/sales/average-price: Calculate and return the average price of products sold.

1. GET /api/sales/revenue-by-month: Group the sales data by month and year and calculate the total revenue for each month-year combination.

1. GET /api/sales/highest-quantity-sold: Find and return the product that had the highest quantity sold on a single day.

1. GET /api/sales/department-salary-expense: Calculate and return the total salary expense for each department.

Main Package: `npm install express express-rate-limit cors helmet npp mongoose express-mongo-sanitize dotenv`

DevDependencies Package: `npm install -D nodemon morgan`