import React from "react";
import classnames from "classnames";

class NavbarTogglerIcon extends React.Component {
  render() {
    return (
      <span
        className={classnames("navbar-toggler-icon", this.props.className)}
      ></span>
    );
  }
}

export default NavbarTogglerIcon;
