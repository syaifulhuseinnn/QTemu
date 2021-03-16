import React from "react";
import Footer from "../../molecules/footer/Footer";
import Header from "../../molecules/header/Header";

class QTemuTemplate extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header brandName="QTemu" />
        {children}
        <Footer text="Copyright Hacktiv8 2018" />
      </>
    );
  }
}

export default QTemuTemplate;
