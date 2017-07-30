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
  category: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  type: [{ type: Schema.Types.ObjectId, ref: 'Type' }]
})

module.exports = mongoose.model('Jewellery', jewellerySchema);