import React from 'react';
import '../style/register.css';
import { useState} from "react";
import Axios from 'axios';

const Register = () =>{

    const [usernameRegistering, setUsernameRegistering] = useState("");
    const [passwordRegistering, setPasswordRegistering] = useState("");
    const [emailRegistering, setEmailRegistering] = useState("");
    const [fnameRegistering, setFnameRegistering] = useState("");
    const [lnameRegistering, setLnameRegistering] = useState("");
    const [streetNumberRegistering, setStreetNumberRegistering] = useState("");
    const [streetRegistering, setStreetRegistering] = useState("");
    const [quadrantRegistering, setQuadrantRegistering] = useState("");

  
    const register = () => {
      Axios.post("http://localhost:3001/api/user/new", {
        email: emailRegistering,
        username: usernameRegistering,
        password: passwordRegistering,
        fname: fnameRegistering,
        lname: lnameRegistering,
        streetNumber: streetNumberRegistering,
        street: streetRegistering,
        quadrant: quadrantRegistering,

      }).then((response) => {
        console.log(response);
      });
    };

    return <div className ="registerImage">
        <form className ="secondregister">
                        <h1 style ={{textAlign: 'center'}}>Create an Account</h1>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle" >First Name: </label>
                            <input
                                className = "inputstyle"
                                type='text'
                                placeholder='First Name'
                                onChange={(e) => {
                                    setFnameRegistering(e.target.value);
                                  }}
                                ></input>
                        </div>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle" >Last Name: </label>
                            <input
                                className = "inputstyle"
                                type='text'
                                placeholder='Last Name'
                                onChange={(e) => {
                                    setLnameRegistering(e.target.value);
                                  }}
                                ></input>
                        </div>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle" >Email: </label>
                            <input
                                className = "inputstyle"
                                type='text'
                                placeholder='Email'
                                onChange={(e) => {
                                    setEmailRegistering(e.target.value);
                                  }}
                                ></input>
                        </div>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle">Username: </label>
                            <input
                                className = "inputstyle"
                                type='text'
                                placeholder='Username'
                                onChange={(e) => {
                                    setUsernameRegistering(e.target.value);
                                  }}
                                ></input>
                        </div>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle">Password: </label>
                            <input className = "inputstyle"
                                type='text'
                                placeholder='Password'
                                onChange={(e) => {
                                    setPasswordRegistering(e.target.value);
                                  }}
                                ></input>
                        </div>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle" >Street Number: </label>
                            <input
                                className = "inputstyle"
                                type='text'
                                placeholder='StreetNumber'
                                onChange={(e) => {
                                    setStreetNumberRegistering(e.target.value);
                                  }}
                                ></input>
                        </div>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle" >Street: </label>
                            <input
                                className = "inputstyle"
                                type='text'
                                placeholder='Street'
                                onChange={(e) => {
                                    setStreetRegistering(e.target.value);
                                  }}
                                ></input>
                        </div>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle" >Quadrant: </label>
                            <input
                                className = "inputstyle"
                                type='text'
                                placeholder='Quadrant'
                                onChange={(e) => {
                                    setQuadrantRegistering(e.target.value);
                                  }}
                                ></input>
                        </div>
                        <div style ={{textAlign: 'center', marginTop: "50px", marginBottom: "50px"}}>
                            <button className= "btn" onClick={register}>
                                Sign Up
                            </button>
                        </div>
                    </form>
    </div>

};

export default Register;
