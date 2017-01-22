import fetch from 'isomorphic-fetch';

const CREATE_USER = 'CREATE_USER';
//GOOGLE
export const createUser = username => ({
  type: CREATE_USER,
  //post user to db
  username

});

const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const submitAnswer = answer => ({
  type: SUBMIT_ANSWER,
  questions: [questions],
  score: score + 1
});

//action
export const getFlashCards = () => {
    return dispatch => {
      return fetch('/flashcards')
        .then(res => res.json())
        .then(
          json => dispatch(getFlashCardsSuccess(json))
        )
    }
}

//action creator
export const GET_FLASHCARDS_SUCCESS = 'GET_FLASHCARDS_SUCCESS';

export const getFlashCardsSuccess = (data) => {
  // console.log('data: ', data[0])
  return {
    type: GET_FLASHCARDS_SUCCESS,
    data
  }
};

const NEXT_QUESTION = 'NEXT_QUESTION';

const nextQuestion = (questions) => {
// AJAX fetch to my server with this action
return dispatch => {
  return fetch('/flashcards')
    .then(res => res.json())
    .then(json => dispatch(RECEIVE_DATA))
}
}


const french = [
  'bonjour', 'oui', 'non', 'sil vous plait', 'merci', 'chat', 'noir', 'rouge'
]

const english = [
  'hello', 'yes', 'no', 'please', 'thank you', 'cat', 'black', 'red'
]

const freq = [
  1, 1, 1, 1, 1, 1, 1, 1
]
