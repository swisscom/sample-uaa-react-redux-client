import React from "react";
import { connect } from "react-redux";

class LoginPage extends React.Component {
  onLoginButtonClick(props) {
    return event => {
      event.preventDefault();
      props.usermanager.signinRedirect();
    };
  }

  render() {
    return (
      <div style={styles.root}>
        <h3>Welcome to the redux-oidc sample app!</h3>
        <p>Please log in to continue</p>
        <button onClick={this.onLoginButtonClick(this.props)}>
          Login using UAA
        </button>
      </div>
    );
  }
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    flexShrink: 1
  }
};

function mapStateToProps(state) {
  return {
    conf: state.conf.conf,
    usermanager: state.conf.usermanager
  };
}

export default connect(mapStateToProps)(LoginPage);
