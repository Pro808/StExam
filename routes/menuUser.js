const express = require('express');
const userController = require('../controllers/mainPage');

const router = express.Router();

router.get(/^\/[a-zA-Z0-9]+$/, userController.goToIndex);
module.exports = router;