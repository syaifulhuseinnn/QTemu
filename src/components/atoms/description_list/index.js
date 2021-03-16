import React from "react";
import classnames from "classnames";

class DescriptionList extends React.Component {
  render() {
    const { className, children } = this.props;
    return <dl className={classnames("row", className)}>{children}</dl>;
  }
}

DescriptionList.defaultProps = {
  className: ""
};

export default DescriptionList;
