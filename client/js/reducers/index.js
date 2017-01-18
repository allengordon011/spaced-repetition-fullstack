import * as actions from '../actions';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userReducer
});

export const userReducer = (state=[], action) => {
  switch(action.type) {
    case 'CREATE_USER':
      return [
        ...state,
        {
          username: action.username
        }
      ]
      default: return state
  }
}

export default rootReducer
