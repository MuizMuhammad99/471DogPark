import React from 'react';
import '../style/register.css';

const Register = () =>{

    return <div className ="registerImage">
        <form className ="secondregister">
                        <h1 style ={{textAlign: 'center'}}>Create an Account</h1>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle">Username: </label>
                            <input
                                className = "inputstyle"
                                type='text'
                                placeholder='Username'
                                ></input>
                        </div>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle" >Email: </label>
                            <input
                                className = "inputstyle"
                                type='text'
                                placeholder='Email'
                                ></input>
                        </div>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle">Password: </label>
                            <input className = "inputstyle"
                                type='text'
                                placeholder='Password'
                                ></input>
                        </div>
                        <div style ={{textAlign: 'center', marginTop: "50px", marginBottom: "50px"}}>
                            <button className= "btn">
                                Sign Up
                            </button>
                        </div>
                    </form>
    </div>

};

export default Register;
