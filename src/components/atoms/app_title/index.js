import React from "react";
import classnames from "classnames";
import "./style.css";

class AppTitle extends React.Component {
  render() {
    return (
      <span className={classnames("title", this.props.className)}>
        {this.props.children}
      </span>
    );
  }
}

AppTitle.defaultProps = {
  className: ""
};

export default AppTitle;
