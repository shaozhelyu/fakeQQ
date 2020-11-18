import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 0, buttonable: true, password: 'hello' };
    this.searchUser = this.searchUser.bind(this);
  }

  searchUser() {
    const account = document.getElementById('search').value;
    window.location = `/${account}`;
  }
  render() {
    return (
      <Navbar bg="light" expand="lg" style={{ justifyContent: 'space-around' }}>
        <Navbar.Brand
          href="#home"
          style={{ position: 'absolute', left: '10%' }}
        >
          MSW App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            id="search"
          />
          <Button variant="outline-success" onClick={this.searchUser}>
            Search
          </Button>
        </Form>
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ position: 'absolute', right: '10%' }}
        >
          <Nav className="mr-auto">
            <Nav.Link href={'/' + this.props.data.username + '/home'}>
              <svg
                // aria-label="首页"
                className="_8-yf5 "
                fill="#262626"
                height="22"
                viewBox="0 0 48 48"
                width="22"
              >
                <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path>
              </svg>
            </Nav.Link>
            <Nav.Link href={'/' + this.props.data.username + '/message'}>
              <svg
                // aria-label="Direct"
                className="_8-yf5 "
                fill="#262626"
                height="22"
                viewBox="0 0 48 48"
                width="22"
              >
                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l13.2 13c.5.4 1.1.6 1.7.3l16.6-8c.7-.3 1.6-.1 2 .5.4.7.2 1.6-.5 2l-15.6 9.9c-.5.3-.8 1-.7 1.6l4.6 19c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.5-.5.5-1.1.2-1.6z"></path>
              </svg>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
              <NavDropdown.Item href={'/' + this.props.username}>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="/account/setting">
                Setting
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
