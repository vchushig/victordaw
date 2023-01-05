const router = require('express').Router()
const conexion = require('./config/conexion')

//Asignamos todas las rutas


//get organizacion SubMenu(1)
router.get('/:id', (req, res)=>{
    const{id} = req.params
    let sql = 'select  * from personal INNER JOIN organizacion  on organizacion.idOrganizacion = personal.idOrganizacion where organizacion.idOrganizacion = ?;'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})



module.exports = router