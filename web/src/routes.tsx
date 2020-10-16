import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphanages from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/orphanages/map" component={OrphanagesMap} />
                <Route path="/orphanages/create" exact component={CreateOrphanages} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;