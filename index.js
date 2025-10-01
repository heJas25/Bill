const express= require('express');
const authroute= require('./routes/auth.js'); 

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/auth',authroute);

app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`);

});
