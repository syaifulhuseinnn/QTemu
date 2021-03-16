import React from "react";
import classnames from "classnames";

class NavbarBrand extends React.Component {
  render() {
    const { className, href, children } = this.props;
    return (
      <a className={classnames("navbar-brand", className)} href={href}>
        {children}
      </a>
    );
  }
}

NavbarBrand.defaultProps = {
  className: "",
  href: "#"
};

export default NavbarBrand;
