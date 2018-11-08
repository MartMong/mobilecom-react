import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/auth';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavLink,
  Form,
  Input,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


class NavbarTop extends React.Component {

  state = {
    isOpen: false
  };

  toggle = () => this.setState({
    isOpen: !this.state.isOpen
  });


  logout = () => {
    this.props.logout()
    this.props.history.push('/')
  }

  closeCollapse = () => this.setState({ isOpen: false })
  logout = () => this.props.logout()

  render() {
    const { isAuthenticated } = this.props;

    return (

      !isAuthenticated ?
        (<div>
          <header>
            <Navbar fixed="top" color="blue" light expand="md" className="border-bottom border-gray bg-white" >
              <Link to='/'>
                <NavbarBrand className="d-inline-block p-0" style={{ width: 100 }}>
                  <img src={"./images/logo.png"} alt="logo" className="position-relative img-fluid" />
                </NavbarBrand>
              </Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Promotions</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Shopping
                  </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                    </DropdownItem>
                      <DropdownItem>
                        Option 2
                    </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                    </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <Form inline>
                    <Input type="search" className="mr-3" placeholder="Search..." />
                    <span>
                      <button type='submit' class='ui circular icon button' role='button'>
                        <i aria-hidden='true' class='search icon' />
                      </button></span>
                  </Form>
                  <Link to='/login'>
                    <NavItem>
                      <button class='ui icon button mr-3' role='button'>
                        Signin
                      </button>
                    </NavItem>
                  </Link>
                </Nav>
              </Collapse>
            </Navbar>
          </header>
        </div>)
        // (<div>
        //   <Navbar color="light" light expand="md">
        //     <Link to={'/'}>
        //       <p className='navbar-brand'>MO Shop</p>
        //     </Link>
        //     <NavbarToggler onClick={this.toggle} />
        //     <Collapse isOpen={this.state.isOpen} navbar>
        //       <Nav className="ml-auto" navbar>
        //         <NavItem>
        //           <Link to={'/login'} style={{ textDecoration: 'none' }}>
        //             <p className="nav-link">Login</p>
        //           </Link>
        //         </NavItem>
        //         <NavItem>
        //           <Link to={'/signup'} style={{ textDecoration: 'none' }}>
        //             <p className="nav-link">Signup</p>
        //           </Link>
        //         </NavItem>
        //         <UncontrolledDropdown nav inNavbar>
        //           <DropdownToggle nav caret>
        //             Options
        //         </DropdownToggle>
        //           <DropdownMenu right>
        //             <DropdownItem>
        //               Option 1
        //           </DropdownItem>
        //             <DropdownItem>
        //               Option 2
        //           </DropdownItem>
        //             <DropdownItem divider />
        //             <DropdownItem>
        //               Reset
        //           </DropdownItem>
        //           </DropdownMenu>
        //         </UncontrolledDropdown>
        //       </Nav>
        //     </Collapse>
        //   </Navbar>
        // </div>)

        :

        (
          <div>
            <header>
              <Navbar fixed="top" color="blue" light expand="md" className="border-bottom border-gray bg-white" >
                <Link to='/dashboard'>
                  <NavbarBrand className="d-inline-block p-0" style={{ width: 100 }}>
                    <img src={"./images/logo.png"} alt="logo" className="position-relative img-fluid" />
                  </NavbarBrand>
                </Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/">Promotions</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Shopping
                  </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                    </DropdownItem>
                        <DropdownItem>
                          Option 2
                    </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                    </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    <Form inline>
                      <Input type="search" className="mr-3" placeholder="Search..." />
                      <span>
                        <button type='submit' class='ui circular icon button' role='button'>
                          <i aria-hidden='true' class='search icon' />
                        </button></span>
                    </Form>
                    <NavItem>
                      <button class='ui icon button mr-3' role='button' onClick={this.logout()}>
                        Logout
              </button>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </header>
          </div>


          // <div>
          //   <Navbar color="light" light expand="md">
          //     <Link to={'/dashboard'}>
          //       <p className='navbar-brand'>MO Shop</p>
          //     </Link>
          //     <NavbarToggler onClick={this.toggle} />
          //     <Collapse isOpen={this.state.isOpen} navbar>
          //       <Nav className="ml-auto" navbar>
          //         <UncontrolledDropdown nav inNavbar>
          //           <DropdownToggle nav caret>
          //             <Icon name="user" />
          //           </DropdownToggle>
          //           <DropdownMenu right>
          //             <Link to={'/account'} style={{ textDecoration: 'none' }} onClick={this.closeCollapse}>
          //               <p className="dropdown-item">Account</p>
          //             </Link>

          //             <Link to={'/'} style={{ textDecoration: 'none' }} onClick={this.closeCollapse}>
          //               <p className="dropdown-item" onClick={this.logout}>Logout</p>
          //             </Link>
          //           </DropdownMenu>
          //         </UncontrolledDropdown>
          //       </Nav>
          //     </Collapse>
          //   </Navbar>
          // </div>
        )
    );
  }
}


function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

NavbarTop.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { logout })(NavbarTop);