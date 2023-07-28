import React from 'react'

const Page = (props) => {
	
	return (
		<div className="Page">
			<h1>Main Display (Character, Episode, etc)</h1>
			<h2>Name: {props.name}</h2>
			<button onClick={props.onClickFn}>Change Character</button>
		</div>
	)
}

export default Page
