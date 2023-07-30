
// CHILD OF CharListItem COMPONENT


import React from 'react'

const ShortProfile = (props) => {

	return (
		<div className="ShortProfile">
			<span>Age: {props.char.age} | </span>
			<span>Sex: {props.char.sex} | </span>
			<span>Hair color: {props.char.hair_color} | </span>
			<span>Occupation: {props.char.occupation} | </span>
			<span>Grade: {props.char.grade} | </span>
			<span>Religion: {props.char.religion} </span> 
		</div>
	)
}

export default ShortProfile
