const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req, res){
	const filterUsers = req.query.user || null;
	controller.getUsers(filterUsers)
		.then((userList)=>{
			response.success(req, res, userList, 200)
		})
		.catch(e=>{
			response.error(req, res, 'Error inesperado', 500, e);
		})
});

router.post('/', function(req,res){
	controller.addUser(req.body.user, req.body.email).
		then((fullMsg)=>{
			response.success(req, res, fullMsg, 201);
		})
		.catch(e => {
			response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador');
		});
});

router.patch('/:id', function(req, res){
	controller.updateUser(req.params.id, req.body.email)
		.then((data)=>{
			response.success(req, res, data, 200);
		})
		.catch(e=>{
			response.error(req, res, 'Error interno', 500, e);
		});
});

router.delete('/:id', function(req, res){
	controller.deleteUser(req.params.id)
		.then(()=>{
			response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
		})
		.catch(e=>{
			response.error(req,res, 'Error interno', 500, e);
		})
});

module.exports = router;