import { GET_ERRORS, GET_ALL_SCRIBS, GET_MY_SCRIBS } from "./types";
import axios from "axios";
import toastr from "toastr";

// Post the new scrib
export const postScrib = post => dispatch => {
  axios
    .post(`/api/posts/${localStorage.user_id}`, post)
    .then(res => toastr.success("Your scrib has been shared."))
    .catch(err => {
      console.log(err);
      toastr.error("Network issue! Scrib unable to be shared");
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Get all scribs
export const getAllScribs = () => dispatch => {
  axios
    .get(`/api/posts`)
    .then(res =>
      dispatch({
        type: GET_ALL_SCRIBS,
        payload: res.data
      })
    )
    .catch(err => {
      toastr.error("Something went wrong. Unable to load the scribs");
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Get my scribs
export const getMyScribs = () => dispatch => {
  axios
    .get(`/api/posts/${localStorage.user_id}`)
    .then(res => {
      dispatch({
        type: GET_MY_SCRIBS,
        payload: res.data
      });
    })
    .catch(err => {
      toastr.error("Something went wrong. Unable to load the scribs");
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
