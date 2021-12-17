import React from 'react';
import '../style/register.css'

const SearchForParkPage = () =>{

    const [name, setName] = React.useState("none");
    const [hood, setHood] = React.useState("none");
    const [add,  setAdd ] = React.useState("none");

	return   <div className ="searchImage">
        <form className ="searchsecond">
        <h1 style ={{textAlign: 'center'}}>Search for a dog park in Calgary</h1>
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle">Park name</label>
                            <input 
                                className = "inputstyle"
                                type='text'
                                placeholder='Park name'
                                onChange={(e) => {setName(e.target.value)}}
                                ></input>
                        </div>
                        
                        
                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle">Park neighbourhood</label>
                            <input 
                                className = "inputstyle"
                                type='text'
                                placeholder='Park neighbourhood'
                                onChange={(e) => {setHood(e.target.value)}}
                                ></input>
                        </div>

                        <div style ={{textAlign: 'center'}}>
                            <label className = "labelstyle">Park street</label>
                            <input 
                                className = "inputstyle"
                                type='text'
                                placeholder='Park street'
                                onChange={(e) => {setAdd(e.target.value)}}
                                ></input>
                        </div>
                        
                        <div style ={{textAlign: 'center', marginTop: "50px", marginBottom: "50px"}}>
                            <button className= "btn" onClick={() => {window.open("http://localhost:3000/SeeAllParks?name="+name+"&hood="+hood+"&add="+add)}}>
                                Search
                            </button>
                        </div>
                    </form>
    </div>

};

export default SearchForParkPage;
