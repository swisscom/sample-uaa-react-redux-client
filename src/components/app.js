import React from "react";
import { Provider } from "react-redux";
import { OidcProvider } from "redux-oidc";
import Routes from "../routes";
import store from "../store";
import userManager from "../utils/userManager";
import Root from "../components/root";
import { connect } from "react-redux";
import { loadConfStart, loadConfSuccess } from "../actions";
import { loadConfig } from "../utils/api";
import Spinner from "react-spinkit";

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadConfStart());
    loadConfig().then(result => {
      this.props.dispatch(loadConfSuccess(result));
    });
  }

  render() {
    if (this.props.conf.data) {
      return (
        <Provider store={store}>
          <OidcProvider store={store} userManager={userManager}>
            <Root>
              <Routes />
            </Root>
          </OidcProvider>
        </Provider>
      );
    } else {
      return <Spinner name="double-bounce" />;
    }
  }
}

function mapStateToProps(state) {
  return {
    conf: state.conf.conf
  };
}

function connectWithStore(store, WrappedComponent, ...args) {
  let ConnectedWrappedComponent = connect(...args)(WrappedComponent);
  return function(props) {
    return <ConnectedWrappedComponent {...props} store={store} />;
  };
}

export default connectWithStore(store, App, mapStateToProps);
