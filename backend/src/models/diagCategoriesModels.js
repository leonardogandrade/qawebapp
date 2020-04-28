const mongoose = require('mongoose');

const DiagCatSchema = mongoose.Schema({
    semSuspeito : Number,
    baixaSuspeita : Number,
    altaSuspeita : Number,
},{
    timestamps : true
});

module.exports = mongoose.model('DiagCategories',DiagCatSchema);