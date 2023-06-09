import {combineReducers} from 'redux';
import userSlice, {UserModel} from './User';

export interface StoreModel {
  user: UserModel;
}

export default combineReducers({
  user: userSlice,
});
