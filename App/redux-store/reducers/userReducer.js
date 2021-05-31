import { AUTHENTICATE, LOGIN, LOGOUT, UPDATE_USER } from '../actionTypes/userActionsType';

const initialState = {
  login: false,
  loading: true,
  address: "",
  city: "",
  dob: "0000-00-00",
  email: "",
  first_name: "",
  full_name: "",
  gender: "",
  id: 0,
  last_name: "",
  mobile: "",
  nickname: "",
  pincode: "",
  profile_pic: "",
};

export default userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: true,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload
      };
    case LOGOUT:
      return {
        ...initialState,
        login: false,
        loading: false,
      };
    case AUTHENTICATE:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
