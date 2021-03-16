import React from "react";
import classnames from "classnames";

class NavbarNav extends React.Component {
  render() {
    const { className, children } = this.props;
    return (
      <div className={classnames("navbar-nav", className)}>{children}</div>
    );
  }
}

NavbarNav.defaultProps = {
  className: ""
};

export default NavbarNav;
