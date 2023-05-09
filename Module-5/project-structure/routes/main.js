// Dependencies
const express = require('express');
const router = express.Router();

// all router here
router.get('/', (req, res) => {
  res.json({
    msg: 'Main Page',
  });
});

// export
module.exports = router;
