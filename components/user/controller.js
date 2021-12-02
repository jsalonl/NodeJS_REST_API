const store = require('./store');

function addUser(user, email){
  return new Promise((resolve, reject)=>{
    if(!user || !email){
      console.error('[userController] No hay usuario o correo');
      return reject('Los datos son incorrectos');
    }
    const newUser = {
      user: user,
      email: email,
      created: new Date(),
    }
    store.add(newUser);
    resolve(newUser);
  });
}

function getUsers(filterUser){
  return new Promise((resolve, reject)=>{
    resolve(store.list(filterUser));
  });
}

function updateUser(id, email){
  return new Promise(async (resolve, reject) =>{
    if(!id || !email){
      return reject('Información invalida');
    }
    const result = await store.updateEmail(id,email);
    resolve(result);
  });
}

function deleteUser(id){
  return new Promise((resolve, reject) => {
    if(!id){
      reject('Id Invalido');
    }
    store.remove(id)
      .then(()=>{
        resolve()
      })
      .catch(e=>{
        reject(e)
      })
  })
}

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
}