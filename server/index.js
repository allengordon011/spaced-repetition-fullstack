import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
// const mongoose = require('mongoose');
import User from '../models/users';
import FlashCards from '../models/flashcards';
import bodyParser from 'body-parser';
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import BearerStrategy from 'passport-http-bearer';

const router = express.Router();
const jsonParser = bodyParser.json();

mongoose.Promise = global.Promise;

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
const DATABASE_URL = 'mongodb://trig:c0ding!@ds153715.mlab.com:53715/space-repetition';

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use(express.static(process.env.CLIENT_PATH));

// passport.use(new GoogleStrategy({
//     clientID: "666318730444-jtladaigq3b7q2hr6f26d1drti6m0c6u.apps.googleusercontent.com",
//     clientSecret: "SCF1Z4qZcVwxgKyv5u9Ot6e-",
//     callbackURL: "http://localhost:8080/auth/google/callback"
// }, function(accessToken, refreshToken, profile, cb) {
//     console.log(accessToken, profile);
//     return cb(null, profile);
//     // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     //   return cb(err, user);
//     // });
// }));

// app.get('/auth/google', passport.authenticate('google', {
//     scope: ['profile', 'email']
// }));
//
// app.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/login'}), function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
// });
//
app.post('/user', jsonParser, (req, res) => {
    if (!req.body.username) {
        return res.status(400).json({message: 'Must specify a username'})
    }
    User.create({username: req.body.username,
      questions: [],
      score: 0,
      email: '',
      googleId: '',
      token: ''})
      .then(res.status(201).json({message: 'User created'}))
      .catch(err => {
          console.error(err);
          res.status(500).json({message: 'Internal server error'})
      });
});

app.get('/user/:username', (req, res) => {
    User.findOne({'username': req.params.username})
    .select('username questions score email googleId token')
    .exec()
    .then((user) => {
      // console.log(user)
        res.status(200).json(user);
    }).catch(err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
    });
})

app.post('/flashcards', jsonParser, (req, res) => {
  // const query = User.findOne({'username': req.params.username})
  //   .select('username')
  //   .then((user) => {
  //   if(!user) {
  //     return res.status(404).json({message: "User does not exist"})
  //   } else {
  //     console.log(user.username)
  //     console.log(user._id)
  //     return res.status(200).json({message: 'User found'})
  //   }
//call query here? move query to global?
    FlashCards.create({french: req.body.french, english: req.body.english, freq: 1})
    .then(res.status(201)
    //location header with res
    .json({message: 'Entry created'}))
    .catch(err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'})
    });
});

app.get('/flashcards', (req, res) => {
  //var query = User.findOne({ 'username': req.params.username }, function(err, user))
//   if (err) {
//     "user doesnt exist yo"
//     } else {
//     Call FlashCard.create
// })
    FlashCards.find()
        .then((flashcards) => {
          // console.log(flashcards)
          res.json(flashcards)
    }).catch(err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
    });
})

function runServer(databaseURL = DATABASE_URL) {
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseURL, err => {
            if (err) {
                return reject(err)
            }
            app.listen(PORT, HOST, (err) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                const host = HOST || 'localhost';
                console.log(`Listening on ${host}:${PORT}`);
                resolve();
            }).on('error', err => {
                mongoose.disconnect();
                reject(err)
            });
        });
    });
}

if (require.main === module) {
    runServer();
}
