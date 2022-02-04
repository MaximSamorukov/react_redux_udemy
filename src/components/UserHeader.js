import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {

  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <div className="header">{`${this.props.user.name}`}</div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const user = state.users.find((item) => item.id === props.userId);
  return {
    user,
  }
}

export default connect(mapStateToProps)(UserHeader);