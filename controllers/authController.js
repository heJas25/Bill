const users = require("../models/Users.js")
const bcrypt = require('bcrypt');


async function signup(req, res) {
    const email = await req.body.email;
    const password = await req.body.password;
    const salt = await bcrypt.genSalt(10);
    
    const userExists = await users.findOne({
        where: { email: email }
    })

    if (userExists) {
        console.log("userExists =", userExists);

    } else {
        
      bcrypt.hash(password, salt, async (err, hash)=>{
            if (err){
                console.error(err);
            } else {
                const hashedPassword =  hash;
                console.log("hashedPassword =", hashedPassword);

                await users.create({ email, password: hashedPassword })//place it here so that the password is know and not undefined
            }
        })

        console.log("User created successfully")
    }

}

function signin(req, res) {
    res.send('welcome to sign in');
}

function signout(req, res) {

}
module.exports = { signin, signup, signout };                                                                                        