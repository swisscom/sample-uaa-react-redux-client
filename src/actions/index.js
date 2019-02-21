export const LOAD_CONF_START = "sample-uaa-react-redux-client/LOAD_CONF_START";
export const LOAD_CONF_SUCCESS =
  "sample-uaa-react-redux-client/LOAD_CONF_SUCCESS";
export const LOAD_DATA_START = "sample-uaa-react-redux-client/LOAD_DATA_START";
export const LOAD_DATA_SUCCESS =
  "sample-uaa-react-redux-client/LOAD_DATA_SUCCESS";

export function loadConfStart() {
  return {
    type: LOAD_CONF_START
  };
}

export function loadConfSuccess(conf) {
  return {
    type: LOAD_CONF_SUCCESS,
    payload: conf
  };
}

export function loadDataStart() {
  return {
    type: LOAD_DATA_START
  };
}

export function loadDataSuccess(data) {
  return {
    type: LOAD_DATA_SUCCESS,
    payload: data
  };
}
