function signup(req, res) {
const email = req.body.email;
const password = req.body.password;

const emailExists = email in users

}

function signin(req, res) {
    res.send('signin');
}

function signout(req, res) {
    
}
module.exports = { signin, signup,signout };                                                                                        