import React from "react";
import classnames from "classnames";

class NavLink extends React.Component {
  render() {
    const { href, className, children } = this.props;
    return (
      <a href={href} className={classnames("nav-link", className)}>
        {children}
      </a>
    );
  }
}

NavLink.defaultProps = {
  href: "#",
  className: ""
};

export default NavLink;
