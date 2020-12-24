const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/ranking', require('./ranking'));
router.use('/society', require('./society'));
router.use('/members', require('./members'));


module.exports = router;