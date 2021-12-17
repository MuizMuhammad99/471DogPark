import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/Homepage';
import Register from '../pages/Register';
import LogIn from '../pages/LogIn';
import About from '../pages/About';
import Announcements from '../pages/Announcements';
import Contact from '../pages/Contact';
import SearchForPark from '../pages/SearchForPark';
import SeeAllParks from '../pages/SeeAllParks';
import ViewPark from '../pages/ViewPark';
import Analytics from '../pages/Analytics';
import AddNewReview from '../pages/AddNewReview';



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
		        <Route path='/viewpark' exact component={ViewPark } />
                <Route path='/Analytics' exact component={Analytics } />
                <Route path='/addnewreview' exact component={AddNewReview} />

		

            </Switch>
        </>
    );
}

export default Routing;
