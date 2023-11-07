import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

import styles from "./Navbar.module.css";

import logo from "../../img/logo-sm.png";
import search from "../../img/search-icon-sm.png";
import cart from "../../img/cart-sm.png";

function Navigation() {
  return (
    <div className={styles.nav_wrapper}>
      <div className="navbar navbar-toggleable-sm navbar-expand-md bg-black">
        <div className="container">
          <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="/">
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="nav-justified w-100 nav-fill">
                <Nav.Link href="/loja">Loja</Nav.Link>
                <Nav.Link href="/">Mac</Nav.Link>
                <Nav.Link href="/">iPad</Nav.Link>
                <Nav.Link href="/">iPhone</Nav.Link>
                <Nav.Link href="/">Watch</Nav.Link>
                <Nav.Link href="/">AirPods</Nav.Link>
                <Nav.Link href="/">TV e Casa</Nav.Link>
                <Nav.Link href="/">Entretenimento</Nav.Link>
                <Nav.Link href="/">Acessórios</Nav.Link>
                <Nav.Link href="/">Suporte</Nav.Link>
                <Nav.Link href="/">
                  <img src={search} alt="" />
                </Nav.Link>
                <Nav.Link href="/cart">
                  <img src={cart} alt="" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default Navigation;