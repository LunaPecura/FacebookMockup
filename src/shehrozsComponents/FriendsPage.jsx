import React from "react";
import TopBar from "../components/TopBar";
import SideBarLeft from "../components/SideBarLeft";
import SideBarRight from "../components/SideBarRight";
// import CharacterList from "../components/CharacterList";
import { Link } from "react-router-dom";
import ShortProfile from "../components/ShortProfile";

function FriendsPage(props) {

	const allCharacters = props.charList.map( (character, index) => {
		return <ShortProfile char={character} key={index} />
	});

  return (
    <>
      <TopBar />
      <div className="sideBar-div">
        <SideBarLeft />
        <div className="mid-container-div">
          <h1 className="friends-heading">Friends</h1>
          <div className="friend-btn-div">
            <Link to="/friends/request" className="friend-btn">
              Friends Request
            </Link>
            <Link to="/friends/suggestion" className="friend-btn">
              Suggestion
            </Link>
          </div>
		  <div>{allCharacters}</div>
		  {/* <CharacterList charList={props.charList} updateChar={props.updateChar}/> */}
        </div>
        <SideBarRight />
      </div>
    </>
  );
}

export default FriendsPage;