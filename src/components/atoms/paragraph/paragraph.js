import React from "react";

class Paragraph extends React.Component {
  render() {
    const { className, children } = this.props;
    return <p className={className}>{children}</p>;
  }
}

export default Paragraph;
