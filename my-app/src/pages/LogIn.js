import React from 'react';
import '../style/login.css';


const LogIn = () =>{

    return <div className ="loginImage">
        <form className ="secondlogin">
        <h1 style ={{textAlign: 'center'}}>User Login</h1>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle">Username</label>
                            <input 
                                className = "inputstyle"
                                type='text'
                                placeholder='Username'
                                ></input>
                        </div>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle">Password</label>
                            <input
                                className = "inputstyle"
                                type='text'
                                placeholder='Password'
                                ></input>
                        </div>
                        <div style ={{textAlign: 'center', marginTop: "50px", marginBottom: "50px"}}>
                            <button className= "btn">
                                Log In
                            </button>
                        </div>
                    </form>
    </div>

};

export default LogIn
