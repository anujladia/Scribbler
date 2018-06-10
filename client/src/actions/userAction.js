import { CREATE_USER, GET_ERRORS, SET_USER, SET_AUTHENTICATION } from "./types";
import axios from "axios";

// Create a new user
export const createUser = name => dispatch => {
  axios
    .post("/api/users", name)
    .then(res => {
      // Save to local Storage
      const { _id } = res.data;
      // Set token to LS
      localStorage.setItem("user_id", _id);
      dispatch({
        type: CREATE_USER,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Get the current user
export const getUser = user => dispatch => {
  axios
    .get(`/api/users/${localStorage.user_id}`)
    .then(res =>
      dispatch({
        type: SET_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Check user is authenticated or not
export const setAuthenticated = user => {
  return {
    type: SET_AUTHENTICATION
  };
};
