const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async store(req,res){
        const payload = await User.create(req.body);
        console.log(payload);
        res.json(payload);
    }
}