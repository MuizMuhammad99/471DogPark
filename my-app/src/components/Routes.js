import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/Homepage';
import Register from '../pages/Register';
import LogIn from '../pages/LogIn';
import About from '../pages/About';
import Announcements from '../pages/Announcements';
import Contact from '../pages/Contact';
import SearchForPark from '../pages/SearchForPark';
import SeeAllParks from '../pages/SeeAllParks';


function Routing() {
    return (
        <>
            <Switch>
                <Route path='/' exact component={HomePage } />
                <Route path='/register' exact component={Register} />
                <Route path='/login' exact component={LogIn } />
                <Route path='/about' exact component={About } />
                <Route path='/announcements' exact component={Announcements } />
                <Route path='/contact' exact component={Contact } />
                <Route path='/searchforpark' exact component={SearchForPark } />
                <Route path='/seeallparks' exact component={SeeAllParks } />



            </Switch>
        </>
    );
}

export default Routing;
