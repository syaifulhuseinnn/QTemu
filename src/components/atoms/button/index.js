import React from "react";

class Button extends React.Component {
  render() {
    const {
      className,
      children,
      ariaControls,
      ariaLabel,
      type,
      dataToggle,
      dataTarget,
      ariaExpanded,
      onClick
    } = this.props;
    return (
      <button
        className={className}
        aria-controls={ariaControls}
        aria-label={ariaLabel}
        aria-expanded={ariaExpanded}
        type={type}
        data-toggle={dataToggle}
        data-target={dataTarget}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  className: "",
  type: "button",
  onClick: () => {},
  disabled: false
};

export default Button;
