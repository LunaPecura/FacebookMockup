import React from 'react'
import ShortProfile from './ShortProfile'

const CharacterListItem = (props) => {
	return (

		<div className="CharacterListItem">
			<b>{props.character.name}</b>
			<ShortProfile char={props.character} />
		</div>
	)
}

export default CharacterListItem
