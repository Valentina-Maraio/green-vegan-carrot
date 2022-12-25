import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { FavRecipesContext } from "../../context/AllContext";
import { Nav } from "react-bootstrap";
import './style/Menu.css'
import carrot from '../../assets/images/carrot.png'
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Menu = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  }

  const { favRec } = useContext(FavRecipesContext);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Nav.Link href="/">
              <img className="logo" src={carrot} alt="algo"/>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: 'auto' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link>
                <Link className="favRec" to={"/favrecipes"}>
                  <span className="saved">Favorite Recipes</span>
                  <i className="pi pi-heart"></i>
                  <span className="saved">{favRec.length}</span>
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={submitHandler}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              {/*<Button variant="outline-success">Search</Button>*/}            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default Menu;