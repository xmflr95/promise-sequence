const express = require('express');
const cors = require('cors');

const router = express.Router();

const api = require('./routes/index');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.send(`GET : original URL /`);
});

// API : /api/*
app.use('/api', api);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));