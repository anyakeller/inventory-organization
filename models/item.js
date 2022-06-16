//  Schema for items

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Items are required to have a name, quanity and location
const ItemSchema = new Schema({
  name: {type: String, required: true},
  quantity: {type: Number, required: true},
  location: {type: String, required: true},
  description: {type: String}
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;