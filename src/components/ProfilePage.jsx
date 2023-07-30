import React from 'react'
// import Profile from './Profile'

const ProfilePage = (props) => {

	return (
		<div className="ProfilePage">

			<h1>Page ProfilePage</h1>
			{/* <h1>Name: {props.char.name}</h1> */}
			{/* <h2>Name: {props.char.name}</h2> */}
			<div className="content">
				<div className="profilePic">
					<h3>Profile Pic</h3>
				</div>
				{/* <h2>Name: {props.char.name}</h2> */}
				{/* <Profile char={props.char} /> */}
			</div>
			{/* <button onClick={props.onClickFn}>Change Character</button> */}
		</div>
	)
}

export default ProfilePage
