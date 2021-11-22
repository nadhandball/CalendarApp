

import React from 'react';
import CalendarScreen from '../Componentes/Calendario/CalendarScreen';
import LoginScreen from '../Componentes/Auth/LoginScreen';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const AppRouter = () => {
    return (
        <React.Fragment>
            {/* Funciona con la version 5.3.0*/}
            <Router>
                <div>
                    <Switch>
                
                       <Route exact path="/login" component={LoginScreen} />
                       <Route exact path="/" component={CalendarScreen} />

                    </Switch>                         
                </div>
            </Router>

            {/*Funciona con la version 6.0.1

            <Routes>
                <div>
                    
                
                       <Route exact path="/login" element={<LoginScreen />} />
                       <Route exact path="/" element={<CalendarScreen />} />

                                         
                </div>
            </Routes> 
            */}
        </React.Fragment>  
    
    )
}

export default AppRouter;





