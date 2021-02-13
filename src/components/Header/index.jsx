import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,

} from "reactstrap";

import './styles.scss';

//Header desk e mobile, com menu NavbarToggler no mobile e Navbar no desk por motivos de responsividade

class AdminNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar
          style={{ position: 'relative'}}
          className="navbar-top navbar-horizontal navbar-dark navbar-container"
          expand="md"
        >
          <Container className="px-4">
            <button className="navbar-toggler" id="navbar-collapse-main">
              <span className="navbar-toggler-icon" />
            </button>
            <NavbarBrand to="/" tag={Link}>
              <img style={{ height: '60px'}} alt="..." src={require("../../assets/img/brand/logo_comixtore_white.png")}/>
            </NavbarBrand>
            <div className="d-md-none">
              <i className='ni ni-cart cart-icon' />
            </div>
            <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
              <div className="navbar-collapse-header d-md-none">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("../../assets/img/brand/logo_comixtore_white.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      className="navbar-toggler"
                      id="navbar-collapse-main"
                    >
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex mx-auto">
                <FormGroup className="mb-0">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-search" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Search" type="text" />
                  </InputGroup>
                </FormGroup>
              </Form>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/"
                    tag={Link}
                  >
                    <i className="ni ni-single-02" />
                    <span className="nav-link-inner--text">Profile</span>
                  </NavLink>
                </NavItem>
                <NavItem className="d-none d-md-block">
                  <NavLink className="nav-link-icon" to="/checkout" tag={Link}>
                    <i className="ni ni-cart" />
                    <span className="nav-link-inner--text">Cart</span>
                  </NavLink>
                </NavItem>
                <NavItem className="d-md-none">
                  <NavLink className="nav-link-icon" to="/" tag={Link}>
                    <span className="nav-link-inner--text">Comics</span>
                  </NavLink>
                </NavItem>
                <NavItem className="d-md-none">
                  <NavLink className="nav-link-icon" to="/" tag={Link}>
                    <span className="nav-link-inner--text">Headsets</span>
                  </NavLink>
                </NavItem>
                <NavItem className="d-md-none">
                  <NavLink className="nav-link-icon" to="/" tag={Link}>
                    <span className="nav-link-inner--text">Teclados</span>
                  </NavLink>
                </NavItem>
                <NavItem className="d-md-none">
                  <NavLink className="nav-link-icon" to="/" tag={Link}>
                    <span className="nav-link-inner--text">PC Gamer</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
          <div className="d-md-none mx-auto">
            <Form className="navbar-search navbar-search-dark form-inline search-mobile">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" />
                </InputGroup>
              </FormGroup>
            </Form>
          </div>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
