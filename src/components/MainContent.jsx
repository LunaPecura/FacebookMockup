
// CHILD OF THE MainContainer COMPONENT
// contains the content linked to from the component SideBarLeft
// each child component should ideally be its own page
// currently they are all being displayed simultaneously, from top to bottom

// DefaultContent: default upon page load; shows posts (not yet) and input box to create post
// CharacterList: page displaying all characters, maybe linked to from the 'Friends' link?
// ProfilePage: page displaying whatever character has been clicked on from the CharacterList


import React from 'react'
import DefaultContent from './DefaultContent';
import CharacterList from './CharacterList';
import ProfilePage from './ProfilePage';



const MainContent = (props) => {

	return (
		<div className="MainContent">
			<DefaultContent />
			<ProfilePage char={props.char} />
			<CharacterList charList={props.charList} updateChar={props.updateChar}/>
			
		</div>
	)
}

export default MainContent
