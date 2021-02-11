import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import './styles.scss';

//Menu de categorias de produtos

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="d-none d-md-flex navbar-container">
      <Navbar expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className='color-text' href="/components/">COMICS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='color-text' href="/components/">RAROS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='color-text' href="/components/">COLEÇÔES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='color-text' href="/components/">POR HERÓI</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
            
              <DropdownToggle className='color-text' nav caret>
                POR PERSONAGEM
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem >
                  IRONMAN
                </DropdownItem>
                <DropdownItem >
                  SPIDERMAN
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;