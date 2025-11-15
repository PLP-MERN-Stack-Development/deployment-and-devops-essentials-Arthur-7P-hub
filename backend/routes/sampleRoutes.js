const express = require('express');
const router = express.Router();
const { getSample, createSample } = require('../controllers/sampleController');

router.get('/', getSample);
router.post('/', createSample);

module.exports = router;
