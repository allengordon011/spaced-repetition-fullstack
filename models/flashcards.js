import mongoose from 'mongoose';
//const mongoose = require('mongoose');

const FlashCardsSchema = new mongoose.Schema({
  french: String,
  english: String,
  freq: Number
});

const FlashCards = mongoose.model('FlashCards', FlashCardsSchema);

export default FlashCards
