const express = require('express');
const router = express.Router();

const ajax = require('./v1/ajax');

router.use((req, res, next) => {
  const { url, method, baseUrl } = req;
  // console.log(reqStr.originalUrl);
  let reqInfo = `[API][${method}] : ${baseUrl}${url}`;
  console.log(reqInfo);
  next();
});

// AJAX
router.use('/ajax', ajax);

router.get('/', (req, res) => {
  res.send('GET : /routes');
});

router.get('/health', (req, res) => {  
  res.send('health : 201');
});

router.use(logHandler);
router.use(errorHandler);

function logHandler(err, req, res, next) {
  console.error(`[${new Date()}]\n ${err.stack}`);
  next(err);
}

function errorHandler(err, req, res, next) {  
  res.status(err.status || 500);
  res.send(err.message || 'Error!!');
}

module.exports = router;
