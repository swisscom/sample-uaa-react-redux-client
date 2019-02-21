import { createUserManager } from "redux-oidc";

function userManagerConfig(conf) {
  let auth = conf.oidc.authorizationEndpoint;
  return {
    client_id: conf.oidc.clientId,
    redirect_uri: `${window.location.protocol}//${window.location.hostname}${
      window.location.port ? `:${window.location.port}` : ""
    }/callback`,
    response_type: "token",
    scope: "openid roles",
    authority: auth.substr(0, auth.indexOf("/oauth")),
    automaticSilentRenew: false,
    filterProtocolClaims: true,
    loadUserInfo: false
  };
}

const userManager = conf => createUserManager(userManagerConfig(conf));

export default userManager;
