import mongoose from 'mongoose';
//const mongoose = require('mongoose');

const DictionarySchema = mongoose.Schema({
  french: ['bonjour', 'oui', 'non', 'sil vous plait', 'merci', 'chat', 'noir', 'rouge'],
  english: ['hello', 'yes', 'no', 'please', 'thank you', 'cat', 'black', 'red']
})

const Dictionary = mongoose.model('Dictionary', DictionarySchema);

module.exports = {DictionarySchema};
