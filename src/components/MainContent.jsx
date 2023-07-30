import React from 'react'
import DefaultContent from './DefaultContent';
import CharacterList from './CharacterList';


const MainContent = (props) => {

	return (
		<div className="MainContent">
			<DefaultContent />
			<CharacterList charList={props.charList} />
		</div>
	)
}

export default MainContent
