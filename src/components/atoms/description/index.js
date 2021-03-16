import React from "react";
import classnames from "classnames";

class Description extends React.Component {
  render() {
    const { className, children } = this.props;
    return <dd className={classnames(className)}>{children}</dd>;
  }
}

Description.defaultProps = {
  className: ""
};

export default Description;
