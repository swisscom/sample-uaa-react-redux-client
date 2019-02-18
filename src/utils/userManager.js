import { createUserManager } from "redux-oidc";

const userManagerConfig = {
  client_id: "VljAInZEJUvFtC5vbd09QpyLd90N0QRrFgmNy8H8mCbIoTxyLxBH7wUdoYhPCOgU",
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ""
  }/callback`,
  response_type: "token",
  scope: "openid roles",
  authority: "https://sso-corproot-v2-int.scapp-services.swisscom.com",
  automaticSilentRenew: false,
  filterProtocolClaims: true,
  loadUserInfo: false
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
