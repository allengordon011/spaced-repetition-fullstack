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
      return {
        ...state,
        flashcards: action.flashcards
      }
      default:
      return state
  }
}

export default flashCardsReducer
