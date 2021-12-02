const store = require('./store');

function addProvider(code, providerName){
  console.error(code, providerName);
  if(!code || !providerName){
    return Promise.reject("Datos inválidos");
    console.error(code, providerName);
  }
  const provider = {
    code,
    providerName,
  }
  return store.add(provider);
}

function getProviders(filterProviders){
  return new Promise((resolve, reject)=>{
    resolve(store.list(filterProviders));
  });
}

module.exports = {
  addProvider,
  getProviders,
};