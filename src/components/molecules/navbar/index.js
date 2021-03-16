import React from "react";
import Nav from "../../atoms/nav";
import NavbarBrand from "../../atoms/nav_brand";
import NavbarTogglerIcon from "../../atoms/navbar_toggler";
import Button from "../../atoms/button";
import NavbarCollapse from "../../atoms/navbar_collapse";
import NavbarNav from "../../atoms/navbar_nav";
import NavLink from "../../atoms/nav_link";

class Navbar extends React.Component {
  render() {
    return (
      <Nav>
        <NavbarBrand className={this.props.brandClass}>
          {this.props.brandName}
        </NavbarBrand>
        <Button
          className="navbar-toggler collapsed"
          ariaControls="basic-navbar-nav"
          ariaLabel="Toggle navigation"
          type="button"
        >
          <NavbarTogglerIcon />
        </Button>
        <NavbarCollapse
          className={this.props.navbarCollapseClass}
          id="basic-navbar-nav"
        >
          <NavbarNav>
            {this.props.navLink.slice(0, 2).map((item) => (
              <NavLink
                className={this.props.navLinkClass}
                href={item.href}
                dataRbEventKey={item.eventKey}
              >
                {item.link}
              </NavLink>
            ))}
          </NavbarNav>
        </NavbarCollapse>
      </Nav>
    );
  }
}

export default Navbar;
