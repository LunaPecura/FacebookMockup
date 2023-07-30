
// CHILD OF CharacterList COMPONENT; GRANDCHILD OF MainContent COMPONENT
// each list item displays the character's name and some biographical data

import React from 'react'
import ShortProfile from './ShortProfile'

const CharacterListItem = (props) => {

	const onClickFn = () => {
		props.updateChar(props.char.id)
	}

	return (

		<div className="CharacterListItem">
			<b>{props.char.name}</b>
			<ShortProfile char={props.char} />
			<button onClick={onClickFn}>Load Profile (SCROLL UP TO SEE)</button>
		</div>
	)
}

export default CharacterListItem
