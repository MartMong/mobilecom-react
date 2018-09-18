import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../redux/actions/auth';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class NavbarTop extends React.Component {
  
  state = {
      isOpen: false
    };
  
  toggle = () => this.setState({
      isOpen: !this.state.isOpen
    });
  

  logout = () => this.props.logout()

  render() {
    const {isAuthenticated} = this.props;


    return (

      !isAuthenticated ? 
      
      (<div>
        <Navbar color="light" light expand="md">
        <Link to={'/'}>
          <p className='navbar-brand'>MO Shop</p>
        </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to={'/login'} style={{ textDecoration: 'none' }}>
                  <p className="nav-link">Login</p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={'/signup'} style={{ textDecoration: 'none' }}>
                  <p className="nav-link">Signup</p>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
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
            </Nav>
          </Collapse>
        </Navbar>
      </div>)

      :

      (<div>
        <Navbar color="light" light expand="md">
        <Link to={'/dashboard'}>
          <p className='navbar-brand'>MO Shop</p>
        </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <Link to={'/'} style={{ textDecoration: 'none' }}>
                <p className="nav-link" onClick={this.logout}>Logout</p>
              </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
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
            </Nav>
          </Collapse>
        </Navbar>
      </div>)
    );
  }
}


function mapStateToProps(state) {
  return {
      isAuthenticated: !!state.user.token
  }
}

NavbarTop.propTypes ={
  isAuthenticated : PropTypes.bool.isRequired,
  logout : PropTypes.func.isRequired
}

export default connect(mapStateToProps,{logout})(NavbarTop);