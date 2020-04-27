const mongoose = require('mongoose');

const DiagCatSchema = mongoose.Schema({
    NaoSupeito : Number,
    baixaSuspeita : Number,
    altaSupeita : Number,
},{
    timestamps : true
});

module.exports = mongoose.model('DiagCategories',DiagCatSchema);