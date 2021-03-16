import React from "react";
import Wrapper from "../../atoms/wrapper";
import Paragraph from "../../atoms/paragraph/paragraph";

class AboutMeetup extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Wrapper className="p-3">
        <Wrapper className="px-md-5">
          <Paragraph className="lead fw-normal">{children}</Paragraph>
        </Wrapper>
      </Wrapper>
    );
  }
}

export default AboutMeetup;
