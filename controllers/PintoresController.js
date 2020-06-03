let mongoose = require('mongoose');

//Vamos a unirlo al modelo
let Pintores = require('../models/Pintores');

let pintoresController = {};

/*LISTAR -> FIND()*/
pintoresController.list = (req, res)=>{
    Pintores.find({})
        .limit(20)
        .skip(0)
        .exec((err, pintor)=>{
            if(err){
                console.log('Error: ', err)
            }
            //console.log('Datos obtenidos');
            //console.log(pintor);
            res.render('../views/index',{
                pintores: pintor,
                nombre: "Sara Soto Chavarria",
                titulo: "Listado de pintores",
                title: 'Inicio de Practica de Pintores',
                estilo: "styles/estilomenu.css",
                logo: "FAMOUS ART",

                year: new Date().getDate()
            })
        })
};

module.exports = pintoresController;