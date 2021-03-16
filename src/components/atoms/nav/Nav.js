import React from "react";
import classnames from "classnames";

class Nav extends React.Component {
  render() {
    const { className, children } = this.props;
    return <nav className={classnames("navbar", className)}>{children}</nav>;
  }
}

Nav.defaultProps = {
  className: ""
};

export default Nav;
