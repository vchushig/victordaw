const router = require("express").Router();
const conexion = require("./config/conexion");

//Asignamos todas las rutas

//Aqui personal
//get personal(todas)
router.get("/", (req, res) => {
  let sql = "select * from mensajesReceived";
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//get organizacion(1)
router.get("/:id", (req, res) => {
  const { id } = req.params;
  let sql = "select  * from mensajesReceived where idMensaje = ?";
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//post organizacion
router.post("/", (req, res) => {
  const {
    idOrganizacion,
    correo,
    nombres_remitente,
    telefono,
    asunto,
    cuerpo_mensaje,
  } = req.body;

  //Comillas invertidas para llamar variables
  let sql = `insert into mensajesReceived(idOrganizacion, correo, nombres_remitente, telefono, asunto, cuerpo_mensaje) values('${idOrganizacion}','${correo}','${nombres_remitente}','${telefono}','${asunto}','${cuerpo_mensaje}')`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "Mensaje Enviado" });
    }
  });
});

//eliminar
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  let sql = `delete from mensajesReceived where idMensaje = '${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "Mensaje eliminado" });
    }
  });
});

//modificar
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const {
    idOrganizacion,
    correo,
    nombres_remitente,
    telefono,
    asunto,
    cuerpo_mensaje,
  } = req.body;

  let sql = `update mensajesReceived set
    idOrganizacion = '${idOrganizacion}',
    correo = '${correo}',
    nombres_remitente = '${nombres_remitente}',
    telefono = '${telefono}',
    asunto = '${asunto}',
    cuerpo_mensaje = '${cuerpo_mensaje}'
                where idMensaje = '${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "Mensaje modificado correctamente" });
    }
  });
});

module.exports = router;
