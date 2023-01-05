const router = require('express').Router()
const conexion = require('./config/conexion')

//Asignamos todas las rutas


//Aqui personal
//get personal(todas)
router.get('/', (req, res)=>{
    let sql = 'select * from personal'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//get organizacion(1)
router.get('/:id', (req, res)=>{
    const{id} = req.params
    let sql = 'select  * from personal where cedula = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//post organizacion
router.post('/', (req, res)=>{
    const{cedula, idOrganizacion, nombre, apellido_1, apellido_2, telefono, email, rol}=req.body
    
    //Comillas invertidas para llamar variables
    let sql = `insert into personal(cedula, idOrganizacion, nombre, apellido_1, apellido_2, telefono, email, rol) values('${cedula}','${idOrganizacion}','${nombre}','${apellido_1}','${apellido_2}','${telefono}','${email}','${rol}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Personal agregado'})
        }
    })
})


//eliminar
router.delete('/:id', (req, res)=>{
    const{id}=req.params

    let sql =`delete from personal where cedula = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Personal eliminado'})
        }
    })
});

//modificar
router.put('/:id', (req, res)=>{
    const{id}=req.params
    const{cedula, idOrganizacion, nombre, apellido_1, apellido_2, telefono, email, rol}=req.body

    let sql =   `update personal set
    cedula = '${cedula}',
    idOrganizacion = '${idOrganizacion}',
    nombre = '${nombre}',
    apellido_1 = '${apellido_1}',
    apellido_2 = '${apellido_2}',
    telefono = '${telefono}',
    email = '${email}',
    rol = '${rol}'
                where cedula = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Personal modificado correctamente'})
        }
    })
                
})



module.exports = router

