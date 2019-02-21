import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { reducer as oidcReducer } from "redux-oidc";
import dataReducer from "./data";
import confReducer from "./conf";

const reducer = combineReducers({
  routing: routerReducer,
  oidc: oidcReducer,
  data: dataReducer,
  conf: confReducer
});

export default reducer;
