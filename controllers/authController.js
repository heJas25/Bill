const Users  = require("../models/Users.js")

async function signup(req, res) {
    const email = await req.body.email;
    const password = await req.body.password;

    const userExists = await Users.findAll({
        where: { email : email }
    })

    if(userExists) {
        res.redirect("/auth/signin")
    } else {
        await Users.create({ email, password })
        console.log("User created successfully")
    }

}

function signin(req, res) {
    res.send('signin');
}

function signout(req, res) {
    
}
module.exports = { signin, signup,signout };                                                                                        