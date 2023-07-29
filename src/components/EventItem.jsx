import React from 'react'

const EventItem = (props) => {
	
	return (
		<div className="EventItem">

			<div className="eventItemCalendar">
				<h3>{props.day}</h3>
				<span>{props.month}</span>
			</div>

			<div>
				<h3>South Park</h3>
				<p>Cool Event #{props.count}</p>
				<a href='#'>More Info</a>
			</div>

		</div>
	)
}

export default EventItem
