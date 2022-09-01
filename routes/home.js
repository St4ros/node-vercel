const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
});

router.post("registro", async (req, res, next) => {
  let datos = req.body;
  let nombre = "" + req.body.nombre;
  //
  console.log('me llego algoooo!!!');
  console.log(req.body);
  console.log(nombre);
  //
  const setRegistro = async () => {
    try {
      await pool.connect();
      const Registro_bd = 'insert into registro(nombre,apellido,correo,fecha,contraseña,formulario,formulario2) VALUES($1,$2,$3,$4,$5,$6,$7)';
      const balores = [req.body.nombre1, req.body.apellido1, req.body.gmail, req.body.fechanaci1, req.body.password1, 'a', 'c'];
      const reg = await pool.query(Registro_bd, balores);
      console.log('si inserto la tabla');
      res.send("usuario registrado con exito");
      pool.end();
    } catch (e) {
      res.send("El correo ya existe");
      console.log('El correo ya existe');
      pool.end();
    }
  };
  setRegistro();
});

router.get("/login", async (req, res, next) => {
  const getRegistro = async () => {
    try {
      await pool.connect();
      const reg = await pool.query('select * from registro');//(await) es para decir que es asincrona y que se ejecute mientras algo mas se ejecute
      //(query) es para traer o llamar las cosas de la base de datos
      res.send(reg.rows);
      pool.end();//sierra la base de datos
      return reg;
    } catch (e) {
      console.log(e);
      pool.end();
    }
  };
  getRegistro();
});


module.exports = router;
