import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Routes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className = "Primary">
      <Router>
        <NavigationBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
