
var express = require('express');
var router = express.Router();

let bd = {  
  'usuario': 'abc',  
  'contrasenia': '123'  
}

var auth = (req, res, next) => {
  if (req.session && req.session.user === bd['usuario'] && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};

module.exports = auth;