import React from "react";

class InvitationTitle extends React.Component {
  render() {
    return <h4 className={this.props.className}>{this.props.children}</h4>;
  }
}

InvitationTitle.defaultProps = {
  className: ""
};

export default InvitationTitle;
