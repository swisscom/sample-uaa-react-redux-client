import React from "react";
import { connect } from "react-redux";
import { loadDataStart, loadDataSuccess } from "../actions";
import { loadData } from "../utils/api";

class MainPage extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadDataStart());
    loadData().then(result => {
      this.props.dispatch(loadDataSuccess(result));
    });
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.title}>
          <h3>Welcome</h3>
          <p>This is where the backend data will be displayed.</p>
        </div>
      </div>
    );
  }
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    flex: "1 0 auto"
  },
  list: {
    listStyle: "none"
  },
  li: {
    display: "flex"
  }
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(MainPage);
