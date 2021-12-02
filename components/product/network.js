const express = require('express');
const multer = require('multer');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    const [name, extension] = file.originalname.split('.');
    cb(null, `${name}.${extension}`);
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('file'), function(req,res){
  console.log(req.file)
  controller.addProduct(req.body.code, req.body.name, req.body.provider)
    .then(data=>{
      response.success(req, res, data, 201);
    })
    .catch(e=>{
      response.error(req, res, 'Error interno', 500, e);
    })
});

router.get('/', function(req,res){
  const filterProducts = req.query.name || null;
  controller.getProducts(filterProducts)
    .then((productList)=>{
      response.success(req, res, productList, 200);
    })
    .catch(e=>{
      response.error(req, res, 'Error inesperado', 500, e);
    });
});

module.exports = router;