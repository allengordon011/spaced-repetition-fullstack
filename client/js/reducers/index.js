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
const answerReducer = (state={}, action) => {
  switch(action.type) {
    case actions.GET_FLASHCARD_SUCCESS:
      return {
        ...state,
        flashcard: action.flashcard
      }
      default:
      return state
  }
}

export default answerReducer
