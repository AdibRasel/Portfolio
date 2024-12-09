import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useNavigate } from 'react-router-dom';

import { FaGithubSquare, FaLinkedin, FaMailBulk, FaFacebookSquare, FaPhoneSquare } from "react-icons/fa";



import Logo from "Assets/Image/Logo.png"
import HeaderImage from "Assets/Image/Header-Image.png"







const UserLayout = (props: any) => {

    //   start TopBar 
    const navigate = useNavigate();

    const Login = () => {
        localStorage.clear();
        navigate('/Home');
        window.location.reload();
    }





    function formatDate() {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const currentDate = new Date();

        const monthName = months[currentDate.getMonth()];
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();

        return `${monthName} ${day}, ${year}`;
    }
    const formattedDate = formatDate();
    //   end TopBar 



    {/* Start Header */ }

    {/* End Header */ }






    {/* Start NavBarTop */ }

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            console.log(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    {/* End NavBarTop */ }





    // return start 
    return (<>


        {/* Start Topbar  */}
        <div className="TopBarBG p-1">


            <Container>
                <Row>

                    <Col sm={6} className='text-center text-sm-start '>


                        <div className="text-white justify-content-center">

                            <span className='text-light me-4'>{formattedDate}</span>

                            <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="https://github.com/AdibRasel" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaGithubSquare /> </span></a>
                            <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="https://www.linkedin.com/in/raselhossainadib/" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaLinkedin /> </span></a>
                            <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="mailto:adibrasel.2022@gmail.com" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaMailBulk /> </span></a>
                            <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="mailto:adibrasel.com@gmail.com" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaMailBulk />  </span></a>
                            <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="mailto:adibrasel.2024@gmail.com" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaMailBulk />  </span></a>
                            <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="https://www.facebook.com/RaselHossainAdib" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaFacebookSquare /> </span></a>
                            <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="tel:+8801934544352" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaPhoneSquare /> </span></a>
                            <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="tel:+8801626757897" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaPhoneSquare /> </span></a>

                        </div>

                    </Col>


                    <Col sm={6} className='text-center text-sm-end text-white'>


                        <NavLink className="TopBarNavLink" to="/Dashboard">
                            Dashboard
                        </NavLink>

                        <NavLink className="TopBarNavLink" to="/UserHome">
                            User Home
                        </NavLink>

                        <NavLink className="TopBarNavLink" to="/about">
                            About
                        </NavLink>

                        <NavLink className="TopBarNavLink" to="/contact">
                            Contact
                        </NavLink>

                        <span className="TopBarNavLink" onClick={Login}>
                            Log Out
                        </span>



                    </Col>
                </Row>
            </Container>

        </div>
        {/* End Topbar  */}








        {/* Start Header */}
        <Container>
            <Row className='Header'>
                <Col sm={4} className='text-center text-sm-start '>
                    <NavLink className="TopBarNavLink" to="/">
                        <img src={Logo} className='img-fluid HeaderLogo' alt="" />
                    </NavLink>

                </Col>


                <Col sm={8} className='text-center text-sm-end text-white'>
                    <NavLink className="TopBarNavLink" to="/">
                        <img src={HeaderImage} className='img-fluid HeaderImage' alt="" />
                    </NavLink>

                </Col>
            </Row>
        </Container>
        {/* End Header */}



        {/* Start NavBarTop */}
        <Container className='d-md-block d-none'>
            <div className="">
                <a href="https://adibrasel.github.io/Javascript/" target="_blank" rel="noreferrer"><span className="mt-md-0 mt-3 NavBarTopMenu"> Javascript </span></a>
                <a href="https://adibrasel.github.io/MongoDB/" target="_blank" rel="noreferrer"><span className="mt-md-0 mt-3 NavBarTopMenu"> MongoDB </span></a>
                <a href="https://adibrasel.github.io/Express_js/" target="_blank" rel="noreferrer"><span className="mt-md-0 mt-3 NavBarTopMenu"> Express JS </span></a>
                <a href="https://adibrasel.github.io/React_JS/index.html" target="_blank" rel="noreferrer"><span className="mt-md-0 mt-3 NavBarTopMenu"> React JS </span></a>
                <a href="https://adibrasel.github.io/Node_JS/" target="_blank" rel="noreferrer"><span className="mt-md-0 mt-3 NavBarTopMenu"> Node JS </span></a>
                <a href="https://adibrasel.github.io/API/" target="_blank" rel="noreferrer"><span className="mt-md-0 mt-3 NavBarTopMenu"> Rest API </span></a>
            </div>
        </Container>
        {/* End NavBarTop */}






        {/* props all info start  */}
        <div className="container">
            {props.children}
        </div>
        {/* props all info end  */}











    </>)
    // return end
}

export default UserLayout