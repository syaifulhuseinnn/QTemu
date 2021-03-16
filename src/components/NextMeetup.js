import React from "react";

class NextMeetup extends React.Component {
  render() {
    return (
      <div className="p-3">
        <h3>Next Meetup</h3>
        <div className="px-md-5">
          <div className="bg--C4C4C4 p-4">
            <h5>Awesome meetup and event</h5>
            <h5 className="text-muted">25 Januari 2019</h5>
            <p className="lead fw-normal">
              Hello, JavaScript & Node.js Ninjas!
              <br />
              Get ready for our monthly JakartaJS! This will be our fifth meetup
              of 2018!
              <br />
              The meetup format will contain some short stories and technical
              talks.
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
              Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS
              Organizers
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NextMeetup;
