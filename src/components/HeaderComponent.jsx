import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class HeaderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }


    }

    render() {
        return (
            <div>
                <header>
                    {/* <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div className='navbar-brand'>Personal Information Management System Demo</div>

                    </nav> */}
                    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Personal Information Management System Demo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/add-employee">Add Employee</Nav.Link>
            <Nav.Link href="/list-inventory">List Inventory</Nav.Link>
            <Nav.Link href="/list-entryexit">List Entry-Exit Information</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;