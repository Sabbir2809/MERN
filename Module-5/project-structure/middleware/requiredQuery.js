exports.requiredQuery = (req, res, next) => {
  const searchTerm = req.query.query;

  console.log(searchTerm);
  if (!searchTerm) {
    res.json({
      msg: 'Query is required',
    });
  } else {
    next();
  }
};
