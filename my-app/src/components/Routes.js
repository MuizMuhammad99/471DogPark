import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/Homepage';
import Register from '../pages/Register';
import LogIn from '../pages/LogIn';

function Routing() {
    return (
        <>
            <Switch>
                <Route path='/' exact component={HomePage } />
                <Route path='/register' exact component={Register} />
                <Route path='/login' exact component={LogIn } />
            </Switch>
        </>
    );
}

export default Routing;