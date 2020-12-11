import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Link to='/market'>
              <Navbar.Brand>
                <img alt='' src='https://strive.school/assets/strive_white.png' width='auto' height='30' className='d-inline-block align-top' /> Market
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Link to='/market'>
                  <div className={this.props.location.pathname === "/market" ? "nav-link active" : "nav-link"}>Market</div>
                </Link>
              </Nav>
              <Nav>
                <Dropdown>
                  <Dropdown.Toggle variant='dark' id='dropdown-basic'>
                    {" "}
                    Account
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link to='/backoffice'>
                      <div className='text-black-50 text-decoration-none'> Back Office</div>
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>

              {/*   {this.props.location.pathname === "/projects" && (
              <Form inline onSubmit={this.handleSearch}>
                <Form.Control type='text' placeholder='Search' onInput={this.handleChange} value={this.state.search} className='mr-sm-2' />
                <Button variant='outline-dark' type='submit'>
                  Search
                </Button>
              </Form>
            )} */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavBar);
