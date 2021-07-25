import React,{ Component } from "react";
import { Navbar, Container, Nav, Dropdown} from "react-bootstrap";
import { withRouter } from "react-router";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class TopBar extends Component{
    constructor(props){
        super(props)
        this.Logout = this.Logout.bind(this);
    }


    Logout(){
        localStorage.removeItem("token")
        this.props.history.push("/login")

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
                    <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                        <AccountCircleIcon/>
                    </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.Logout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
        );
    }
}

export default withRouter(TopBar)