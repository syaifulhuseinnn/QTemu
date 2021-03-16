import React from "react";

class InvitationDetails extends React.Component {
  render() {
    return <dl className="row">{this.props.children}</dl>;
  }
}

export default InvitationDetails;
