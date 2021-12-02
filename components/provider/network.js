const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req,res){
  controller.addProvider(req.body.code, req.body.providerName)
      .then(data=>{
        response.success(req, res, data, 201);
      })
      .catch(e=>{
        response.error(req, res, 'Error interno', 500, e);
      })
});

router.get('/', function(req,res){
  const filterProviders  = req.query.name || null;
  controller.getProviders(filterProviders)
      .then((providerList)=>{
        response.success(req, res, providerList, 200);
      })
      .catch(e=>{
        response.error(req, res, 'Error inesperado', 500, e);
      });
});

module.exports = router;