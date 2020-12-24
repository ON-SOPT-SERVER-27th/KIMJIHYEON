const express = require('express');
const router = express. Router();
const userController = require('../../controller/userController');

router.post('/signup', userController.signup)
router.post('/signin', userController.signin)
router.get('/', userController.getall)
router.get('/:id', userController.getid)
//router.delete('/delete', userController.delete)
//router.put('/modify/:id', userController.modify)

module.exports = router;
// 내가 만든 user에 관한 라우터를 다 모아 놓는 곳!