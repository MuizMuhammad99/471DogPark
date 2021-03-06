import React, { useState } from "react";
import "../style/navbar.css";
import "../style/login.css";

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");
const street = queryParams.get('street');
const name = queryParams.get("name");
const hood = queryParams.get("hood");
const size = queryParams.get("size");
const quad = queryParams.get("quad");
const owner = queryParams.get("owner");

function Review(props) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/reviews/" + props.rID + "/username")
      .then((res) => res.json())
      .then((user) => setUser(user.Username));
  }, []);

  return (
    <div className="Park-list">
      <div className="Menu-bar">
        <h4 className="Table-element">{user}</h4>
        <h4 className="Table-element">{props.date}</h4>
      </div>
      <div>Scenery rating: {props.scenery}</div>
      <div>Parking rating: {props.parking}</div>
      <div>Amenities rating: {props.amenities}</div>
      <h2>{props.writing}</h2>
    </div>
  );
}

function E_vent(props) {
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

const ViewPark = () => {
  const [rating, setRating] = React.useState({
    scenery: 0,
    parking: 0,
    amenities: 0,
  });

  React.useEffect(() => {
    fetch("/api/dogpark/" + id + "/avg_rating")
      .then((res) => res.json())
      .then((rating) =>
        setRating({
          scenery: rating.avgScenery,
          parking: rating.avgParking,
          amenities: rating.avgAmenities,
        })
      );
  }, []);

  const [data, setData] = React.useState({ revs: [] });

  React.useEffect(() => {
    fetch("/api/reviews/park/" + id)
      .then((res) => res.json())
      .then((data) => setData({ revs: data }));
  }, []);

  const [evs, setEvs] = React.useState({ a: [] });

  React.useEffect(() => {
    fetch("/api/dogpark/"+id+"/events")
      .then((res) => res.json())
      .then((evs) => setEvs({ a: evs }));
  }, []);

  return (
    <div>
      <div className="seeImage">
        <div className="seesecond">
          <div className="Menu-bar">
            <div className="Park-list">
              <div className="Table-title">
                <h2 className="labelstyle"> {name}</h2>
              </div>
              <div>
                <h4>
                  {" "}
                  Located on {street} in {hood}, in {quad} Calgary
                </h4>
                <h4> Owned and operated by {owner}</h4>
                <h4> Size: {size} </h4>
                <h4> Average ratings </h4>
                <h4>
                  {" "}
                  Scenery:{" "}
                  {!rating.scenery ? "Not enough reviews" : rating.scenery}{" "}
                </h4>
                <h4>
                  {" "}
                  Parking:{" "}
                  {!rating.parking ? "Not enough reviews" : rating.parking}{" "}
                </h4>
                <h4>
                  {" "}
                  Amenities:{" "}
                  {!rating.scenery
                    ? "Not enough reviews"
                    : rating.amenities}{" "}
                </h4>
              </div>

              <div className="Park-title">
                <button
                  onClick={() => {
                    window.open("http://localhost:3000/AddNewReview?" + "&email=user10@gmail.com"
					+"&parkID=" + id);
                  }}
                >
                  {" "}
                  Write a new review{" "}
                </button>
                <h1 className="labelstyle">events({evs.a.length})</h1>
                {evs.a.map((x) => {return (<E_vent name={x.Name} date={x.Date} desc={x.Description} />);})}

                <h1 className="labelstyle">reviews({data.revs.length})</h1>
                <div>

                </div>
              </div>

              <div>
                {data.revs.map((x) => {
                  return (
                    <Review
                      rID={x.Review_ID_no}
                      date={x.Date}
                      writing={x.Writing}
                      scenery={x.Scenery}
                      parking={x.Parking}
                      amenities={x.Amenities}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPark;
