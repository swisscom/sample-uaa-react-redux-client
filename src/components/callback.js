import React from "react";
import { connect } from "react-redux";
import { CallbackComponent } from "redux-oidc";
import { push } from "react-router-redux";

class CallbackPage extends React.Component {
  render() {
    // just redirect to '/' in both cases
    return (
      <CallbackComponent
        userManager={this.props.usermanager}
        successCallback={() => this.props.dispatch(push("/"))}
        errorCallback={error => {
          this.props.dispatch(push("/"));
          console.error(error);
        }}
      >
        <div>Redirecting...</div>
      </CallbackComponent>
    );
  }
}

function mapStateToProps(state) {
  return {
    conf: state.conf.conf,
    usermanager: state.conf.usermanager
  };
}

export default connect(mapStateToProps)(CallbackPage);
