import { Switch } from "react-router"
import Product from "./Product"
import Engagement from "./Engagement"
import React from 'react'
import AddProduct from './AddProduct'
import { PrivateRoute } from '../_components/PrivateRoute';

import TopBar  from "../TopBar/topbar.js";



const Main = () =>{
    return (
        <div class="container-fluid">
        <TopBar/>
        <Switch>
        <PrivateRoute exact path='/products' component={Product} />
        <PrivateRoute exact path='/product/add' component={AddProduct}/> 
        <PrivateRoute key="engagement_all" exact path='/engagements/all' component={Engagement}/> 
        <PrivateRoute key="engagement_active" exact path='/engagements/active' component={Engagement}/> 
        </Switch>
        </div>
    )
}

export default Main