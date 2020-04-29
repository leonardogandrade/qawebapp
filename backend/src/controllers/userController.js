const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const key = require('../config/key.json');

function tokenGenerator(user,password){
    return jwt.sign({user,password},key.secret,{expiresIn : 3600});
}

module.exports = {
    async store(req,res){
        const payload = await User.create(req.body);
        console.log(payload);
        res.json(payload);
    },
    async authenticate(req,res){
        const {user : userReq , password : passwordReq} = await req.body;
        const response = await User.where({$and : [{'user' : userReq},{'password' : passwordReq}]});
    
        if(response.length >0){
            token = tokenGenerator(userReq,passwordReq);
        }else{
            res.json({
                "msg" : "User or password invelid."
            })
        }

        res.json(token);
    }

}