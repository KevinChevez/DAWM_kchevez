var express = require('express');
const { request } = require('../app');
var router = express.Router();

let bd = {  
  'usuario': 'abc',  
  'contrasenia': '123'  
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { 
    title: 'Login', 
    message: req.flash('message')
  });
});

router.post('/validate', function(req, res, next) {  
  let usuario = req.body.user;  
  let contrasenia = req.body.password;  
    
  console.log("usuario: ", usuario)  
  console.log("contraseña: ", contrasenia)  
    
  //Validación  
  if(usuario == bd['usuario'] && contrasenia == bd['contrasenia']) {  
    res.redirect('/');  
  } else {  
    req.flash("message", "Usuario o contrasenia incorrectos");
    res.redirect('/login');
  }  
    
});

module.exports = router;
