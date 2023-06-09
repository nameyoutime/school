import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/User';
export interface UserModel {
  detail: User;
  isLogged: boolean
}
const initialState: UserModel = {
  detail: {
    _id: '',
    userName: '',
    role: null,
    createdAt: '',
    passWord: '',
    updatedAt: '',
  },
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login(state, action: { payload: User }) {
      return { ...state, detail: { ...action.payload }, isLogged: true };
    },
    logout() {
      return initialState;
    },
    updateProfile(
      state,
      action: {
        payload: User;
      },
    ) {
      return {
        ...state,
        detail: { ...action.payload },
      };
    },

  },
});
const { actions, reducer } = userSlice;
export const { login, logout, updateProfile } =
  actions;
export default reducer;
