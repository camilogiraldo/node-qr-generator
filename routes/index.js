const express = require('express');
const qrcontroller = require('../controllers/generation');

const router = express.Router();

router.get('/generate', qrcontroller.generate);

router.get('/', (req, res) => res.send('<h1>Server Running</h1>'));

router.use((req, res) => res.send('<h1>Not found</h1>'));

module.exports = router;
