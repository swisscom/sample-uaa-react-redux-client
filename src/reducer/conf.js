import { LOAD_CONF_SUCCESS } from "../actions";
import userManager from "../utils/userManager";

const initialState = {
  conf: {},
  usermanager: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONF_SUCCESS:
      return Object.assign({}, state, {
        conf: action.payload,
        usermanager: userManager(action.payload.data)
      });
    default:
      return state;
  }
}
