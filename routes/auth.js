const express = require('express');

const router = express.Router();

const { signin, signup, signout } = require('../controllers/authController')

router.get('/signin', signin);

router.post('/signup', signup);

router.get('/signout', signout);


module.exports = router;

