import React from "react";
import upload from "./images/upload.png";
import './diana.css';
import fblogo from './images/fblogo.jpg';
import notification from './images/notification.png';
import search from './images/search.png';
import cartman from './images/cartman.png';
import inbox from './images/inbox.png';
import video from './images/video.png';
import friends from './images/friends.png';
import livevideo from './images/livevideo.png';
import watch from './images/watch.png';
import marketplace from './images/marketplace.png';
import events from './images/events.png';
import group from './images/group.png';
import pages from './images/pages.png';
import southpark from './images/southpark.jpg';
import photo from './images/photo.png';
import feeling from './images/feeling.png';
import kenny from './images/kenny.png';
import kely from './images/kely.png';
import stan from './images/stan.png';
import wendy from './images/wendy.png';
import location from './images/location.png';

const MainContainer = (props) => {
	return (
		<div>

        <div className="container">
          <div className="leftcontainer">
            <div className="links">
              <a href="#"><img src={friends} alt="" />Friends</a>
              <a href="#"><img src={livevideo} alt="" />Live</a>
              <a href="#"><img src={watch} alt="" />Watch videos</a>
              <a href="#"><img src={marketplace} alt="" />Marketplace</a>
              <a href="#"><img src={events} alt="" />Events</a>
              <a href="#"><img src={group} alt="" />Groups</a>
              <a href="#"><img src={location} alt="" />Locations</a>
              <a href="#"><img src={pages} alt="" />Pages</a>
              <a href="#">See More</a>
            </div>
          </div>

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

          <div className="rightcontainer">
            <div className='eventTitle'>
              <h3>Events</h3>
              <a href="#">See all</a>
            </div>

            <div className='event'>
              <div className="leftEve">
                <h3>28</h3>
                <span>July</span>
              </div>
              <div className="rightEve">
                <h3>South Park</h3>
                <p>Welcome to the South Park event</p>
                <a href='#'>More Info</a>
              </div>
            </div>

            <div className='event'>
              <div className="leftEve">
                <h3>12</h3>
                <span>August</span>
              </div>
              <div className="rightEve">
                <h3>South Park</h3>
                <p>Welcome to the South Park event</p>
                <a href='#'>More Info</a>
              </div>
            </div>

            <div>
              <img src={southpark} alt="" className='southparkImg' />
            </div>
          </div>
        </div>
      </div>

  );
};

export default MainContainer;
