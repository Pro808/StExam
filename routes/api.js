const express = require('express');
const questController = require('../controllers/questController');

const router = express.Router();

router.post('/add', questController.addQuest);
router.get("/get", questController.get);
module.exports = router;