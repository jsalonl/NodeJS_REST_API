const Model = require('./model');

function addProvider(provider){
  const newProvider = new Model(provider);
  return newProvider.save();
}

async function getProviders(filterProviders){
  let filter = {};
  if(filterProviders !== null){
    filter = {name: new RegExp(["^", filterProviders, "$"].join(""), "i")}
  }
  const providers = await Model.find(filter);
  return providers
}

module.exports = {
  add: addProvider,
  list: getProviders,
}