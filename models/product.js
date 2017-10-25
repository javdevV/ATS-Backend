var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productsSchema = new Schema({
  productName: String,
  basePrice: Number,
  category: Number,
  brand: String,
  productMaterial: String,
  imageUrl: String,
  delivery: {
    type: Date
  },
  details: String,
  reviews: [{
    rating:
    Number,
    content:
    String
  }],
}, {
  collection: "products"
});
module.exports = mongoose.model('products', productsSchema);
