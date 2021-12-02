
const Model = require('./model');

function addUser(user){
  const newUser = new Model(user);
  return newUser.save();
}

async function getUsers(filterUser){
  let filter = {};
  if(filterUser !== null){
    filter = {user: new RegExp(["^", filterUser, "$"].join(""), "i")};
  }
  const users = await Model.find(filter);
  return users;
}

async function updateEmail(id, email){
  const foundUser = await Model.findOne({
    _id: id
  });
  foundUser.email = email;
  const newEmail = await foundUser.save();
  return newEmail;
}

function removeUser(id){
  return Model.deleteOne({
    _id: id
  });
}

module.exports = {
  add: addUser,
  list: getUsers,
  updateEmail: updateEmail,
  remove: removeUser,
}