const express = require('express');
const app = express();
const server  = require('http').Server(app);

const cors = require('cors');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

require('dotenv').config({path: './.env'});
const port = process.env.PORT;
const uri = process.env.URI_MONGO;
db(uri);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

socket.connect(server);
router(app);
app.use('/app', express.static('public'));

server.listen(port,function(){
  console.log('La aplicación esta corriendo en http://localhost:'+port);
});
