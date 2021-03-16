import React from "react";
import Wrapper from "../../atoms/wrapper";
import Heading from "../../atoms/heading";
import Paragraph from "../../atoms/paragraph/paragraph";

class MeetupLetter extends React.Component {
  render() {
    const { title, date, children } = this.props;
    return (
      <Wrapper className="p-3">
        <Wrapper className="px-md-5">
          <Wrapper className="bg-secondary p-4">
            <Heading className="h5">{title}</Heading>
            <Heading className="text-muted h5">{date}</Heading>
            <Paragraph className="lead fw-normal">{children}</Paragraph>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    );
  }
}

export default MeetupLetter;
