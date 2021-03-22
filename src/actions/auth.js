import axios from 'axios';
import * as types from '../constants/types';
import * as Config from '../utils/config.json';



export const register = (payload) => (dispatch) => {
  axios
    .post(`${Config.base_url}/users/register`, payload)
    .then((response) => {
      console.log('res register', response)
      const { data } = response;
      dispatch({ type: types.REGISTER, payload: data });
    })
    .catch((error) => {
      alert('Please reload page')
      console.log("register user", error)
    })
}

export const login = (payload) => (dispatch) => {
  axios
    .post(`${Config.base_url}/users/login`, payload)
    .then((response) => {
      console.log('res login', response)
      const { data } = response;
      dispatch({ type: types.LOGIN, payload: data });
    })
    .catch((error) => {
      alert('Please reload page')
      console.log("login user", error)
    })
}

// export function auth() {
//   const request = axios.get(`${Config.base_url}/auth`)
//     .then(response => response.data);

//   return {
//     type: AUTH,
//     payload: request
//   }
// }

// export function logoutUser() {
//   const request = axios.get(`${Config.base_url}/logout`)
//     .then(response => response.data);

//   return {
//     type: LOGOUT,
//     payload: request
//   }
// }