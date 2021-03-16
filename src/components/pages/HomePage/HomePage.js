import React from "react";
import QTemuTemplate from "../../templates/QTemuTemplate/QTemuTemplate";
import InvitationCard from "../../molecules/invitation-card";
import MeetupLetter from "../../molecules/meetup-letter/MeetupLetter";
import AboutMeetup from "../../molecules/about-meetup/AboutMeetup";
import Members from "../../molecules/members/Members";
import PastMeetup from "../../organisms/past-meetup/PastMeetup";
import Heading from "../../atoms/heading";
import Wrapper from "../../atoms/wrapper";

class HomePage extends React.Component {
  render() {
    return (
      <QTemuTemplate>
        <InvitationCard
          title="Hacktiv8 Meetup"
          details={[
            { terms: "Location", description: "Jakarta, Indonesia" },
            { terms: "Members", description: "1,078" },
            { terms: "Organizers", description: "Adhy Wiranata" }
          ]}
        />
        <Heading className="h3 px-3">Next Meetup</Heading>
        <MeetupLetter
          heading="Next Meetup"
          title="Awesome meetup & event"
          date="25 Januari 2019"
        >
          Hello, JavaScript & Node.js Ninjas!
          <br />
          Get ready for our monthly JakartaJS! This will be our fifth meetup of
          2018!
          <br />
          The meetup format will contain some short stories and technical talks.
          <br />
          If you have a short announcement you'd like to share with the
          audience, you may do so during open mic announcements.
          <br />
          <br />
          Remember to bring a photo ID to get through building security.
          <br />
          -----
          <br />
          See you there!
          <br />
          Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
        </MeetupLetter>
        <Heading className="h3 px-3">About Meetup</Heading>
        <AboutMeetup>
          Come and meet other developers interested in JavaScript and it's
          library in the Greater Jakarta area.
          <br />
          Twitter: @JakartaJS and we use the hashtag #jakartajs
        </AboutMeetup>
        <Wrapper className="d-flex justify-content-between">
          <Heading className="h3 px-3">Members</Heading>
          <Heading className="h5 align-self-end mx-md-5 px-3">See all</Heading>
        </Wrapper>
        <Members
          heading="Members"
          details={[{ terms: "Adhy Wiranata", description: "4 others" }]}
        />
        <Wrapper className="d-flex justify-content-between">
          <Heading className="h3 px-3">Past Meetup</Heading>
          <Heading className="h5 align-self-end mx-md-5 px-3">See all</Heading>
        </Wrapper>
        <PastMeetup
          meetups={[
            {
              date: "27 November 2017",
              title: "#39 JakartaJS April Meetup with kumparan",
              went: "139"
            },
            {
              date: "27 October 2017",
              title: "#38 JakartaJS April Meetup with BliBli",
              went: "113"
            },
            {
              date: "27 November 2017",
              title: "#37 JakartaJS April Meetup with Hacktiv8",
              went: "110"
            }
          ]}
        />
      </QTemuTemplate>
    );
  }
}

export default HomePage;
