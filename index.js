// Importamos las dependencias

const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Creamos una constante para el valor del puerto
const PUERTO = process.env.PORT || 3000;

//Emplear las rutas
let pintoresRouter = require('./routes/pintor');

//Sitio web y HBS
const app = express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname +'/public'));

//Vamos a decirle a express la ruta a emplear
app.use('/', pintoresRouter);



app.get('/vanGogh', (req, res)=>{
    res.render('pintorone',{
        title: 'vanGogh',
        frase : 'EL ARTE ES SOBRE TODO UN ESTADO DEL ALMA',
        estilo: 'styles/estilovan.css',
        estilotwo: 'styles/estilocarrusel.css',
        dato: 'En vida solo vendió un cuadro y se suicidó de un disparo en el pecho.'

    });
});


app.get('/Picasso', (req, res)=>{
    res.render('pintortwo',{
        title: 'Picasso',
        frase : 'EL ARTE ES LA UNICA FORMA DE ESCAPAR, SIN SALIR DE CASA',
        estilo: 'styles/estilopicasso.css',
        estilotwo: 'styles/estilocarrusel.css',
        dato: 'Es él artista más robado de la historia, entre 350 obras fueron objeto de robos.'

    });
});


app.get('/Vinci', (req, res)=>{
    res.render('pintorthree',{
        title: 'Vinci',
        frase : 'ARTE NO ES LO QUE VES, ES LO QUE HACES A OTROS VER',
        estilo: 'styles/estilovinci.css',
        estilotwo: 'styles/estilocarrusel.css',
        dato: 'La mayor parte de las pinturas y demás obras de Leonardo da Vinci quedaron incompletas.'

    });
});


app.get('/dali', (req, res)=>{
    res.render('pintorfour',{
        title: 'Dali',
        frase : 'EL ARTE TIENE UN ENEMIGO QUE SE LLAMA IGNORANCIA',
        estilo: 'styles/estilodali.css',
        estilotwo: 'styles/estilocarrusel.css',
        dato: ' Dalí rediseñó el logo de Chupa Chups.'
    });
});


app.get('/Velazquez', (req, res)=>{
    res.render('pintorfive',{
        title: 'Velazquez',
        frase : 'EL ARTE LIMPIA DEL ALMA EL POLVO DE LA VIDA COTIDIANA',
        estilo: 'styles/estilodiego.css',
        estilotwo: 'styles/estilocarrusel.css',
        dato: 'Con 19 años se casó con la hija de su maestro, Francisco Pacheco, de 15 años de edad mediante un matrimonio de conveniencia.'
    });
});


app.get('/Acerca', (req, res)=>{
    res.render('acerca',{
        title: 'Acerca',
        estilo: 'styles/estiloacerca.css'
    });

});

/*La conexion con MongoDB*/
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://sarasoto:cacahuate123@sotosara-ztvee.mongodb.net/examen?retryWrites=true&w=majority'
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})

.then(()=>{
    console.log('Conexion establecida');
    })
    .catch(err=> console.log(err));

/*Arrancar el servidor web */
app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto...');
});
