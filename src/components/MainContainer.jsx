import React from "react";
import SideBar from "./SideBar";
import Page from "./Page";
import upload from "./images/upload.png";
const MainContainer = (props) => {
  return (
    <>
      <div className="MainContainer">
        <SideBar />
        <div className="maincontainer">
          <div className="maincont">
            <div className="story">
              <img src={upload} alt="" />
              <p> Post Story</p>
            </div>

            <div className="story">
              <img src={upload} alt="" />
              <p> Post Story</p>
            </div>

            <div className="story">
              <img src={upload} alt="" />
              <p> Post Story</p>
            </div>

            <div className="story">
              <img src={upload} alt="" />
              <p> Post Story</p>
            </div>
            <div className="story">
              <img src={upload} alt="" />
              <p> Post Story</p>
            </div>
          </div>
          <div className="profile-sec">
            <Page char={props.char} onClickFn={props.onClickFn} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
