const mongoose = require('mongoose');

const qaSchema = mongoose.Schema({
    matricula : {
        type : String,
        required : false,
    },
    mascara :  {
        type : String,
        required : false,
    },
    luvas : {
        type : String,
        required : false,
    },
    febre :  {
        type : String,
        required : false,
    },
    respiracao :  {
        type : String,
        required : false,
    },
    tosse :  {
        type : String,
        required : false,
    },
    diagnostic : {
        type : Number,
        required : false,
    }
},{
    timestamps : true
});

module.exports = mongoose.model('QA',qaSchema);