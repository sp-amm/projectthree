//Reference for this code is "Adding Authentication in React using Auth0" - Youtube tutorial - by Auth0 - accessed 24 Jan 2021 - <https://www.youtube.com/watch?v=1rgeO_EbSGg>
import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout-button";
import LoginButton from "./Login-button";

//Main Navigation Bar Links 
const MainNav = () => (
    <Nav className="mr-auto">
        <Nav.Link
        as={RouterNavLink}
        to="/"
        exact
        activeClassName="router-link-exact-active"
        >
        Home
        </Nav.Link>
        <Nav.Link
        as={RouterNavLink}
        to="/profile"
        exact
        activeClassName="router-link-exact-active"
        >
        Profile
        </Nav.Link>
        <Nav.Link
        as={RouterNavLink}
        to="/sell"
        exact
        activeClassName="router-link-exact-active"
        >
        Sell
        </Nav.Link>
    </Nav>
);

//Showing logout button if authenticated & login Button if not.
const AuthNav = () => {
    const { isAuthenticated } = useAuth0();

    return(
        <Nav className="justify-content-end">
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Nav>
    )
}

const NavBar = () => {
    return (
        <Navbar bg="light" expand="md">
            <Container>
                {/* <Navbar.Brand as={RouterNavLink} className="logo" to="/"></Navbar.Brand> */}
                <MainNav />
                <AuthNav />
            </Container>
        </Navbar>
    )
    };

 export default NavBar;