import React from 'react'
import CharacterListItem from './CharacterListItem';

const CharacterList = (props) => {

	const charList = props.charList.map((character, index) => {
		return <CharacterListItem character={character} key={index} />
	});

	return (
		<div className="CharacterList">
			<h1>Page CharacterList</h1>
			{charList}
		</div>
	)
}

export default CharacterList
