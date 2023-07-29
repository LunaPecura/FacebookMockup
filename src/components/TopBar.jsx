import React from "react";
import "./diana.css";
import fblogo from "./images/fblogo.jpg";
import notification from "./images/notification.png";
import cartman from "./images/cartman.png";
import inbox from "./images/inbox.png";
import video from "./images/video.png";
import TopBarItem from "./TopBarItem";
import SearchBox from "./SearchBox";


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
