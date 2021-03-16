import React from "react";
import Wrapper from "../../atoms/wrapper";
import Heading from "../../atoms/heading";
import Image from "../../atoms/image";
import DescriptionList from "../../atoms/description_list";
import Terms from "../../atoms/terms";
import Description from "../../atoms/description";
import Button from "../../atoms/button";

class InvitationCard extends React.Component {
  render() {
    const { title, details, children } = this.props;
    return (
      <Wrapper className="p-3">
        <Wrapper className="d-block d-sm-flex justify-content-between p-3 bg-secondary">
          <Image src="https://via.placeholder.com/210/BDBDBD" />
          <Wrapper className="flex-grow-1 my-4 my-sm-0 mx-sm-5">
            <Heading className="h4 fw-bold">{title}</Heading>
            <DescriptionList className="py-2">
              {details.map((detail, index) => (
                <>
                  <Terms className="fw-normal col-4 col-sm-3">
                    {detail.terms}
                  </Terms>
                  <Description className="col-8 col-sm-9">
                    {detail.description}
                  </Description>
                </>
              ))}
            </DescriptionList>
            <Button className="btn btn-lg btn-secondary px-5 rounded-0">
              Join Us
            </Button>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    );
  }
}

export default InvitationCard;
