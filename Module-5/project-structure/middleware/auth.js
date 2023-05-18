exports.auth = (req, res, next) => {
  if (req.query.api_key != process.env.API_KEY) {
    res.status(401).json({ message: 'Invalid API Key' });
  } else {
    next();
  }
};
