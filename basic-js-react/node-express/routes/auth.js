const express = require('express');
const router = express.Router()

const postLogin = require('../controller/auth')

router.post('/', postLogin);

module.exports = router;
