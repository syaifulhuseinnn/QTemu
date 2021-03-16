import React from "react";
import classnames from "classnames";

class Terms extends React.Component {
  render() {
    const { className, children } = this.props;
    return <dt className={classnames(className)}>{children}</dt>;
  }
}

Terms.defaultProps = {
  className: ""
};

export default Terms;
