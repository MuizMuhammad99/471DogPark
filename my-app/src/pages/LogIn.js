import React from 'react';
import '../style/login.css';
import { useState} from "react";
import Axios from 'axios';

const LogIn = () =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        Axios.post("http://localhost:3001/login", {
          username: username,
          password: password,
        }).then((response) => {
          console.log(response);
        });
      };

    return <div className ="loginImage">
        <form className ="secondlogin">
        <h1 style ={{textAlign: 'center'}}>User Login</h1>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle">Username</label>
                            <input 
                                className = "inputstyle"
                                type='text'
                                placeholder='Username'
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                ></input>
                        </div>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle">Password</label>
                            <input
                                className = "inputstyle"
                                type='text'
                                placeholder='Password'
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                ></input>
                        </div>
                        <div style ={{textAlign: 'center', marginTop: "50px", marginBottom: "50px"}}>
                            <button className= "btn" onClick={login}>
                                Log In
                            </button>
                        </div>
                    </form>
    </div>

};

export default LogIn
