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
    <div className ="button">
    <button className= "btn" onClick={() => {
      navigationBarClick('/')
    }}> Homepage</button>
    </div>
    <div className ="button">
    <button className= "btn" onClick={() => {
      navigationBarClick('/register')
    }}> Register</button>
    </div>
    <div className ="button">
    <button className= "btn" onClick={() => {
      navigationBarClick('/login')
    }}> Login</button>
    </div>
    <div className ="button">
    <button className= "btn" onClick={() => {
      navigationBarClick('/about')
    }}> About</button>
    </div>
    <div className ="button">
    <button className= "btn" onClick={() => {
      navigationBarClick('/announcements')
    }}> Announcements</button>
    </div>
    <div className ="button">
    <button className= "btn" onClick={() => {
      navigationBarClick('/contact')
    }}> Contact</button>
    </div>
    <div className ="button">
    <button className= "btn" onClick={() => {
      navigationBarClick('/searchforpark')
    }}> Search Park</button>
    </div>
    <div className ="button">
    <button className= "btn" onClick={() => {
      navigationBarClick('/seeallparks?hood=none&add=none&name=none')
    }}> All Parks</button>
    </div>
    <div className ="button">
    <button className= "btn" onClick={() => {
      navigationBarClick('/analytics')
    }}> Analytics</button>
    </div>
    
    


  </div>

  )


};

export default NavigationBar;
