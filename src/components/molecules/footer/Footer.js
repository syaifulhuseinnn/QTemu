import React from "react";
import Heading from "../../atoms/heading";
import Wrapper from "../../atoms/wrapper";

class Footer extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <footer className="px-md-5 pt-md-4">
        <Wrapper className="px-3">
          <Wrapper className="border-top border-secondary">
            <Heading className="h5 text-center py-4">{text}</Heading>
          </Wrapper>
        </Wrapper>
      </footer>
    );
  }
}

export default Footer;
