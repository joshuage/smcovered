import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),                
  isAuthenticated: null,
  loading: true,
  user: null,
	title: null
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  // console.log(payload)

  switch(type) {
    case USER_LOADED:
      return {
      ...state,
      isAuthenticated: true,
      loading: false,
      user: payload.token,                 // @yuchen 你这语句 user改成@mail
      title: payload.title
      }
    case REGISTER_SUCCESS:                 // @yuchen 你loading是干嘛的, 我没改
			return {
				...state,
				isAuthenticated: true,
				token: payload.token,
				title: payload.title,
			}
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        title: payload.title
      }
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        title: null
      }
    default:
      return state;
  }
}