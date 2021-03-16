import React from "react";
import Nav from "../../atoms/nav/Nav";
import NavbarBrand from "../../atoms/nav_brand/NavbarBrand";
import NavbarCollapse from "../../atoms/navbar_collapse/NavbarCollapse";
import NavbarNav from "../../atoms/navbar_nav/NavbarNav";
import NavLink from "../../atoms/nav_link/NavLink";
import Button from "../../atoms/button";

class Header extends React.Component {
  state = {
    collapse: false
  };

  showNavbarCollapse = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  render() {
    const { brandName } = this.props;
    return (
      <Nav className="navbar-expand-lg navbar-light bg-grey-1">
        <NavbarBrand
          href="#brand"
          className="text-decoration-none text-white app-title"
        >
          {brandName}
        </NavbarBrand>
        <Button
          className={
            this.state.collapse ? "navbar-toggler" : "navbar-toggler collapsed"
          }
          type="button"
          dataToggle="collapse"
          dataTarget="#navbarNavAltMarkup"
          ariaControls="navbarNavAltMarkup"
          ariaExpanded="false"
          ariaLabel="Toggle navigation"
          onClick={this.showNavbarCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <NavbarCollapse
          className={
            this.state.collapse
              ? "justify-content-between show"
              : "justify-content-between"
          }
          id="navbarNavAltMarkup"
        >
          <NavbarNav>
            <NavLink className="text-decoration-none text-white mx-md-4">
              Create Meetup
            </NavLink>
            <NavLink className="text-decoration-none text-white mx-md-4">
              Explore
            </NavLink>
          </NavbarNav>
          <NavbarNav>
            <NavLink className="text-decoration-none text-white">Login</NavLink>
          </NavbarNav>
        </NavbarCollapse>
      </Nav>
    );
  }
}

export default Header;
