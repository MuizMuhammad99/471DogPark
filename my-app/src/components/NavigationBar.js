import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style/navbar.css';

const NavigationBar = () => {
  const history = useHistory();

  const navigationBarClick = (route) => {
    history.push(route);
  };

  return (
  <div className = "container">
    <div className= "btn">
    <button onClick={() => {
      navigationBarClick('/')
    }}> Home Page</button>
    </div>
    <div className= "btn">
    <button onClick={() => {
      navigationBarClick('/register')
    }}> Register</button>
    </div>
    <div className= "btn">
    <button onClick={() => {
      navigationBarClick('/login')
    }}> Login</button>
    </div>
    <div className= "btn">
    <button onClick={() => {
      navigationBarClick('/about')
    }}> About</button>
    </div>
    <div className= "btn">
    <button onClick={() => {
      navigationBarClick('/announcements')
    }}> Announcements</button>
    </div>
    <div className= "btn">
    <button onClick={() => {
      navigationBarClick('/contact')
    }}> Contact</button>
    </div>
    <div className= "btn">
    <button onClick={() => {
      navigationBarClick('/searchforpark')
    }}> Search For Park</button>
    </div>
    <div className= "btn">
    <button onClick={() => {
      navigationBarClick('/seeallparks')
    }}> See All Parks</button>
    </div>
    
    


  </div>

  )


};

export default NavigationBar;
