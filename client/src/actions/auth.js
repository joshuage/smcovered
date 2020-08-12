import axios from '../apis/smCovered';
import { setAlert } from './alert'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types'


// Load User
export const loadUser = () => async dispatch => {
  if (!localStorage.token) {
		localStorage.setItem('token', '')
    // setAuthToken(localStorage.token)          // @yuchen 
  }

  try {
    const res = await axios.get('/api/auth')  // @yuchen 最开始程序死在这里了; 现在改好了

    // console.log(res.data);

    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}

// Register User
export const register = (email, pwd, url) => async dispatch => {
  const config = {                            // @yuchen
    headers: {
      'Content-Type': 'application/json'
    }
	}
	console.log('from register')
	console.log(email)
  const body = JSON.stringify({ email, pwd})

  try {
    const { data } = await axios.post(`/api/${url}`, body, config)  // @yuchen 是因为这里有body 记得传入url
		console.log(data)
		localStorage.setItem('what happened', data.token)

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data
    });

    //dispatch(loadUser());    // @yuchen redirect去哪里加个判断

  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'error')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
}

// Login User
export const login = ( email, password ) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ email, password});

  try {
    const res = await axios.post('/api/auth/login', body, config);

    // console.log(res)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());

  } catch (err) {
    // console.log(err)
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'error')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
}

// Logout User
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
}