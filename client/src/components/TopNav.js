import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

class TopNav extends Component {
  render() {
    return(
      <Navbar collapseOnSelect fluid style={{
        marginBottom: 0,
      }}>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav style={{ marginBottom: 0 }}>
            <NavDropdown eventKey={1} title="WEDDING" id="WEDDING">
              <MenuItem eventKey={1.1}>Engagement Rings</MenuItem>
              <MenuItem eventKey={1.2}>Wedding Bands</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={2} title="JEWELLERY" id="JEWELLERY">
              <MenuItem eventKey={2.1}>Rings</MenuItem>
              <MenuItem eventKey={2.2}>Earrings</MenuItem>
              <MenuItem eventKey={2.3}>Necklace</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight style={{ marginTop: 0 }}>
          <NavDropdown eventKey={1} title="COLLECTIONS" id="COLLECTIONS">
            <MenuItem eventKey={1.1}>Brilliance</MenuItem>
            <MenuItem eventKey={1.2}>City Lights</MenuItem>
            <MenuItem eventKey={1.3}>Heritage</MenuItem>
            <MenuItem eventKey={1.4}>Vow</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={2} title="THE LOVEMARK" id="LOVEMARK">
            <MenuItem eventKey={2.1}>Catalogue</MenuItem>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default TopNav;
