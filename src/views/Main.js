import { Switch } from "react-router"
import Product from "./Product"
import React from 'react'
import AddProduct from './AddProduct'
import { PrivateRoute } from '../_components/PrivateRoute';




const Main = () =>{
    return (
        <Switch>
        <PrivateRoute exact path='/products' component={Product} />
        <PrivateRoute exact path='/product/add' component={AddProduct}/> 
        </Switch>
    )
}

export default Main