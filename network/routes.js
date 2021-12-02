const express = require('express');
const user = require('../components/user/network');
const product = require('../components/product/network');
const provider = require('../components/provider/network');

const routes = function(server){
	server.use('/user', user);
	server.use('/product', product);
	server.use('/provider', provider);
}

module.exports = routes;