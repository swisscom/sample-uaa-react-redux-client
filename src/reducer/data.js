import { LOAD_DATA_SUCCESS } from "../actions";
import { SESSION_TERMINATED, USER_EXPIRED } from "redux-oidc";

const initialState = {
  data: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SESSION_TERMINATED:
    case USER_EXPIRED:
      return Object.assign({}, state, { channels: [] });
    case LOAD_DATA_SUCCESS:
      return Object.assign({}, state, { data: action.payload });
    default:
      return state;
  }
}
