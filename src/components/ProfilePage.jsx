import React from 'react'

const ProfilePage = (props) => {



	return (
		<div className="ProfilePage">

			<h1>Page ProfilePage</h1>
			<div className="content">
				<div className="profilePic"><h3>Profile Pic</h3></div>
				<div className="description">ID: </div>
				<h2>Name: {props.char.name}</h2>
			</div>

		</div>
	)
}

export default ProfilePage
