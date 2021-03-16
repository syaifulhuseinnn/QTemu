import React from "react";
import classnames from "classnames";

class Heading extends React.Component {
  render() {
    const { className, children } = this.props;
    return <h1 className={classnames(className)}>{children}</h1>;
  }
}

Heading.defaultProps = {
  className: ""
};

export default Heading;
