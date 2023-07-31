import React from "react";

function FriendsReqProfile(props) {
  return (
    <>
      <div className="profile-div">
        {/* Profile Picture Section */}
        <div className="profile-pic-div">
          <img src={props.src} alt="" className="profile-pic" />
        </div>
        {/* Profile Name and mutual friends and confirm and delete button goes here */}
        <div className="profile-info-div">
          <div className="profile-name-div">
            <div className="profile-name">{props.name}</div>
            <div className="request-duration">
              <p>25w</p>
            </div>
          </div>
          <div className="profile-btn-div">
            <button className="confirm-btn">Confirm</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FriendsReqProfile;
