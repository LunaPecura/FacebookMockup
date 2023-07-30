
// DIRECT CHILD OF ROOT COMPONENT 'APP' ***THICK GREEN BORDER***
// MainContainer encompasses everything that is not contained in the TopBar component
// MainContainer is broken up into three child components:
// 		SideBarLeft (contains links)
//		SideBarRight (contains events)
//		MainContent



import React from "react";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";
import MainContent from "./MainContent";


const MainContainer = (props) => {
	return (
        <div className="MainContainer">
			<SideBarLeft />
			<MainContent charList={props.charList} char={props.char} updateChar={props.updateChar} />
			<SideBarRight />
		</div>
	);
};

export default MainContainer;
