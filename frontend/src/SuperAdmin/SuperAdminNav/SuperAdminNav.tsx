import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome } from "react-icons/fa";
import { NavLink } from 'react-router-dom';





const SuperAdminNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (<>




        <Container>

            <Navbar expand="lg" style={{ backgroundColor: "#ffffffeb" }} className={`${isScrolled ? 'fixed-top container px-3' : ''}`}>
                <Container fluid>
                    {/* <Navbar.Brand href="/"> */}
                    <NavLink className="TopBarNavLink" to="/">
                        <FaHome className='CommonColor CommonHover' />
                    </NavLink>
                    {/* </Navbar.Brand> */}

                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0 PublicNavbarActive" style={{ maxHeight: 'auto' }} navbarScroll>
                            <NavLink className="TopBarNavLink" to="/">
                                <span className='NavBar'>Home</span>
                            </NavLink>
                            <NavLink className="TopBarNavLink" to="/SuperAdminProfile">
                                <span className='NavBar'>Profile</span>
                            </NavLink>
                            <NavLink className="TopBarNavLink" to="/BankHome">
                                <span className='NavBar'>Bank Management</span>
                            </NavLink>
                            <NavLink className="TopBarNavLink" to="/PendingBank">
                                <span className='NavBar'>Pending Bank</span>
                            </NavLink>
                            <NavLink className="TopBarNavLink" to="/ActiveBank">
                                <span className='NavBar'>Active Bank</span>
                            </NavLink>


                            <NavLink className="TopBarNavLink" to="/UserHome">
                                <span className='NavBar'>Public Home</span>
                            </NavLink>
                            <NavLink className="TopBarNavLink" to="/SoftwareSettings">
                                <span className='NavBar'>Software Settings</span>
                            </NavLink>

                            {/* Uncomment and add your other NavLinks here */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>



    </>)
}

export default SuperAdminNav