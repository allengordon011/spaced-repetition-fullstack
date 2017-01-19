import * as actions from '../actions';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userReducer: userReducer
  // questionsReducer
});

export const userReducer = (state={}, action) => {
  switch(action.type) {
    case 'CREATE_USER':
      return {
        // ...state,
        // {
          username: action.username
        // }
      }
      // case 'POST_USER'
      default: return state
  }
}

// export const questionsReducer = (state={}, action) => {
//   switch(action.type) {
//     case 'RECEIVE_DATA':
//       return {
//         question: action.question
//       }
//       // default: return question
//   }
// }

export default rootReducer
