
import { NavLink, } from 'react-router-dom';


import Container from 'react-bootstrap/Container';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome } from "react-icons/fa";
import { useState } from 'react';


const PublicUserHomeMenu = () => {



    // const [BloogIDis, SetBloogID] = useState<boolean>(false);


    const BloogIDis = false;
   
    

    // if(BloogID === "BloogID"){
    //     SetBloogID(true)
    // }else{
    //     SetBloogID(false)
    // }

    // useEffect(() => {
    //     if (BloogID == "BloogID") {
    //         SetBloogID(true)
    //     } else {
    //         SetBloogID(false)
    //     }
    //     // SetBloogID(!!BloogID);
    // }, [BloogID]);





    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
        const scrolled = window.scrollY > 0;
        setIsScrolled(scrolled);
    };
    window.addEventListener('scroll', handleScroll);

    

    return (<>
        {/* Navbar Menu start  */}
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
                        <Nav className="me-auto my-2 my-lg-0 PublicNavbarActive" style={{ maxHeight: '1000px' }} navbarScroll>
                            <NavLink className="TopBarNavLink" to="/UserHome">
                                <span className='NavBar'>Home</span>
                            </NavLink>
                            <NavLink className="TopBarNavLink" to="/ReadCategory">
                                <span className='NavBar'>Category</span>
                            </NavLink>
                            <NavLink className="TopBarNavLink" to="/ReadPost">
                                <span className='NavBar'>Post</span>
                            </NavLink>
                            <NavLink className={`TopBarNavLink${BloogIDis ? ' active' : ''}`} to="/ReadBloog">
                                <span className='NavBar'>Bloog</span>
                            </NavLink>
                            <NavLink className="TopBarNavLink" to="/about">
                                <span className='NavBar'>About</span>
                            </NavLink>
                            <NavLink className="TopBarNavLink" to="/contact">
                                <span className='NavBar'>Contact</span>
                            </NavLink>

                            <NavLink className="TopBarNavLink" to="/Login">
                                <span className='NavBar'>Login</span>
                            </NavLink>
                            <NavLink className="TopBarNavLink" to="/Registration">
                                <span className='NavBar'>Registration</span>
                            </NavLink>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
        {/* Navbar Menu End  */}
    </>)
}
export default PublicUserHomeMenu;