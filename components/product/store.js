const Model = require('./model');

function addProduct(product){
  const newProduct = new Model(product);
  return newProduct.save();
}

async function getProducts(filterProducts){

  return new Promise((resolve, reject)=>{
    let filter = {};
    if(filterProducts !== null){
      filter = {name: new RegExp(["^", filterProducts, "$"].join(""), "i")}
    }
    const products = Model.find(filter)
        .populate('provider')
        .catch(e=>reject(e));
    resolve(products);
  });

}

module.exports = {
  add: addProduct,
  list: getProducts,
}