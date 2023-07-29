import React from "react";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";

import './diana.css';
import upload from "./images/upload.png";
import cartman from './images/cartman.png';
import livevideo from './images/livevideo.png';
import photo from './images/photo.png';
import feeling from './images/feeling.png';
import kenny from './images/kenny.png';
import kely from './images/kely.png';
import stan from './images/stan.png';
import wendy from './images/wendy.png';

const MainContainer = (props) => {
	return (
        <div className="MainContainer">

			<SideBarLeft />

{/* -------------------------------------------------------------------------------- */}

          <div className="maincontainer">
            <div className='maincont'>
              <div className='story story1'>
                <img src={upload} alt="" />
                <p>Post Story</p>
              </div>

              <div className='story story2'>
                <img src={stan} alt="" />
                <p>Stan</p>
              </div>

              <div className='story story3'>
                <img src={kenny} alt="" />
                <p>Kenny</p>
              </div>

              <div className='story story4'>
                <img src={kely} alt="" />
                <p>Kely</p>
              </div>

              <div className='story story5'>
                <img src={wendy} alt="" />
                <p>Wendy</p>
              </div>
            </div>

            <div className="postContainer">
              <div className="userProfile">
                <img src={cartman} alt="" />
                <p>Cartman South Park</p>
                <span>Public</span>
              </div>

              <div className="inputContainer">
                <input type="text" placeholder='What is on your mind, Cartman?' />
                <div className='postLinks'>
                  <a href="#"><img src={livevideo} alt="" />Live Video</a>
                  <a href="#"><img src={photo} alt="" />Photo/Video</a>
                  <a href="#"><img src={feeling} alt="" />Feeling/Activity</a>
                </div>
              </div>
            </div>
          </div>

{/* -------------------------------------------------------------------------------- */}

			<SideBarRight />
		</div>
	);
};

export default MainContainer;
