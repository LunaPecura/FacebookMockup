import React from "react";

function FriendsSuggProfile() {
  return (
    <>
      <div className="profile-div">
        {/* Profile Picture Section */}
        <div className="profile-pic-div">
          <img
            src="https://pilbox.themuse.com/image.jpg?filter=antialias&h=700&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F6637.jpg&w=700"
            alt=""
            className="profile-pic"
          />
        </div>
        {/* Profile Name and mutual friends and confirm and delete button goes here */}
        <div className="profile-info-div">
          <div className="profile-name-div">
            <div className="profile-name">Shehroze</div>
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
