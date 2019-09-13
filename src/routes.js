import React from 'react';
import {Switch, Route} from 'react-router-dom';

//components
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard1 from './Components/Wizard/steps/WizardStep1'
import Wizard2 from './Components/Wizard/steps/WizardStep2'
import Wizard3 from './Components/Wizard/steps/WizardStep3'

export default (
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/wizard1" component={Wizard1}/>
        <Route exact path="/wizard2" component={Wizard2}/>
        <Route exact path="/wizard3" component={Wizard3}/>
    </Switch>
)
