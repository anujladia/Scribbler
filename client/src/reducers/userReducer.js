import { CREATE_USER, SET_AUTHENTICATION, SET_USER } from "../actions/types";

const initialState = {
  user: {},
  isAuthenticated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    case SET_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: true
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
