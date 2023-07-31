import React from "react";

function FriendsSuggProfile(props) {
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
          </div>
          <div className="profile-btn-div">
            <button className="confirm-btn">Add Friend</button>
            <button className="delete-btn">Remove</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FriendsSuggProfile;
