import mongoose from 'mongoose';
//const mongoose = require('mongoose');

const FlashCardSchema = new mongoose.Schema({
  french: String,
  english: String,
  freq: Number
});

const FlashCard = mongoose.model('FlashCard', FlashCardSchema);

export default FlashCard
