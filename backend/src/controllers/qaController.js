const mongoose = require('mongoose');
const QA = mongoose.model('QA');

function Diagnostc(tosse,febre,luvas,mascara,respiracao){
    //luvas=1.8 mascara=2.4 respiracao=2.5 tosse=2.7 febre=3.9
    //SEM SUPEITA <= 4.2
    //BAIXA SUSPEITA  < 4.2 < 6.9 
    //ALTA SUSPEITA > 6.9

    return (parseInt(luvas)*1.8) + (parseInt(mascara)*2.4) + 
           (parseInt(respiracao)*2.5) +(parseInt(tosse)*2.7) + (parseInt(febre)*3.9)
}

module.exports = {
    async store(req,res){
       const {matricula,tosse,febre,luvas,mascara,respiracao,coords} = await req.body;
       const payload = await QA.create({
            matricula,
            tosse,
            febre,
            luvas,
            mascara,
            respiracao,
            coords,
            diagnostic : Diagnostc(tosse,febre,luvas,mascara,respiracao)
       });
       console.log(payload);
       res.json(payload);
    },

    async listAll(req,res){
        const response = await QA.find();
        res.json(response);
    },

    async DiagnostcCategories(req,res){
        const semSuspeita = await QA.where({'diagnostic' : {$lte : 4.2} }).countDocuments();
        const baixaSuspeita = await QA.where({$and :[{'diagnostic' : {$lt : 6.9}},{'diagnostic' : {$gt : 4.2}}]}).countDocuments();
        const altaSuspeita = await QA.where({'diagnostic' : {$gt : 6.9} }).countDocuments();
        res.json({
            semSuspeita,
            baixaSuspeita,
            altaSuspeita
        });
    },
    async result(req,res){
        const response = await QA.findById(req.params.id);
        res.json(response);
    }

}