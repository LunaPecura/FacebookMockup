import React from 'react';

const Story = (props) => {
	return (
		<div className="Story" style={{backgroundImage: `url(${props.bgImg})`}}>
			<img className="storyImg" src={props.imgSrc} alt="" />
			<p>{props.text}</p>
		</div>
	)
}

export default Story
