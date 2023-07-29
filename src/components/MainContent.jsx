import React from 'react'
import Story from './Story';
import CreatePost from './CreatePost';

import upload from "./images/upload.png";
import cartman from './images/cartman.png';
import kenny from './images/kenny.png';
import kely from './images/kely.png';
import stan from './images/stan.png';
import wendy from './images/wendy.png';

const MainContent = () => {


	return (
		<div className="MainContent">
			<div className="mainContentFriends">
				<Story imgSrc={upload} text="Post Story" bgImg={cartman} />
				<Story imgSrc={stan} text="Stan" bgImg={stan} />
				<Story imgSrc={kenny} text="Kenny" bgImg={kenny} />
				<Story imgSrc={kely} text="Kyle" bgImg={kely} />
				<Story imgSrc={wendy} text="Wendy" bgImg={wendy} />
			</div>

			<CreatePost />
			
		</div>
	)
}

export default MainContent
