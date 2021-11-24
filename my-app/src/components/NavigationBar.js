import React from 'react';
import { useHistory } from 'react-router-dom';

const NavigationBar = () => {
  const history = useHistory();

  const navigationBarClick = (route) => {
    history.push(route);
  };

  return (
  <div>
    <div>
    <button onClick={() => {
      navigationBarClick('/')
    }}> Home Page</button>
    </div>
    <div>
    <button onClick={() => {
      navigationBarClick('/register')
    }}> Register</button>
    </div>
    <div>
    <button onClick={() => {
      navigationBarClick('/login')
    }}> Login</button>
    </div>
    
    


  </div>

  )


};

export default NavigationBar;
