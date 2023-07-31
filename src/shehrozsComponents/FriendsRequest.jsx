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
          <FriendsReqProfile
            name="Michael Scott"
            src={
              "https://pilbox.themuse.com/image.jpg?filter=antialias&h=700&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F6637.jpg&w=700"
            }
          />
          <FriendsReqProfile
            name="Oscar Martinez"
            src={
              "https://img.nbc.com/sites/nbcunbc/files/metaverse_assets/1/0/6/3/4/1/oscar-500x500.jpg"
            }
          />
          <FriendsReqProfile
            name="Angela Martin"
            src={
              "https://upload.wikimedia.org/wikipedia/en/0/0b/Angela_Martin.jpg"
            }
          />
          <FriendsReqProfile
            name="Kevin Malone"
            src={
              "data:image/jpeg;base64,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"
            }
          />
          <FriendsReqProfile
            name="Ryan Howard"
            src={
              "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/streams/2012/June/120627/434210-120627-ent-bjnovak-vmed.jpg"
            }
          />
        </div>
        <SideBarRight />
      </div>
    </>
  );
}

export default FriendsRequest;
