const store = require('./store');
const socket = require('../../socket').socket;

function addProduct(code,name,provider){
  return new Promise((resolve, reject)=>{
    if(!code || !name || !provider){
      console.error('[productController]',code, name);
      reject("Los datos son incorrectos");
    }
    const newProduct = {
      code,
      name,
      provider,
    }
    store.add(newProduct);
    socket.io.emit('message', newProduct);
    resolve(newProduct)
  });
}

function getProducts(filterProducts){
  return new Promise((resolve, reject)=>{
    resolve(store.list(filterProducts));
  });
}

module.exports = {
  addProduct,
  getProducts,
};