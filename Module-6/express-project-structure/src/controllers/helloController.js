//
exports.helloGet = (req, res) => {
  res.status(200).json({ status: 'Success', data: 'Hello, GET - Controller API' });
};

//
exports.helloPost = (req, res) => {
  res.status(201).json({ status: 'Success', data: 'Hello, POST - Controller API' });
};
