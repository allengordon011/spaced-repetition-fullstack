import Mongoose from 'mongoose';
//const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {type: String, required: true},
  questions: [],
  score: Number
})

const User = mongoose.model('User', userSchema);
