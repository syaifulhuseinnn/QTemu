import React from "react";
import Wrapper from "../../atoms/wrapper";
import Heading from "../../atoms/heading";
import Button from "../../atoms/button";

class Card extends React.Component {
  render() {
    const { date, title, went } = this.props;
    return (
      <Wrapper className="p-3 bg-secondary crd">
        <Wrapper className="border-bottom border-secondary">
          <Heading className="h5">{date}</Heading>
        </Wrapper>
        <Wrapper className="py-3">
          <Heading className="h5">{title}</Heading>
          <Heading className="h5 mt-4">
            <span className="fw-bold">{went}</span>{" "}
            <span className="text-secondary">went</span>
          </Heading>
        </Wrapper>
        <Button className="btn btn-grey-1 text-light px-4 rounded-0 btn-lg">
          View
        </Button>
      </Wrapper>
    );
  }
}

export default Card;
