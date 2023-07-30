import React from "react";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";
import MainContent from "./MainContent";

import './diana.css';


const MainContainer = (props) => {
	return (
        <div className="MainContainer">
			<SideBarLeft />
			<MainContent charList={props.charList} />
			<SideBarRight />
		</div>
	);
};

export default MainContainer;
