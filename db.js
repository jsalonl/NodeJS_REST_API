const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url){
  await db.connect(url, {
    useNewUrlParser: true
  })
  .then(()=>{
    //console.log('[db] Conectada con exito');
  })
  .catch(e=>{
    console.error('[db] Error con la base de datos');
    return process.exit(22);
  });
  
}

module.exports = connect;