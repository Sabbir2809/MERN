// Dependencies
const express = require('express');
const router = express.Router();

// all router here
router.get('/', (req, res) => {
  res.json({
    msg: 'Home Page',
  });
});

// export
module.exports = router;
