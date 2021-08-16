import React from 'react'
import { Switch } from "react-router"
import Product from "./Product"
import Engagement from "./Engagement"
import { PrivateRoute } from '../_components/PrivateRoute';
import TopBar  from "../TopBar/topbar.js";
import {withRouter} from "react-router-dom";
import AddProduct from './AddProduct';
import AddProductType from './AddProductType';
import TestType from './TestType';
import ProductType from './ProductType';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.previousLocation = this.props.location;
      }
      
    componentWillUpdate() {
        const { location } = this.props;
        if (!(location.state && location.state.modal)) {
          this.previousLocation = this.props.location;
        }
    }
    render() {
        const { location } = this.props;
        const isModal = (
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        );
        return (
        <div className="container-fluid">
        <TopBar/>
        <Switch location={isModal ? this.previousLocation : location} >
        <PrivateRoute exact path='/products' component={Product} />
        <PrivateRoute exact path='/product/add' component={AddProduct}/> 
        <PrivateRoute exact path='/producttypes' component={ProductType}/> 
        <PrivateRoute exact path='/producttype/add' component={AddProductType}/> 
        <PrivateRoute exact path='/testtype' component={TestType}/> 
        <PrivateRoute key="engagement_all" exact path='/engagements/all' component={Engagement}/> 
        <PrivateRoute key="engagement_active" exact path='/engagements/active' component={Engagement}/> 
        </Switch>
        {isModal
        ? <Switch>
            <PrivateRoute exact path="/product/add" component={AddProduct} />
            <PrivateRoute exact path='/producttype/add' component={AddProductType}/> 
          </Switch>
        : null
         }
        </div>
    )
    }
}

export default withRouter(Main);