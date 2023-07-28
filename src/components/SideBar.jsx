import React from "react";
import friends from "./images/friends.png";
import livevideo from "./images/livevideo.png";
import watch from "./images/watch.png";
import marketplace from "./images/marketplace.png";
import events from "./images/events.png";
import group from "./images/group.png";
import pages from "./images/pages.png";

const SideBar = () => {
  return (
    <>
      <div className="leftcontainer">
        <div className="links">
          <a href="#">
            <img src={friends} alt="" />
            Friends
          </a>
          <a href="#">
            <img src={livevideo} alt="" />
            Live
          </a>
          <a href="#">
            <img src={watch} alt="" />
            Watch videos
          </a>
          <a href="#">
            <img src={marketplace} alt="" />
            Marketplace
          </a>
          <a href="#">
            <img src={events} alt="" />
            Events
          </a>
          <a href="#">
            <img src={group} alt="" />
            Groups
          </a>
          <a href="#">
            <img src={pages} alt="" />
            Pages
          </a>
          <a href="#"> See More</a>
        </div>
      </div>
    </>
  );
};

export default SideBar;
