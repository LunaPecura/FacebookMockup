import React from "react";
import TopBar from "../components/TopBar";
import SideBarLeft from "../components/SideBarLeft";
import SideBarRight from "../components/SideBarRight";
import { Link } from "react-router-dom";
import FriendsReqProfile from "./FriendsReqProfile";

function FriendsRequest() {
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
          <h3>Friend Requests</h3>
          <FriendsReqProfile />
        </div>
        <SideBarRight />
      </div>
    </>
  );
}

export default FriendsRequest;
