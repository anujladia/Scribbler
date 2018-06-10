import { GET_ALL_SCRIBS, GET_MY_SCRIBS } from "../actions/types";

const initialState = {
  scribs: [],
  myscribs: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SCRIBS:
      return {
        ...state,
        scribs: action.payload
      };
    case GET_MY_SCRIBS:
      return {
        ...state,
        myscribs: action.payload
      };
    default:
      return state;
  }
}
