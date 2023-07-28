import React from 'react'
import Profile from './Profile';

const Page = (props) => {
	
	return (
		<div className="Page">
			<h1>Main Display (Character, Episode, etc)</h1>
			<h2>Name: {props.char.name}</h2>
			<div className="content">
				<div className="profilePic">
					<h2>Profile Pic - where to find? Not provided by API.</h2>
				</div>
				<Profile char={props.char} />
			</div>
			<button onClick={props.onClickFn}>Change Character</button>
		</div>
	)
}

export default Page
