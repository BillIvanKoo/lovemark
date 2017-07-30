const mongoose = require('mongoose');
var Schema = mongoose.Schema

var typeSchema = new Schema({
  title: String
})

module.exports = mongoose.model('Type', typeSchema);