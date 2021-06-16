const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json('/ 경로로 요청을 주셨어요..');
});

module.exports = router;
