import React from 'react';
import SideBar from './SideBar';
import Page from './Page';


const MainContainer = (props) => {
	
	
	
	return (
		<div className="MainContainer">
			<SideBar />
			<Page char={props.char} onClickFn={props.onClickFn}/>
		</div>
	)
}

export default MainContainer
