var express = require('express');
var router = express.Router();

let bd = {  
  'usuario': 'abc',  
  'contrasenia': '123'  
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.session.valid = false;
  res.render('login', { title: 'Login', message: req.flash('message')});
});

router.post('/validate', (req, res, next) => {
  let user = req.body.user;
  let pass = req.body.password;

  console.log(`El usuario ingresado: ${user}`);
  console.log(`La password ingresada: ${pass}`);

  if(bd.usuario === user && bd.contrasenia === pass){
    // req.session.valid = true;
    req.session.user = bd['usuario'];
    req.session.admin = true;  

    let tracing = req.cookies.tracing  || ''
    if(tracing.length > 0)
      res.redirect(tracing)   
    else
    
    res.redirect('/');
  }
  else{
    req.flash('message', 'Usuario o password erróneos, por favor vuelva a intentar.');
    res.redirect('/login');
  }
});

router.get('/out', function(req, res, next) { 
  req.session.destroy();
  res.redirect('/login')
});

module.exports = router;
