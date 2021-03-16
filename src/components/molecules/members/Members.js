import React from "react";
import Wrapper from "../../atoms/wrapper";
import Heading from "../../atoms/heading";
import Image from "../../atoms/image";
import DescriptionList from "../../atoms/description_list";
import Terms from "../../atoms/terms";
import Description from "../../atoms/description";

class Members extends React.Component {
  render() {
    const { details } = this.props;
    return (
      <Wrapper className="p-3">
        <Wrapper className="px-md-5">
          <Wrapper className="d-flex justify-content-between bg-secondary p-4">
            <Wrapper>
              <Image
                src="https://via.placeholder.com/75/828282"
                className="rounded-circle"
              />
            </Wrapper>
            <Wrapper className="flex-grow-1 align-self-center mx-4">
              <Heading className="h6">Organizers</Heading>
              <DescriptionList>
                {details.map((detail) => (
                  <>
                    <Terms className="col-sm-2">{detail.terms}</Terms>
                    <Description className="col-sm-10">
                      {detail.description}
                    </Description>
                  </>
                ))}
              </DescriptionList>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    );
  }
}

export default Members;
