const mongoose = require('mongoose');
var Schema = mongoose.Schema

var jewellerySchema = new Schema({
  itemCode: String,
  goldWeight: Number,
  diamondQuantity: Number,
  diamondCarats: Number,
  productName: String,
  description: String,
  price: String,
  images: Array,
})

module.exports = mongoose.model('Jewellery', jewellerySchema);