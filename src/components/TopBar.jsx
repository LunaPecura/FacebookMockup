
// DIRECT CHILD OF ROOT COMPONENT 'APP' ***THICK BLUE BORDER***
// TopBar contains the logo, the searchbar, and icons (notification bell etc.)
// TopBar's children (except for the searchbar) are TopBarItem components
// The searchbar gets its own component SearchBox

import React from "react";
import TopBarItem from "./TopBarItem";
import SearchBox from "./SearchBox";

import fblogo from "./images/fblogo.jpg";
import notification from "./images/notification.png";
import cartman from "./images/cartman.png";
import inbox from "./images/inbox.png";
import video from "./images/video.png";


const TopBar = () => {
	return (
		<div className="TopBar">
			<TopBarItem imgSrc={fblogo} className="logo" />
            <SearchBox />
			<TopBarItem imgSrc={cartman} className="TopBarItem" />
			<TopBarItem imgSrc={notification} className="TopBarItem" />
			<TopBarItem imgSrc={inbox} className="TopBarItem" />
			<TopBarItem imgSrc={video} className="TopBarItem" />
		</div>
	);
};

export default TopBar;
