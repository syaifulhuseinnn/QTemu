import React from "react";
import { Button } from "react-bootstrap";

class PastMeetup extends React.Component {
  render() {
    return (
      <div className="p-3">
        <div className="d-flex justify-content-between">
          <h3>Past Meetups</h3>
          <h4 className="mx-md-5">See all</h4>
        </div>

        <div className="row justify-content-between px-md-5">
          <div className="col-12 col-md-3">
            <div className="p-3 bg--C4C4C4">
              <div className="border-bottom border-secondary">
                <h6>27 November 2017</h6>
              </div>
              <div className="py-3">
                <h6>#39 JakartaJS April Meetup with kumparan</h6>
                <h6>
                  <span className="fw-bold">139</span> went
                </h6>
              </div>
              <Button variant="secondary" className="rounded-0" size="lg">
                View
              </Button>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="p-3 bg--C4C4C4">
              <div className="border-bottom border-secondary">
                <h6>27 October 2017</h6>
              </div>
              <div className="py-3">
                <h6>#38 JakartaJS April Meetup with BliBli</h6>
                <h6>
                  <span className="fw-bold">113</span> went
                </h6>
              </div>
              <Button variant="secondary" className="rounded-0" size="lg">
                View
              </Button>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="p-3 bg--C4C4C4">
              <div className="border-bottom border-secondary">
                <h6>27 November 2017</h6>
              </div>
              <div className="py-3">
                <h6>#37 JakartaJS April Meetup with Hacktiv8</h6>
                <h6>
                  <span className="fw-bold">110</span> went
                </h6>
              </div>
              <Button variant="secondary" className="rounded-0" size="lg">
                View
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PastMeetup;
