const express = require('express');
const router = express.Router();

const { data: sample } = require('../../public/data/data');

router.get('/', (req, res) => {
  res.send('GET : /api/v1/get');
});

router.get('/call', (req, res) => {  
  res.send('GET : /api/v1/get/call');
});

router.get('/docs', (req, res, next) => {
  // * (all)
  let arr = sample;
  res.send(arr);
});

router.get('/docs/t', (req, res, next) => {
  // * (all) / t (time)
  const arr = sample;
  const r = Math.floor((Math.random() * 5) + 1);
  const delay = 1000 * r;

  setTimeout(() => {
    res.send(arr);
  }, delay);
});

router.get('/docs/:id', (req, res, next) => {
  const { id } = req.params;  
  const docId = parseInt(id);
  if (isNaN(docId)) {
    const error = new Error('not found docId!');
    error.status = 500;
    next(error);
    return;
  }
  
  // equal docId.
  const [findOne] = sample.filter(list => list.id === docId);

  if (!findOne) {
    const findError = new Error('not exists data');
    findError.status = 500;
    next(findError);
    return;
  }

  res.send(findOne);
});

router.get('/docs/t/:id', (req, res, next) => {
  const { id } = req.params;  
  const docId = parseInt(id);
  if (isNaN(docId)) {
    const error = new Error('not found docId!');
    error.status = 500;
    next(error);
    return;
  }
  
  // equal docId.
  const [findOne] = sample.filter(list => list.id === docId);

  if (!findOne) {
    const findError = new Error('not exists data');
    findError.status = 500;
    next(findError);
    return;
  }

  const r = Math.floor((Math.random() * 5) + 1);
  const delay = 1000 * r;

  setTimeout(() => {
    res.send(findOne);
  }, delay);
});

module.exports = router;