
// CHILD OF DefaultContent COMPONENT


import React from 'react'
import livevideo from './images/livevideo.png';
import photo from './images/photo.png';
import feeling from './images/feeling.png';
import cartman from './images/cartman.png';

const CreatePost = () => {
	return (

		<div className="CreatePost">

			<div className="userProfile">
				<img src={cartman} alt="" />
				<div>Cartman South Park</div>
				{/* <span>Public</span> */}
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
	)
}

export default CreatePost
