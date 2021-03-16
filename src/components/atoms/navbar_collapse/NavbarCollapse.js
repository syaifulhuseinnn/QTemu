import React from "react";
import classnames from "classnames";

class NavbarCollapse extends React.Component {
  render() {
    const { className, children, id } = this.props;
    return (
      <div
        className={classnames("navbar-collapse collapse", className)}
        id={id}
      >
        {children}
      </div>
    );
  }
}

NavbarCollapse.defaultProps = {
  className: "",
  id: ""
};

export default NavbarCollapse;
