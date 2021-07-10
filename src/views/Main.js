import { Route, Switch } from "react-router"
import Product from "./Product"
import React from 'react'
import AddProduct from './AddProduct'




const Main = () =>{
    return (
        <Switch>
        <Route exact path='/products' component={Product} />
        <Route exact path='/product/add' component={AddProduct}/> 
        </Switch>
    )
}

export default Main