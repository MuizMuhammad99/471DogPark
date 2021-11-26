import React , {useState} from 'react';
import '../style/navbar.css';
import '../style/login.css';

function Park(props) {
	return(
		<div className = "Menu-bar">
			<h4 className = "Table-element" >{props.name}</h4>
			<h4 className = "Table-element">{props.quadrant}</h4>
		</div>
	);
}


const SeeAllParks = () =>{

	const [park, setParks] = useState([
		{name: "Test Park 1", quadrant: "NE"},
		{name: "Test Chaparral Park", quadrant: "SE"},
		{name: "Test Stampede Park", quadrant: "Central"},
		{name: "Test SW Park", quadrant: "SW"},
		{name: "Test NW Park", quadrant: "NW"},
		{name: "Test SE Park", quadrant: "SE"},
		{name: "Test NE Park", quadrant: "NE"}
	]);

	const [allowSE, setAllowSE] = useState(true);
	const [allowSW, setAllowSW] = useState(true);
	const [allowNE, setAllowNE] = useState(true);
	const [allowNW, setAllowNW] = useState(true);
	const [allowCenter, setAllowCenter] = useState(true);

    return <div>

    		<div className ="registerImage">
        		<div className ="secondregister">
	    			<div className = "Menu-bar" >
		    			<div className = "Park-list">
			    			<div className = "Table-title">
			    				<h2 className="labelstyle"> park name</h2>
			    				<h2 className="labelstyle">quadrant</h2>
			    			</div>
				    			{park.map(park => {
				    				if (allowSE && park.quadrant == "SE" || allowSW && park.quadrant == "SW" 
				    					|| allowNE && park.quadrant == "NE" || allowNW && park.quadrant == "NW" 
				    					|| allowCenter && park.quadrant == "Central") 
				    					return <Park name={park.name} quadrant={park.quadrant} />
			    				})}
		    				</div>


		    			<div className = "Filter-box">
	    				
	    				<div className = "Column">
	    					<h4 className = "Filter-title">Filters</h4>
	    					<label>SE</label>
	    					<label>SW</label>
	    					<label>NE</label>
	    					<label>NW</label>
	    					<label>Central</label>
	    				</div>
	    				<div className = "Column">
	    				
	    					<h4 className = "Filler">filler</h4>
			    			<input className = "Check-box"
								name="SE"
								type="checkbox"
								defaultChecked = 'checked'
								onChange={(e) => setAllowSE(e.currentTarget.checked)}/>
						
							
			    			<input className = "Check-box"
								name="SW"
								type="checkbox"
								defaultChecked = 'checked'
								onChange={(e) => setAllowSW(e.currentTarget.checked)}/>
						
							
			    			<input className = "Check-box"
								name="NE"
								type="checkbox"
								defaultChecked = 'checked'
								onChange={(e) => setAllowNE(e.currentTarget.checked)}/>
						
							
			    			<input className = "Check-box"
								name="NW"
								type="checkbox"
								defaultChecked = 'checked'
								onChange={(e) => setAllowNW(e.currentTarget.checked)}/>
						
							
			    			<input className = "Check-box"
								name="Central"
								type="checkbox"
								defaultChecked = 'checked'
								onChange={(e) => setAllowCenter(e.currentTarget.checked)}/>

						</div>
					</div>

		    		</div>
                        
        </div>
    </div>
</div>

};

export default SeeAllParks;
