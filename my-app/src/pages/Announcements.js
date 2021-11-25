import React, {useState} from 'react';
import '../App.css'

function Event(props) {
	return(
		<div className = "Menu-bar">
			<h4 className = "Table-element" >{props.name}</h4>
			<h4>{props.heldBy}</h4>
		</div>
	);
}

const AnnouncementsPage = () =>{

	const [event, setEvents] = useState([
		{name: "Test event 1", heldBy: "We Love Dogs Foundation"},
		{name: "Berners and Buds", heldBy: "B&B Group"},
		{name: "Exciting dog park event", heldBy: "City of Calgary"}
	]);

    return  <div>
    			<h1 className = "Title">Active Events</h1>
    			<div className = "Table-title">
    				<h2>Event Name</h2>
    				<h2>Organization</h2>
    			</div>
    			{event.map(event => (
    				<Event name={event.name} heldBy={event.heldBy} />
    			))}
    		</div>

};

export default AnnouncementsPage;
