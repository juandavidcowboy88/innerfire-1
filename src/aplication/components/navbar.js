import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import button from '../../images/hamburgerMenu.png'
import logo from '../../logo.png';
import ModalMenu from '../containers/modal-menu'
import ModalLog from '../containers/modal-log'
import './navbar-footer.css';

class NavbarHeader extends Component {

  state = {
    showMenu: false,
    showLog: false
  }

  handleShow = (e) => {
    let element = e.target;
    if (element.id === "log"){
      this.setState({
        showMenu: false,
        showLog: true
      });
    }
    else{
      this.setState({
        showMenu: true,
        showLog: false
      });
    }
  }

  handleHide = () => {
    this.setState({
      showMenu: false,
      showLog: false
    });
  }


  render(){
    return(
      <Navbar className="nav-container" inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand
            id = "menu"
            onClick={this.handleShow}
          >
            <span id="button-nav"><img src={button}/></span>
            <span className="hidden-xs">EXPLORE</span>
          </Navbar.Brand>
          <button
            onClick={this.handleShow}
            id = "log"
            type="button"
            className="navbar-toggle collapsed"
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.084 13C21.084 14.933 19.517 16.5 17.584 16.5C15.651 16.5 14.084 14.933 14.084 13C14.084 11.067 15.651 9.5 17.584 9.5C19.517 9.5 21.084 11.067 21.084 13Z" stroke="white"/>
              <mask id="path-2-inside-1" fill="white">
              <path d="M10 24.8865C10 21.1242 13.05 18.0742 16.8123 18.0742H18.3565C22.1188 18.0742 25.1688 21.1242 25.1688 24.8865C25.1688 25.8539 24.3845 26.6382 23.417 26.6382H11.7517C10.7843 26.6382 10 25.8539 10 24.8865Z"/>
              </mask>
              <path d="M16.8123 19.0742H18.3565V17.0742H16.8123V19.0742ZM23.417 25.6382H11.7517V27.6382H23.417V25.6382ZM11.7517 25.6382C11.3366 25.6382 11 25.3017 11 24.8865H9C9 26.4062 10.232 27.6382 11.7517 27.6382V25.6382ZM24.1688 24.8865C24.1688 25.3017 23.8322 25.6382 23.417 25.6382V27.6382C24.9368 27.6382 26.1688 26.4062 26.1688 24.8865H24.1688ZM18.3565 19.0742C21.5665 19.0742 24.1688 21.6765 24.1688 24.8865H26.1688C26.1688 20.5719 22.6711 17.0742 18.3565 17.0742V19.0742ZM16.8123 17.0742C12.4977 17.0742 9 20.5719 9 24.8865H11C11 21.6765 13.6022 19.0742 16.8123 19.0742V17.0742Z" fill="white" mask="url(#path-2-inside-1)"/>
            </svg>
          </button>
        </Navbar.Header>
        <Navbar.Header
          className='navbar-center'
        >
          <Link to='/'><img src={logo}/></Link>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem
              className = "font-menu"
              id = "log"
              onClick={this.handleShow}>
              SIGN UP
            </NavItem>
            <NavItem
              id = "log"
              className = "font-menu"
              onClick={this.handleShow}>
              LOG IN
            </NavItem>
          </Nav>
        </Navbar.Collapse>
        <ModalMenu
          state = {this.state.showMenu}
          onHide = {this.handleHide}
        />
        <ModalLog
          state = {this.state.showLog}
          onHide = {this.handleHide}
        />
      </Navbar>
    )
  }
}

export default NavbarHeader;
