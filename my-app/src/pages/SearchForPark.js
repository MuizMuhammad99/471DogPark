import React from 'react';

const SearchForParkPage = () =>{

	return   <form>
		   <h1 className = "Title">Search for Dog Parks</h1>
	           <h2>
	    		  Search for a park page:
	    	   </h2>
	    	   <div>
	    	     <label>Park name: </label>
	              <input
	                type='text'
	                placeholder='park name'
	              ></input>
	              <button>
	                Search
	              </button>
	            </div>
	            
	          </form>

};

export default SearchForParkPage;
