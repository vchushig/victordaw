require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);


//express
const app = express();

//admitir
app.use(express.json())

//configurar el puerto
app.set('port', port)


//rutas
app.use('/API/Organizacion', require('./rutas'))
app.use('/API/Personal', require('./rutasPersonal'))
app.use('/API/Contacto', require('./rutasContacto'))
app.use('/API/Producto', require('./rutasProducto'))
app.use('/API/SubMenu', require('./rutasSubMenu'))

//iniciar express
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log(' error al iniciar servidor: '+error)
    }
    else{
        console.log('servidor iniciado en el puerto: '+port)
    }
});