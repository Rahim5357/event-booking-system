import { loginStart, loginSuccess, loginFailure, logout } from '../reducers/userReducer';
import { loginUser, logoutUser } from '../../api/mockApi';

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const user = await loginUser(credentials);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logoutAction = () => async (dispatch) => {
  try {
    await logoutUser();
    dispatch(logout());
  } catch (error) {
    console.error('Logout failed:', error);
  }
};