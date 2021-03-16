import React, { Children } from "react";
import { Button } from "react-bootstrap";

class Profile extends React.Component {
  render() {
    console.log(this.props.children);
    return (
      <div className="p-3">
        <div className="d-block d-md-flex justify-content-between p-3 bg--C4C4C4">
          <div id="profile-image">
            <img src="https://i.pravatar.cc/250?img=68" alt="" />
          </div>
          <div id="biodata" className="flex-grow-1 mx-5">
            <h4>Hacktiv8 Meetup</h4>
            <dl className="row">
              <dt className="col-sm-2">Location</dt>
              <dd className="col-sm-10">Jakarta, Indonesia</dd>
              <dt className="col-sm-2">Members</dt>
              <dd className="col-sm-10">1,078</dd>
              <dt className="col-sm-2">Organizers</dt>
              <dd className="col-sm-10">Adhy Wiranata</dd>
            </dl>
            <Button variant="secondary" className="px-5 rounded-0" size="lg">
              Join Us
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
