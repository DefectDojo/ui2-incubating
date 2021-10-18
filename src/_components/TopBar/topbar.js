import React,{ Component } from "react";
import { Navbar, Nav, Dropdown} from "react-bootstrap";
import { withRouter } from "react-router";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import defectdojologo from '../../assets/images/defectdojo.png'

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
            case "/producttypes":
                page="Product Types"
                break
            case "/engagements/all":
                page="All Engagements"
                break
            case "/engagements/active":
                page="Active Engagements"
                break
	    case "/findings/open":
		page="Open Findings"
		break
	    case "/findings/closed":
		page="Closed Findings"
		break
	    case "/findings/all":
		page="All Findings"
		break
	    case "/findings/accepted":
		page="Risk Accepted Findings"
		break
            case "/testtype":
                page="Test Types"
                break
            case "/environments":
                page="Environments"
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
                    <Navbar.Brand>
                    <img
                        src={defectdojologo}
                        width="300"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav.Item className="m-auto">{page}</Nav.Item>
                    
                        <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            <AccountCircleIcon/>
                        </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item divider />
                                <Dropdown.Item onClick={this.Logout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(TopBar)
