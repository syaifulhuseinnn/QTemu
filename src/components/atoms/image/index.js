import React from "react";
import classnames from "classnames";

class ProfileImage extends React.Component {
  render() {
    const { src, className } = this.props;
    return (
      <div>
        <img src={src} className={classnames("img-fluid", className)} alt="" />
      </div>
    );
  }
}

ProfileImage.defaultProps = {
  className: "",
  src: "https://via.placeholder.com/210"
};

export default ProfileImage;
