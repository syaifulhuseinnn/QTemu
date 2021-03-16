import React from "react";

class Members extends React.Component {
  render() {
    return (
      <div className="p-3">
        <div className="d-flex justify-content-between">
          <h3>Members</h3>
          <h4 className="mx-md-5">See all</h4>
        </div>
        <div className="px-md-5">
          <div className="d-flex justify-content-between bg--C4C4C4 p-4">
            <div>
              <img
                src="https://dummyimage.com/75x75/000/828282"
                className="rounded-circle"
                alt=""
              />
            </div>
            <div className="flex-grow-1 align-self-center mx-4">
              <h6>Organizers</h6>
              <dl className="row">
                <dt className="col-sm-2">Adhy Wiranata</dt>
                <dd className="col-sm-10">4 others.</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Members;
