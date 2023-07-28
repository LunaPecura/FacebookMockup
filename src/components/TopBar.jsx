import React from "react";
import "./diana.css";
import fblogo from "./images/fblogo.jpg";
import notification from "./images/notification.png";
import search from "./images/search.png";
import cartman from "./images/cartman.png";
import inbox from "./images/inbox.png";
import video from "./images/video.png";
// import friends from "./images/friends.png";
// import livevideo from "./images/livevideo.png";
// import watch from "./images/watch.png";
// import marketplace from "./images/marketplace.png";
// import events from "./images/events.png";
// import group from "./images/group.png";
// import pages from "./images/pages.png";
// import upload from "./images/upload.png";
// import southpark from "./images/southpark.jpg";

const TopBar = () => {
  return (
    <>
      <div>
        <nav>
          <div className="navBar-left">
            <img src={fblogo} alt="" className="logo" />
            <div className="searchBox">
              <img src={search} alt="" />
              <input type="text" placeholder="Seacrch..."></input>
            </div>
            <div className="navUserImg">
              <img src={cartman} alt="" />
            </div>
            <ul>
              <li>
                <img src={notification} alt="" />
              </li>
              <li>
                <img src={inbox} alt="" />
              </li>
              <li>
                <img src={video} alt="" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default TopBar;
