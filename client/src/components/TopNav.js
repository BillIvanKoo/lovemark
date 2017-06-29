import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

class TopNav extends Component {
  render() {
    return (
      <Navbar collapseOnSelect fluid style={{
        marginBottom: 0,
      }}>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav style={{ marginBottom: 0 }}>
            <NavDropdown eventKey={1} title="WEDDING" id="WEDDING">
              <MenuItem eventKey={1.1} href="/collections/heritage">Engagement Rings</MenuItem>
              <MenuItem eventKey={1.2} href="/collections/vow">Wedding Bands</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={2} title="JEWELLERY" id="JEWELLERY">
              <MenuItem eventKey={2.1} href="/jewellery/rings">Rings</MenuItem>
              <MenuItem eventKey={2.2} href="/jewellery/earrings">Earrings</MenuItem>
              <MenuItem eventKey={2.3} href="/jewellery/necklace">Necklace</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight style={{ marginTop: 0 }}>
          <NavDropdown eventKey={1} title="COLLECTIONS" id="COLLECTIONS">
            <MenuItem eventKey={1.1} href="/collections/brilliance">Brilliance</MenuItem>
            <MenuItem eventKey={1.2} href="/collections/citylights">City Lights</MenuItem>
            <MenuItem eventKey={1.3} href="/collections/heritage">Heritage</MenuItem>
            <MenuItem eventKey={1.4} href="/collections/vow">Vow</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={2} title="THE LOVEMARK" id="LOVEMARK">
            <MenuItem eventKey={2.1} href="/jewellery">Catalogue</MenuItem>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default TopNav;
