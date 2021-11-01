import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';



export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg" id="my-nav">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                        Home
                    </NavLink>

                    <NavLink className="d-inline p-2 bg-dark text-white" to="/student">
                        List Student
                    </NavLink>

                    <NavLink className="d-inline p-2 bg-dark text-white" to="/manage">
                        Manage Student
                    </NavLink>
                   
               </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}
