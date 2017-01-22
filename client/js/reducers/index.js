import * as actions from '../actions';
// import { combineReducers } from 'redux';
//
// const rootReducer = combineReducers({
//   user: userReducer,
//   questions: questionsReducer
// });
//
// const userReducer = (state={}, action) => {
//   switch(action.type) {
//     case CREATE_USER:
//       return {
//         ...state
//       }
//       // case 'POST_USER':
//       default:
//         return state
//   }
// // }
//
const flashCardsReducer = (state={}, action) => {
  switch(action.type) {
    case actions.GET_FLASHCARDS_SUCCESS:
    // console.log('action data: ', action.data)
    let flashcards = action.data;
      return {
        ...state,
        french: flashcards[0].french,
        english: flashcards[0].english,
        freq: flashcards[0].freq,
        dictionary: flashcards
      }
      default:
      return state
  }
}

export default flashCardsReducer
