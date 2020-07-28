const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const PinLocationSchema = new Schema({
  formatted_address: {
    type: String, 
    required: true
  },
  name: {
    type: String, 
    required: true
  },
  description: {
    type: String,
    required: true
  },
  website: {
    type: String, 
    required: true
  },
  phone: {
    type: String,
    required: true
  }
})