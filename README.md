# sample-uaa-react-redux-client

This is a small react sample app to demonstrate how to integrate with a UAA service using the implicit flow of OIDC. The code is based on [redux-oidc-example](https://github.com/maxmantz/redux-oidc-example).

## Running this sample
Here's how you can run the example app in your own space.

### Set up a resource server
To run this sample, you need to first set up a resource server, i.e. an API to which your React app will connect once it has the auth token. To achieve this you can either deploy the [Spring Boot sample](https://github.com/swisscom/sample-uaa-spring-boot-service-provider) or the [Ruby sample](https://github.com/swisscom/sample-uaa-ruby-service-provider). We will refer to the URL under which this resource server is running as `<resource server URL>`.

### Clone the repo
Next you need to clone this repo.
```
git clone https://github.com/swisscom/sample-uaa-react-redux-client.git
```
### Adapt the config
Adapt the `manifest.yml` to include the route which you want to assign to your app as well as the URL of the resource server. Note that you will also need to reference this route in the service instance creation step below.
```
---
applications:
  - name: sample-uaa-react-redux-client
    env:
      SERVER_URL: <resource server URL>
    memory: 64MB
    buildpack: https://github.com/cloudfoundry/staticfile-buildpack.git
    command: $HOME/public/start.sh
    path: dist
    routes:
      - route: <provide a route for your app>
    services:
      - oauth2
```

### Create an instance of the UAA service
Use the [Cloud Foundry CLI](https://github.com/cloudfoundry/cli) to create a user provided service instance for the UAA you are targeting. The parameter `redirectUris` will reference your app's route, as specified in the `manifest.yml`. Be sure to tag your service instance with `oauth2` as shown below, so that the the OIDC enpoints of the instace can be picked up by the service binding an served to the browser app.
```
CREDENTIALS='{"logoutEndpoint": "<uaa-url>/logout.do", "userInfoEndpoint": "<uaa-url>/userinfo", "checkTokenEndpoint": "<uaa-url>/check_token", "scope": "openid,roles,user_attributes", "grantTypes": "implicit", "redirectUris": "<your app's route>/callback", "authorizationEndpoint": "<uaa-url>/oauth/authorize", "clientId": "HwykJoWyMNmJMLe93OgFiTxeOzYVMk7ff80v7ss87FwUJKIwsyzlM6vm2YVN4u9g", "clientSecret": "null", "accessTokenValidity": "14400", "tokenEndpoint": "<uaa-url>/oauth/token"}
cf create-user-provided-service oauth2 -p $CREDENTIALS -t oauth2
```

### Build the react app
Run the Webpack productive build for the React app.
```
npm run build
```

### Push the app
Push the app to Cloud Foundry
```
cf push
```

## Sample overview
### Authorization code
- Service provider (Spring boot): https://github.com/swisscom/sample-uaa-spring-boot-service-provider
- Service provider (Ruby): https://github.com/swisscom/sample-uaa-ruby-service-provider

### Implicit flow & Client Credentials
> **_WARNING:_** [PKCE's](https://oauth.net/2/pkce/) secure implementation renders the implicit flow obsolete, as it is [vulnerable](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics#section-2.1.2) and must not be used anymore.
- Client (VueJS): https://github.com/swisscom/sample-uaa-vue-client
- Client (React & Redux):https://github.com/swisscom/sample-uaa-react-redux-client
- Client (AngularJS): https://github.com/swisscom/sample-uaa-angular-client

- Resource Server (Spring boot): https://github.com/swisscom/sample-uaa-spring-boot-resource-server
- Resource Server (Ruby): https://github.com/swisscom/sample-uaa-ruby-resource-server
