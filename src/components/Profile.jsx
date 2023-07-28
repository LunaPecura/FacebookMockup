import React from 'react'

const Profile = (props) => {
	return (

		<div className="Profile">
			<h2>Profile</h2>
			<ul>
				<li>ID: {props.char.id}</li>
				<li>Age: {props.char.age}</li>
				<li>Sex: {props.char.sex}</li>
				<li>Hair color: {props.char.hair_color}</li>
				<li>Occupation: {props.char.occupation}</li>
				<li>Grade: {props.char.grade}</li>
				<li>Religion: {props.char.religion}</li> 
				<li>Family: (to be continued...)</li>
			</ul>
		</div>
	)
}

export default Profile
