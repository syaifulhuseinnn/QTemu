import React from "react";

class Wrapper extends React.Component {
  render() {
    const { className, children } = this.props;
    return <div className={className}>{children}</div>;
  }
}

Wrapper.defaultProps = {
  className: ""
};

export default Wrapper;
