const express = require('express');
const Product = require('../model/product');

const router = express.Router();

// GET : /products
router.get('/', (req, res) => {
  res.json('상품 전체보기');
});
// GET : /products/:id
router.get('/:id', (req, res) => {
  res.json(req.params.id + '번 상품 상세보기')
});
// POST : /products
router.post('/', (req, res) => {

  const product = new Product(req.body);
  product.save().then(() => console.log('insert ok..'));
  res.json('상품 등록 완료');
});
// PUT : /products
router.put('/', (req, res) => {
  res.json('상품 수정');
});
// DELETE : /products/:id
router.delete('/:id', (req, res) => {
  res.json(req.params.id + '번 상품 삭제');
});


module.exports = router;
