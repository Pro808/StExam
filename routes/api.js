const express = require('express');
const userController = require('../controllers/users');

const router = express.Router();

router.post('/add', userController.addQuest);
router.get("/get", userController.get);
module.exports = router;