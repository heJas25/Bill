const express = require('express');

const router = express.Router();

router.get('/signin', (req, res) => {
   res.send('signin');
});

router.get('/signup', (req, res) => {
   res.send('signup');
});

router.get('/signout',(req,res)=>{
    res.send('signout');
})

module.exports = router;

