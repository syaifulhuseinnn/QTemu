import React from "react";
import Card from "../../molecules/card/Card";
import Wrapper from "../../atoms/wrapper";

class PastMeetup extends React.Component {
  render() {
    const { meetups } = this.props;
    return (
      <Wrapper className="p-3">
        <Wrapper className="d-block d-md-flex justify-content-between px-md-5">
          {meetups.map((meetup) => (
            <Card date={meetup.date} title={meetup.title} went={meetup.went} />
          ))}
        </Wrapper>
      </Wrapper>
    );
  }
}

export default PastMeetup;
