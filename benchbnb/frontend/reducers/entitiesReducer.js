import {combineReducers} from 'redux';
import users from './usersReducer';

const entitiesReducer = combineReducers({
  users
});

export default entitiesReducer;