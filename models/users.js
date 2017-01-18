import mongoose from 'mongoose';
//const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {type: String, required: true},
  questions: Array,
  score: Number
});

const User = mongoose.model('User', UserSchema);

export default User;


// const user = 'asdf'

// { user }
// { user: user }
// { user: 'asdf' }

// const User = require('./user.js') -> 'asdf'
// const User = require('./user.js').User -> { User: 'asdf' }
