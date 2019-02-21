import store from "../store";

export function loadData(url) {
  return apiRequest(url);
}

export function loadConfig() {
  const url = "/conf.json";
  return apiRequest(url, "GET", false);
}

// a request helper which reads the access_token from the redux state and passes it in its HTTP request
function apiRequest(url, method = "GET", authenticated = true) {
  const headers = new Headers();
  headers.append("Accept", "application/json");
  if (authenticated) {
    const token = store.getState().oidc.user.access_token;
    headers.append("Authorization", `Bearer ${token}`);
  }
  const options = {
    method,
    headers
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => ({ data }))
    .catch(error => ({ error }));
}
