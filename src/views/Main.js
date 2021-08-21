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
import AddTestType from './AddTestType';
import Environment from './Environment';
import AddEnvironment from './AddEnvironment';
import Finding from './Finding';

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
		<PrivateRoute exact path='/testtype/add' component={AddTestType}/> 
		<PrivateRoute exact path='/testtype' component={TestType}/> 
		<PrivateRoute exact path='/environments' component={Environment}/> 
		<PrivateRoute exact path='/environment/add' component={AddEnvironment}/> 
		<PrivateRoute exact path='/environment/edit' component={AddEnvironment}/> 
		<PrivateRoute key="engagement_all" exact path='/engagements/all' component={Engagement}/> 
		<PrivateRoute key="engagement_active" exact path='/engagements/active' component={Engagement}/> 
		<PrivateRoute key="finding_all" exact path="/findings/all" component={Finding}/>
		<PrivateRoute key="finding_open" exact path="/findings/open" component={Finding}/>
		<PrivateRoute key="finding_closed" exact path="/findings/closed" component={Finding}/>
		<PrivateRoute key="finding_accepted" exact path="/findings/accepted" component={Finding}/>
        </Switch>

        {isModal
        ? <Switch>
            <PrivateRoute exact path="/product/add" component={AddProduct} />
            <PrivateRoute exact path='/producttype/add' component={AddProductType}/> 
            <PrivateRoute exact path='/testtype/add' component={AddTestType}/> 
            <PrivateRoute exact path='/environment/add' component={AddEnvironment}/> 
            <PrivateRoute exact path='/environment/edit' component={AddEnvironment}/> 
          </Switch>
        : null
         }
        </div>
    )
    }
}

export default withRouter(Main);
