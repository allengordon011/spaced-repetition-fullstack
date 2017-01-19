import mongoose from 'mongoose';
//const mongoose = require('mongoose');

const DictionarySchema = new mongoose.Schema({
  french: String,
  english: String,
  freq: Number,
  userId: mongoose.Schema.Types.ObjectId
});

const Dictionary = mongoose.model('Dictionary', DictionarySchema);

export default Dictionary
