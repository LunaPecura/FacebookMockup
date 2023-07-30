import React from "react";
import { Link } from "react-router-dom";

function FriendsPage() {

	return (
		<div className="FriendsPage">
			<h1 className="friends-heading">Friends</h1>
			<div className="friend-btn-div">
				<Link to="/friends/request" className="friend-btn">
					Friends Request
				</Link>
				<Link to="/friends/suggestion" className="friend-btn">
					Suggestion
				</Link>
			</div>
        </div>
	);
}

export default FriendsPage;
