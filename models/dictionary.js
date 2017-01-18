import mongoose from 'mongoose';
//const mongoose = require('mongoose');

const DictionarySchema = new mongoose.Schema({
  french: Array,
  english: Array,
  freq: Array
});

const Dictionary = mongoose.model('Dictionary', DictionarySchema);

export default Dictionary
