import React from 'react'

const Page = (props) => {
	
	return (
		<div className="Page">
			<h1>Main Display (Character, Episode, etc)</h1>
			<h2>Name: {props.char.name}</h2>
			<div className="content">
				<div className="profilePic">
					<h2>Profile Pic - where to find? Not provided by API.</h2>
				</div>
				<div className="description">
					ID: {props.char.id}
				</div>
			</div>
			<button onClick={props.onClickFn}>Change Character</button>
		</div>
	)
}

export default Page
