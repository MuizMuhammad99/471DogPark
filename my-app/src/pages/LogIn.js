import React from 'react';

const LogIn = () =>{

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
                            <label>Password</label>
                            <input
                                type='text'
                                placeholder='Password'
                                ></input>
                        </div>
                        <div>
                            <button>
                                Log In
                            </button>
                        </div>
                    </form>
    </div>

};

export default LogIn;