// Dependencies
const productsModel = require("./../models/productsModel");

// C = Create Operations: Create or insert operations add new documents to a collection. If the collection does not currently exist, insert operations will create the collection.
exports.createProduct = async (req, res) => {
  const reqBody = req.body;
  try {
    const product = await productsModel.create(reqBody);
    res.status(200).json({ status: "Success", data: product });
  } catch (error) {
    res.status(400).json({ status: "Fail", error: error.message });
  }
};

// R = Read Operations: Read operations retrieve documents from a collection; i.e. query a collection for documents.
exports.readProducts = async (req, res) => {
  const query = {};
  try {
    const products = await productsModel.find(query);
    res.status(200).json({ status: "Success", data: products });
  } catch (error) {
    res.status(400).json({ status: "Fail", error: error.message });
  }
};

// Read By Id
exports.readByProductId = async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  try {
    const products = await productsModel.find(query);
    res.status(200).json({ status: "Success", data: products });
  } catch (error) {
    res.status(400).json({ status: "Fail", error: error.message });
  }
};

// U = Update Operations: Update operations modify existing documents in a collection
exports.updateProducts = async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const reqBody = req.body;
  try {
    const product = await productsModel.updateOne(query, reqBody);
    res.status(200).json({ status: "Success", data: product });
  } catch (error) {
    res.status(400).json({ status: "Fail", error: error.message });
  }
};

// D = Delete operations: Delete operations remove documents from a collection.
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };

  try {
    const product = await productsModel.deleteOne(query);
    res.status(200).json({ status: "Success", data: product });
  } catch (error) {
    res.status(400).json({ status: "Fail", error: error.message });
  }
};
