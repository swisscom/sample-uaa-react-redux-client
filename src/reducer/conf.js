import { LOAD_CONF_SUCCESS } from "../actions";

const initialState = {
  conf: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONF_SUCCESS:
      return Object.assign({}, state, { conf: action.payload });
    default:
      return state;
  }
}
