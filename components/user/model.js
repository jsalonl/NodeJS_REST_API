const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  email: String,
  date: Date,
});

const model = mongoose.model('User', mySchema);
module.exports = model;