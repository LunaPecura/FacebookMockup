import React from 'react'

const TopBarItem = (props) => {

	return (
		<div> {/* attn: className is in img tag instead of div tag for CSS reasons*/}
			<img src={props.imgSrc} className={props.className}></img>
		</div>
	)
}

export default TopBarItem
