import React , {useState} from 'react';

function Park(props) {
	return(
		<div className = "Menu-bar">
			<h4 className = "Table-element" >{props.name}</h4>
			<h4>{props.quadrant}</h4>
		</div>
	);
}


const SeeAllParks = () =>{

	const [park, setParks] = useState([
		{name: "Test Park 1", quadrant: "NE"},
		{name: "Test Chaparral Park", quadrant: "SE"},
		{name: "Test Stampede Park", quadrant: "Central"}
	]);

    return <div>
    			<h1 className = "Title"> Calgary dog parks </h1>
    			<div className = "Table-title">
    				<h2>Park Name</h2>
    				<h2>Quadrant</h2>
    			</div>
    			{park.map(park => (
    				<Park name={park.name} quadrant={park.quadrant} />
    			))}
    	   </div>

};

export default SeeAllParks;
