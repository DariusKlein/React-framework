import React from "react";
import { Route } from 'react-router-dom'
import Eventslistview from "./container/Eventslistview";
import {Customlayout} from "./container/layout";
import {Customlayout2} from "./container/layout2";
import {Customlayout3} from "./container/layout3";
import {Customlayout4} from "./container/layout4";
import Login from "./component/Login";
import AdminView from "./container/AdminView";

const BaseRouter = () => (
<div>
    <Route Exact path='/landing' component={Eventslistview} />
    <Route  Exact path='/login' component={Login} />
    <Route Exact path='/Admin' component={AdminView} />
    <Route Exact path='/Events' component={Customlayout4} />
    <Route Exact path='/Dev' component={Customlayout2} />

</div>

);
const LayoutRouter = () => (
    <div>
        <Route Exact path='/landing' component= {Customlayout}  />
        <Route Exact path='/Login' component={Customlayout2} />
        <Route Exact path='/Admin' component={Customlayout3} />
        <Route Exact path='/Events' component={Customlayout4} />
        <Route Exact path='/Dev' component={Customlayout2} />
    </div>

);


export { BaseRouter, LayoutRouter };