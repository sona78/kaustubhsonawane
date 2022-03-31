
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import './topper.css';
import logo from './assets/logo.svg';
import React from "react";
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from "shards-react";

class Topper extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
    
        this.state = {
          collapseOpen: false
        };
    }

    toggleNavbar() {
        this.setState({
          ...this.state,
          ...{
            collapseOpen: !this.state.collapseOpen
          }
        });
      }

    render(){
        return(
            <Navbar className = "topper" type="dark" expand="md">
            <NavbarBrand href="/#"><img src={logo} alt="Personal Logo" height = "50vh" /></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} />

            <Collapse open={this.state.collapseOpen} navbar>
            <Nav className="justify-content-end links" navbar>
                <NavItem>
                    <NavLink active href="#home">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink active href="#experience">
                        Experience
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink active href="#activities">
                        Activities
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink active href="#projects">
                        Projects
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink active href="/Resume.pdf" target="_blank">
                        Resume
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar> 
        );
    }
}

export default Topper;