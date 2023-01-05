const router = require('express').Router()
const conexion = require('./config/conexion')

//Asignamos todas las rutas


//Aqui personal
//get(obtener) producto(todas)
router.get('/', (req, res)=>{
    let sql = 'select * from productos'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//get(obtener) producto(1)
router.get('/:id', (req, res)=>{
    const{id} = req.params
    let sql = 'select  * from productos where codigo = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//post(ingresar) producto
router.post('/', (req, res)=>{
    const{idOrganizacion, nombre, descripcion, foto}=req.body
    
    //Comillas invertidas para llamar variables
    let sql = `insert into productos(idOrganizacion, nombre, descripcion, foto) values('${idOrganizacion}','${nombre}','${descripcion}','${foto}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Producto agregado correctamente'})
        }
    })
})


//delete (eliminar) 
router.delete('/:id', (req, res)=>{
    const{id}=req.params

    let sql =`delete from productos where codigo = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Producto eliminado'})
        }
    })
});

//modificar
router.put('/:id', (req, res)=>{
    const{id}=req.params
    const{idOrganizacion, nombre, descripcion, foto}=req.body

    let sql =   `update productos set
    idOrganizacion = '${idOrganizacion}',
    nombre = '${nombre}',
    descripcion = '${descripcion}',
    foto = '${foto}'
    where codigo = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Producto modificado correctamente'})
        }
    })
                
})



module.exports = router

