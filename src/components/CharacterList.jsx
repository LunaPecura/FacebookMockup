// ONE OF THE MAIN PAGES
// CHILD OF MainContent COMPONENT
// displays a list of all characters in the Southpark universe
// each character gets its own CharacterListItem component

import React from "react";
import CharacterListItem from "./CharacterListItem";

const CharacterList = (props) => {
  const charList = props.charList.map((character, index) => {
    return (
      <CharacterListItem
        char={character}
        updateChar={props.updateChar}
        key={index}
      />
    );
  });

  return <div className="CharacterList">{charList}</div>;
};

export default CharacterList;
