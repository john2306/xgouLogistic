var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var datos = {
        tipoServicio: 'Mudanzas',
        pedidosCarga: [
            { codigo: 1, nombre: 'John Mendoza', origen: 'Calle Henry Arredondo 143, San Marín de Porres', destino: 'Plaza Lima Sur- Chorrillos', img: 'perfil1.jpg', tiempo: '2 horas', distancia: '20 km', tipoServicio: 'Mudanzas', precio: '240 soles', pago: 'efectivo', descripcion: 'Llevar mercaderia, cajas, mesas, ropero y algunas cosas más', fecha: '2 de febrero de 2018' },
            { codigo: 2, nombre: 'Jorge Salas', origen: 'Calle Henry Arredondo 143, San Marín de Porres', destino: 'Plaza Lima Sur- Chorrillos', img: 'perfil1.jpg', tiempo: '2 horas', distancia: '20 km', tipoServicio: 'Mudanzas', precio: '240 soles', pago: 'efectivo', descripcion: 'Llevar mercaderia, cajas, mesas, ropero y algunas cosas más', fecha: '2 de febrero de 2018' },
            { codigo: 3, nombre: 'Mauricio Velarde', origen: 'Calle Henry Arredondo 143, San Marín de Porres', destino: 'Plaza Lima Sur- Chorrillos', img: 'perfil1.jpg', tiempo: '2 horas', distancia: '20 km', tipoServicio: 'Mudanzas', precio: '240 soles', pago: 'efectivo', descripcion: 'Llevar mercaderia, cajas, mesas, ropero y algunas cosas más', fecha: '2 de febrero de 2018' },
            { codigo: 4, nombre: 'Santiago Rojas', origen: 'Calle Henry Arredondo 143, San Marín de Porres', destino: 'Plaza Lima Sur- Chorrillos', img: 'perfil1.jpg', tiempo: '2 horas', distancia: '20 km', tipoServicio: 'Mudanzas', precio: '240 soles', pago: 'efectivo', descripcion: 'Llevar mercaderia, cajas, mesas, ropero y algunas cosas más', fecha: '2 de febrero de 2018' },
            { codigo: 5, nombre: 'Rosa Santiesteban', origen: 'Calle Henry Arredondo 143, San Marín de Porres', destino: 'Plaza Lima Sur- Chorrillos', img: 'perfil1.jpg', tiempo: '2 horas', distancia: '20 km', tipoServicio: 'Mudanzas', precio: '240 soles', pago: 'efectivo', descripcion: 'Llevar mercaderia, cajas, mesas, ropero y algunas cosas más', fecha: '2 de febrero de 2018' },
            { codigo: 6, nombre: 'Ricardo Palomino', origen: 'Calle Henry Arredondo 143, San Marín de Porres', destino: 'Plaza Lima Sur- Chorrillos', img: 'perfil1.jpg', tiempo: '2 horas', distancia: '20 km', tipoServicio: 'Mudanzas', precio: '240 soles', pago: 'efectivo', descripcion: 'Llevar mercaderia, cajas, mesas, ropero y algunas cosas más', fecha: '2 de febrero de 2018' },
            { codigo: 7, nombre: 'Rosmery Paredes', origen: 'Calle Henry Arredondo 143, San Marín de Porres', destino: 'Plaza Lima Sur- Chorrillos', img: 'perfil1.jpg', tiempo: '2 horas', distancia: '20 km', tipoServicio: 'Mudanzas', precio: '240 soles', pago: 'efectivo', descripcion: 'Llevar mercaderia, cajas, mesas, ropero y algunas cosas más', fecha: '2 de febrero de 2018' },
            { codigo: 8, nombre: 'Evelyn Castro', origen: 'Calle Henry Arredondo 143, San Marín de Porres', destino: 'Plaza Lima Sur- Chorrillos', img: 'perfil1.jpg', tiempo: '2 horas', distancia: '20 km', tipoServicio: 'Mudanzas', precio: '240 soles', pago: 'efectivo', descripcion: 'Llevar mercaderia, cajas, mesas, ropero y algunas cosas más', fecha: '2 de febrero de 2018' },
            { codigo: 9, nombre: 'Ismael Torres', origen: 'Calle Henry Arredondo 143, San Marín de Porres', destino: 'Plaza Lima Sur- Chorrillos', img: 'perfil1.jpg', tiempo: '2 horas', distancia: '20 km', tipoServicio: 'Mudanzas', precio: '240 soles', pago: 'efectivo', descripcion: 'Llevar mercaderia, cajas, mesas, ropero y algunas cosas más', fecha: '2 de febrero de 2018' },
            { codigo: 10, nombre: 'Ricardo Rojas', origen: 'Calle Henry Arredondo 143, San Marín de Porres', destino: 'Plaza Lima Sur- Chorrillos', img: 'perfil1.jpg', tiempo: '2 horas', distancia: '20 km', tipoServicio: 'Mudanzas', precio: '240 soles', pago: 'efectivo', descripcion: 'Llevar mercaderia, cajas, mesas, ropero y algunas cosas más', fecha: '2 de febrero de 2018' },
            { codigo: 11, nombre: 'Israel Morales', origen: 'Calle Henry Arredondo 143, San Marín de Porres', destino: 'Plaza Lima Sur- Chorrillos', img: 'perfil1.jpg', tiempo: '2 horas', distancia: '20 km', tipoServicio: 'Mudanzas', precio: '240 soles', pago: 'efectivo', descripcion: 'Llevar mercaderia, cajas, mesas, ropero y algunas cosas más', fecha: '2 de febrero de 2018' },
            { codigo: 12, nombre: 'Elsa Ramirez', origen: 'Calle Henry Arredondo 143, San Marín de Porres', destino: 'Plaza Lima Sur- Chorrillos', img: 'perfil1.jpg', tiempo: '2 horas', distancia: '20 km', tipoServicio: 'Mudanzas', precio: '240 soles', pago: 'efectivo', descripcion: 'Llevar mercaderia, cajas, mesas, ropero y algunas cosas más', fecha: '2 de febrero de 2018' },

        ],
        pieDePagina: { autor: 'John Mendoza', fecha: Date() }
    };

    res.render('encuentraCarga', datos);
});


module.exports = router;