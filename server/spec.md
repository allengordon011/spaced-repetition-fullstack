USER STORIES

As a user, I can create an account and login with my email address and a password.

... I can view a word in French, and enter my translation in English.

... I can receive feedback whether my answer was correct or not.

... I can go to the next question.

... I can see my progress on the page (how many questions I've successfully answered).

... I can logout, and return to continue at the same point in my progress.

COMPONENTS OUTLINE

Landing Page
-Header with app name
-Register/login with Google button

Flashcards Page
-display French word
-text input form for answer
-notification of correct or incorrect answer
-backend stores status of that word's answer
-display of user progress updates
-logout option
  -user progress is saved

frontend
-react, redux

backend
-Node.js, Express, MongoDB, Mongoose, Passport, OAuth
-Mongoose user schema and dictionary schema
-Google OAuth 2.0 strategy for Passport
-endpoints protected using Bearer strategy
-endpoint for frontend to record user input
-spaced repetition algorithm

database
collection1
-store usernames (username: emails)
-store progress in MongoDB db
  -# of questions answered correctly
  -answer history
collection2
-store french/english word pairs in MongoDB
