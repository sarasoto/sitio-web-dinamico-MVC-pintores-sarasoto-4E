const mongoose = require('mongoose');
//Vamos a crear un Schema(nuestra base de datos)

let Schema = mongoose.Schema;

//Crear la coleccion
let PintoresSchema = new Schema({
    pintor:{
        type: String,
        required: [true, 'Requerimos el pintor']
    },
    nombre:{
        type: String,
        required: [true, 'Requerimos el nombre']
    },
    nacimiento:{
        type: String,
        required:[true, 'Requerimos el nacimiento']
    },
    fallecimiento:{
        type: String,

    },
    muerte:{
        type: String

    },
    nacionalidad:{
        type: String

    },
    corriente:{
        type: String

    },
    pinturas:{
        type: String

    },
    dato:{
        type: String

    },
    frase:{
        type: String

    },
    pintura:{
        type: String

    }
});

module.exports = mongoose.model('Pintores', PintoresSchema);