import React,{ Component } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import { withRouter } from "react-router";

class TopBar extends Component{
    constructor(props){
        super(props)
    }

    GetRouteHeading(){
        var page;
        switch(this.props.location.pathname){
            case "/products":
                page="Products"
                break
            default:
                page="Unknown"
        }
        return page
    }

    render(){
        var page = this.GetRouteHeading();
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav.Item className="m-auto">{page}</Nav.Item>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default withRouter(TopBar)