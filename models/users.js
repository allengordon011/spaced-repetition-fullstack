import mongoose from 'mongoose';
//const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {type: String, required: true},
  questions: Array,
  score: Number,
  email: String,
  googleId: String,
  token: String
});

const User = mongoose.model('User', UserSchema);

export default User;
