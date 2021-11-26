import React from 'react';
import '../style/register.css'

const SearchForParkPage = () =>{

	return   <div className ="registerImage">
        <form className ="secondregister">
        <h1 style ={{textAlign: 'center'}}>Search for a dog park in Calgary</h1>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle">Park name</label>
                            <input 
                                className = "inputstyle"
                                type='text'
                                placeholder='Park name'
                                ></input>
                        </div>
                        
                        <div style ={{textAlign: 'center', marginTop: "50px", marginBottom: "50px"}}>
                            <button className= "btn">
                                Search
                            </button>
                        </div>
                    </form>
    </div>

};

export default SearchForParkPage;
