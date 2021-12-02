const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
  code: Number,
  name: String,
  provider: [{
    type: Schema.ObjectId,
    ref: 'Provider'
  }],
});

const model = mongoose.model('Product', mySchema);
module.exports = model;