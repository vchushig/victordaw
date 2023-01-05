const router = require('express').Router()
const conexion = require('./config/conexion')

//Asignamos todas las rutas


//get organizaciones(todas)
router.get('/', (req, res)=>{
    let sql = 'select  * from organizacion'
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
    let sql = 'select  * from organizacion where idOrganizacion = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//post organizacion
router.post('/', (req, res)=>{
    const{nombre, foto, descripcion, mision, vision, valores}=req.body
    
    //Comillas invertidas para llamar variables
    let sql = `insert into organizacion(nombre, foto, descripcion, mision, vision, valores) values('${nombre}','${foto}','${descripcion}','${mision}','${vision}','${valores}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'organizacion agregada'})
        }
    })
})


//eliminar
router.delete('/:id', (req, res)=>{
    const{id}=req.params

    let sql =`delete from organizacion where idOrganizacion = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'organizacion eliminada'})
        }
    })
});

//modificar
router.put('/:id', (req, res)=>{
    const{id}=req.params
    const{nombre, foto, descripcion, mision, vision, valores}=req.body

    let sql =   `update organizacion set
                nombre = '${nombre}',
                foto = '${foto}',
                descripcion = '${descripcion}',
                mision = '${mision}',
                vision = '${vision}',
                valores = '${valores}'
                where idOrganizacion = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'organizacion modificada correctamente'})
        }
    })
                
})



module.exports = router