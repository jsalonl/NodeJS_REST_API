const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
  code: Number,
  providerName: String,
});

const model = mongoose.model('Provider', mySchema);
module.exports = model;