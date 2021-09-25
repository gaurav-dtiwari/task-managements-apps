const express = require('express');
const router = express.Router();
const User = require('../models/user');
const userController = require('../controller/user');
router.get('/', userController.home);
// router.post('/dataList',userController.dataList);
router.post('/assignTask', userController.assignTask);
// router.post('/deleteTask',userController.deleteTask);
module.exports = router;