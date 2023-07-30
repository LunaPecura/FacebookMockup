import React from "react";
import TopBar from "../components/TopBar";
import SideBarLeft from "../components/SideBarLeft";
import SideBarRight from "../components/SideBarRight";
import { Link } from "react-router-dom";
function FriendSuggestion() {
  return (
    <>
      <TopBar />
      <div className="sideBar-div">
        <SideBarLeft />
        <div className="mid-container-div">
          <h1 className="friends-heading">Friends</h1>
          <div className="friend-btn-div">
            <Link to="/friends/request" className="friend-btn">
              Friends Request
            </Link>
            <Link to="/friends/suggestion" className="friend-btn">
              Suggestion
            </Link>
          </div>
          <h3>People You May Know</h3>
        </div>
        <SideBarRight />
      </div>
    </>
  );
}

export default FriendSuggestion;
