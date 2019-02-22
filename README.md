# sample-uaa-react-redux-client

This is a small react sample app to demonstrate the usage of the Swisscom UAA service using the implicit flow of OIDC. The code is based on [redux-oidc-example](https://github.com/maxmantz/redux-oidc-example).

You will need access to the Swisscom internal instance of Cloud Foundry to use it.

## Running this sample
Here's how you can run the example app in your own space.
### Clone the repo
```
git clone https://github.com/swisscom/sample-uaa-react-redux-client.git
```
### Adapt the config
Adapt the `manifest.yml` to include the route which you want to assign to your app. Note that you will also need to reference this route in the service instance creation step below.
```
---
applications:
  - name: sample-uaa-react-redux-client
    env:
      SERVER_URL: https://sso-corproot-v2-sample-react-redux-api.scapp-services.swisscom.com
    memory: 64MB
    buildpack: https://github.com/cloudfoundry/staticfile-buildpack.git
    command: $HOME/public/start.sh
    path: dist
    routes:
      - route: <provide a route for your app>
    services:
      - sample-uaa-react-redux-client
```

### Create an instance of the UAA service
Use the [Cloud Foundry CLI](https://github.com/cloudfoundry/cli) to create an instance of the UAA service named `sample-uaa-react-redux-client`
```
cf create-service corpid-2-int nova sample-uaa-react-redux-client -c '{"grantTypes": ["implicit"], "redirectUris": ["https://<your app's route>/callback"], "accessTokenValidity": 14400}'
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
- Client (VueJS): https://github.com/swisscom/sample-uaa-vue-client
- Client (React & Redux):https://github.com/swisscom/sample-uaa-react-redux-client
- Client (AngularJS): https://github.com/swisscom/sample-uaa-angular-client

- Resource Server (Spring boot): https://github.com/swisscom/sample-uaa-spring-boot-resource-server
- Resource Server (Ruby): https://github.com/swisscom/sample-uaa-ruby-resource-server
