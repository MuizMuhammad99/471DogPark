import React, {useState} from 'react';
import '../App.css'



function Event(props) {
  return(
    <div className="Park-list">
      <div className="Menu-bar">
        <h3 className="Table-element">{props.name}</h3>
        <h3 className="Table-element">{props.date}</h3>
      </div>
      <h4>Description: {props.desc}</h4>
    </div>
  );
}

const AnnouncementsPage = () =>{

	  const [evs, setEvs] = React.useState({ a: [] });

	  React.useEffect(() => {
	    fetch("/api/event/all")
	      .then((res) => res.json())
	      .then((evs) => setEvs({ a: evs }));
	  }, []);

    return  <div className = "announcementImage">
    			<div className = "announcementsecond" style ={{textAlign: 'center'}}>
				<h1 className = "Title">Active Events</h1>
    			<div className = "Table-title">
				<div >
				
				</div >
    			
    			</div>
    			{evs.a.map(x => (
    				<Event name={x.Name} date={x.Date} desc={x.Description} />
    			))}
				</div>
    		</div>

};

export default AnnouncementsPage;
