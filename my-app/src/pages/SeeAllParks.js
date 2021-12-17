import React , {useState} from 'react';
import '../style/navbar.css';
import '../style/login.css';


function Park(props) {

	const [data, setData] = React.useState({id:0, name:"", size:0, streetnum:0, street:0, quad:"", hood:"", owner:0});

	  React.useEffect(() => {
	    fetch("/api/dogpark/id/" + props.id)
	      .then((res) => res.json())
	      .then((data) => setData({id: props.id, name: data.Park_name, size: data.Size,
	      						   streetnum: data.Street_number, street: data.Street, 
	      						   quad: data.Quadrant, hood: data.Neighbourhood_name, 
	      						   owner: data.Owner_ID}));
	  }, []);
	if (props.allowSE && data.quad == "SE" || props.allowSW && data.quad == "SW" 
				    					|| props.allowNE && data.quad == "NE" || props.allowNW && data.quad == "NW" 
				    					|| props.allowCenter && data.quad == "Central") 
		return(
			<div className = "Menu-bar">
				<h4 className = "Table-element" onClick={() => {window.open("http://localhost:3000/ViewPark?id="        + props.id
																										 + "name="      + data.name
																										 + "size="      + data.size
																										 + "streetnum=" + data.streetnum
																										 + "street="    + data.street
																										 + "quad="      + data.quad
																										 + "hood="      + data.hood
																										 + "owner="     + data.owner
																										 )}}>{data.name}</h4>
				<h4 className = "Table-element">{data.quad}, {data.hood}</h4>
			</div>
		);
	else
		return (null);
}


const SeeAllParks = () =>{
	const [data, setData] = React.useState({ids: []});

	  React.useEffect(() => {
	    fetch("/api/dogparks/ids")
	      .then((res) => res.json())
	      .then((data) => setData({ids: data}));
	  }, []);

	const [allowSE, setAllowSE] = useState(true);
	const [allowSW, setAllowSW] = useState(true);
	const [allowNE, setAllowNE] = useState(true);
	const [allowNW, setAllowNW] = useState(true);
	const [allowCenter, setAllowCenter] = useState(true);

    return <div>

    		<div className ="seeImage">
        		<div className ="seesecond">
	    			<div className = "Menu-bar" >
		    			<div className = "Park-list">
			    			<div className = "Table-title">
			    				<h2 className="labelstyle"> park name</h2>
			    				<h2 className="labelstyle">location</h2>
			    			</div>
				    			{data.ids.map(x => {

				    				return <Park id={x.Park_ID_no} allowSE={allowSE} allowSW={allowSW} allowNE={allowNE} allowNW={allowNW} />
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
