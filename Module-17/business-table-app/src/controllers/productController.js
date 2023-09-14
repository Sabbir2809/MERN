const ProductModel = require("../models/ProductModel");

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await ProductModel.create(reqBody);

    res.status(201).json({
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get All Product
exports.getAllProducts = async (req, res) => {
  try {
    // pagination
    const pageNo = Number(req.params.pageNo);
    const perPage = Number(req.params.prePage);
    const searchKeyword = req.params.searchKeyword;
    const skipRow = (pageNo - 1) * perPage;

    let data;

    // search
    if (searchKeyword !== "0") {
      const searchRegex = { $regex: searchKeyword, $options: "i" };
      const searchQuery = {
        $or: [
          { title: searchRegex },
          { description: searchRegex },
          { brand: searchRegex },
          { category: searchRegex },
        ],
      };

      data = await ProductModel.aggregate([
        {
          $facet: {
            total: [{ $match: searchQuery }, { $count: "count" }],
            rows: [{ $match: searchQuery }, { $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);
    } else {
      data = await ProductModel.aggregate([
        {
          $facet: {
            total: [{ $count: "count" }],
            rows: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);
    }

    res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
