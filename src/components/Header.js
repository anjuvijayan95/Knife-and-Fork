import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" variant="dark"  style={{backgroundColor:'transparent'}}>
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://s.tmimgcdn.com/scr/1200x627/212900/spoon-and-fork-restaurant-logo_212966-original.png"
          width="90"
          height="70"
          className="d-inline-block align-center"
        />{' '}
        Knife & Fork
      </Navbar.Brand>
    </Container>
  </Navbar>    
  )
}

export default Header
