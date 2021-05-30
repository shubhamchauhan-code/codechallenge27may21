import AsyncStorage from '@react-native-community/async-storage';
import { AUTHENTICATE, LOGIN, LOGOUT } from '../actionTypes/userActionsType';

export const userLogin = () => ({
  type: LOGIN,
});

export const userLogout = () => ({
  type: LOGOUT,
});

export const userAuthencate = () => ({
  type: AUTHENTICATE,
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload: payload,
});

export const userThunkLogin = (token) => {
  return async function (dispatch) {
    try {
      dispatch(userAuthencate());
      await AsyncStorage.setItem('token', token);
      dispatch(userLogin());
    } catch (error) {
      global.customAlert.show({
        title: "OOPS!",
        message: error.toString(),
      })
    }
  };
};

export const checkAuthenticate = () => {
  return async function (dispatch) {
    try {
      var token = await AsyncStorage.getItem('token');
      if (token == null || token == undefined || token == '') {
        dispatch(userLogout());
      } else {
        dispatch(userLogin());
      }
    } catch (e) {
      dispatch(userLogout());
    }
  };
};

export const updateUserThunk = (userData) => {
  return async function (dispatch) {
    try {
      var token = await AsyncStorage.getItem('token');
      if (token == null || token == undefined || token == '') {
        dispatch(userLogout());
      } else {
        dispatch(updateUser(userData));
      }
    } catch (e) {
      dispatch(userLogout());
    }
  };
};

export const logout = () => {
  return function (dispatch) {
    AsyncStorage.removeItem('token')
      .then((token) => {
        dispatch(userLogout());
      })
      .catch((error) => {
        dispatch(userLogout());
      });
  };
};
