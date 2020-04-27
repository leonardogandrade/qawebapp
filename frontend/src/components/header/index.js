import React,{Component} from 'react';
import {Navbar, Form, Nav, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaStethoscope} from 'react-icons/fa';

export default class Header extends Component{
    render(){
        return(
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home"><FaStethoscope size={45} /></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Início</Nav.Link>
                    <Nav.Link href="/reports">Relatórios</Nav.Link>
                    <Nav.Link href="#pricing">Configurações</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-primary">Logout</Button>
                </Form>
            </Navbar>
        )
    }
}