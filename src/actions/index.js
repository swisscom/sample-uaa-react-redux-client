export const LOAD_DATA_START = "sample-uaa-react-redux-client/LOAD_DATA_START";
export const LOAD_DATA_SUCCESS =
  "sample-uaa-react-redux-client/LOAD_DATA_SUCCESS";

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
