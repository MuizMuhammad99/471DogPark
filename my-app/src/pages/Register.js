import React from 'react';

const Register = () =>{

    return <div>
        <form>
                        <div>
                            <label>Username</label>
                            <input
                                type='text'
                                placeholder='Username'
                                ></input>
                        </div>
                        <div >
                            <label>Email</label>
                            <input
                                type='text'
                                placeholder='Email'
                                ></input>
                        </div>
                        <div >
                            <label>Password</label>
                            <input
                                type='text'
                                placeholder='Password'
                                ></input>
                        </div>
                        <div>
                            <button>
                                Sign Up
                            </button>
                        </div>
                    </form>
    </div>

};

export default Register;