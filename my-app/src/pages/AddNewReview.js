import React from "react";
import { useState } from "react";
import Axios from "axios";

const AddNewReview = (props) => {
  const queryParams = new URLSearchParams(window.location.search);
  const email = queryParams.get("email");
  const parkID = queryParams.get("id");
  const [dateInput, setDate] = useState("");
  const [writingInput, setWriting] = useState("");
  const [sceneryInput, setScenery] = useState("");
  const [parkingInput, setParking] = useState("");
  const [amenititesInput, setAmenities] = useState("");

  const submitReview = () => {
    Axios.post("/api/review/new", {
      "date": dateInput,
      "writing": writingInput,
      "scenery": sceneryInput,
      "parking": parkingInput,
      "amenitites": amenititesInput,
      "reviewerEmail": email,
      "parkID": parkID,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <form className="reviewForm">
        <h1 style={{ textAlign: "center" }}>Write a review</h1>
        <div style={{ textAlign: "center" }}>
          <label className="labelstyle">Date: </label>
          <input
            className="inputstyle"
            type="text"
            placeholder="0000-00-00"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></input>
        </div>
        <div style={{ textAlign: "center" }}>
          <label className="labelstyle">Writing: </label>
          <input
            className="inputstyle"
            type="text"
            placeholder="Enter a review..."
            onChange={(e) => {
              setWriting(e.target.value);
            }}
          ></input>
        </div>
        <div style={{ textAlign: "center" }}>
          <label className="labelstyle">Scenery: </label>
          <input
            className="inputstyle"
            type="text"
            placeholder="5"
            onChange={(e) => {
              setScenery(e.target.value);
            }}
          ></input>
        </div>
        <div style={{ textAlign: "center" }}>
          <label className="labelstyle">Parking: </label>
          <input
            className="inputstyle"
            type="text"
            placeholder="5"
            onChange={(e) => {
              setParking(e.target.value);
            }}
          ></input>
        </div>
        <div style={{ textAlign: "center" }}>
          <label className="labelstyle">Amenities: </label>
          <input
            className="inputstyle"
            type="text"
            placeholder="5"
            onChange={(e) => {
              setAmenities(e.target.value);
            }}
          ></input>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <button className="btn" onClick={submitReview}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewReview;
