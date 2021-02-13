import React, { useEffect, useState } from "react";
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
  DropdownItem,
} from "reactstrap";
import api from "../../config/api";

import "./styles.scss";

//Menu de categorias de produtos

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [characters, setCharacters] = useState([]);

  async function getCharacter() {
    const { data } = await api.get(
      `/characters?ts=1&apikey=aef082249bc234fb888c4e9cccfc3b66&hash=fe1f6685d77d08d039f7158e284fbd91`
    );
    console.log(data.data.results);
    setCharacters(data.data.results);
  }

  useEffect(() => {
    getCharacter();
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="d-none d-md-flex navbar-container">
      <Navbar expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="color-text" href="/components/">
                COMICS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="color-text" href="/components/">
                LENDARY
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="color-text" href="/components/">
                COLECTIONS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="color-text" href="/components/">
                BY HERO
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="color-text" nav caret>
                BY HERO
              </DropdownToggle>
              <DropdownMenu right>
                {characters &&
                  characters.length > 0 &&
                  characters.map((character) => (
                    <DropdownItem>{character.name}</DropdownItem>
                  ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
