
// CHILD OF THE MainContainer COMPONENT
// contains events
// each event is contained in its own EventItem component


import React from 'react'
import EventItem from './EventItem';
import southpark from './images/southpark.jpg';


const SideBarRight = () => {
	return (
		<div className="SideBarRight">
			<div style={{textAlign: 'center'}}><h2>Events</h2></div>
			<EventItem count="1" day="28" month="July" />
			<EventItem count="2" day="12" month="August" />
			<img src={southpark} alt="" className='southparkImg' />
		</div>
	)
}

export default SideBarRight
