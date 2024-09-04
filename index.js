//CONECTAR MONGODB CON NODE

'use strict' //modo estricto de JS

const mongoose = require('mongoose') //cargar modulo de mongoose
const app = require('./app')
const port = 3900

//
const uri = 'mongodb+srv://miguelangelfb19:65d26327d2@blog.tq5vo.mongodb.net/api-rest-blog?retryWrites=true&w=majority&appName=blog'
// const localUri = 'mongodb://localhost:27017/api-rest-blog'

mongoose.Promise = global.Promise //uso de promesas para evitar fallos a la hora de conectarnos (funionamiento interno de mongoose)
                                /*URL mongoDB*/             
mongoose.connect(uri)
        .then(()=>{
            console.log('La conexión a la base de datos fue realizada con éxito')

            //Crear servidor y escuchar peticiones HTTP
            app.listen(port, () => {
                console.log(`Servidor corriendo en http://localhost:${port}`)
            })
}) //conexion a mongoDB



