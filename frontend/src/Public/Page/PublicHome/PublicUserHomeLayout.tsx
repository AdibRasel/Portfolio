
import React from 'react'

import { NavLink } from 'react-router-dom'




import BackToTopButton from 'Common/BackToTopButton/BackToTopButton'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useNavigate } from 'react-router-dom';





import Logo from "Assets/Image/Logo.png"
import LogoInfo from "Assets/Image/LogoInfo.png"




import PublicUserSocialLink from './PublicUserSocialLink'
import PublicUserHomeMenu from './PublicUserHomeComponents/PublicUserHomeMenu';

const PublicUserHomeLayout = (props: any) => {

    const navigate = useNavigate();

























    const LogoUrl = localStorage.getItem('Logo');
    const LogoInfoUrl = localStorage.getItem('LogoInfoImage');

    const FooterText = localStorage.getItem('FooterText');





    const LogOut = () => {
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







    return (<>



        {/* TopBar start  */}
        <div className="TopBarBG p-1">


            <Container>
                <Row>

                    <Col sm={5} className='text-center text-sm-start '>


                        <div className="text-white justify-content-center">

                            <span className='text-light me-4'>{formattedDate}</span>
                            <PublicUserSocialLink />
                        </div>

                    </Col>


                    <Col sm={7} className='text-center text-sm-end text-white'>




                        <NavLink className="TopBarNavLink" to="/UserHome">
                            Home
                        </NavLink>

                        <NavLink className="TopBarNavLink" to="/ReadCategory">
                            Category
                        </NavLink>

                        <NavLink className="TopBarNavLink" to="/ReadPost">
                            Post
                        </NavLink>


                        <NavLink className="TopBarNavLink" to="/ReadBloog">
                            Bloog
                        </NavLink>

                        <NavLink className="TopBarNavLink" to="/about">
                            About
                        </NavLink>

                        <NavLink className="TopBarNavLink" to="/contact">
                            Contact
                        </NavLink>

                        <NavLink className="TopBarNavLink" to="/Login">
                            Login
                        </NavLink>

                        <NavLink className="TopBarNavLink" to="/Registration">
                            Registration
                        </NavLink>



                    </Col>
                </Row>
            </Container>

        </div>
        {/* TopBar End  */}




        {/* Logo and Logo Title start  */}
        <Container>
            <Row className='Header'>
                <Col sm={4} className='text-center text-sm-start '>
                    <NavLink className="TopBarNavLink" to="/">
                        {/* <img src={Logo} className='img-fluid rounded HeaderLogo' alt="" /> */}
                        {LogoUrl ? (
                            <img src={LogoUrl} className='img-fluid rounded HeaderLogo' alt="Logo" />
                        ) : (
                            <img src={Logo} className='img-fluid rounded HeaderLogo' alt="Placeholder Logo" />
                        )}
                    </NavLink>

                </Col>


                <Col sm={8} className='text-center text-sm-end text-white'>
                    <NavLink className="TopBarNavLink" to="/">
                        {/* <img src={HeaderImage} className='img-fluid rounded HeaderImage' alt="" /> */}
                        {LogoInfoUrl ? (
                            <img src={LogoInfoUrl} className='img-fluid rounded HeaderImage' alt="Logo" />
                        ) : (
                            <img src={LogoInfo} className='img-fluid rounded HeaderImage' alt="Placeholder Logo" />
                        )}
                    </NavLink>

                </Col>
            </Row>
        </Container>
        {/* Logo and Logo Title end  */}





        <div className="container">
            {props.children}
        </div>




        {/* Navbar Menu start  */}
        <PublicUserHomeMenu />
        {/* Navbar Menu End  */}




        {/* Footer Start  */}
        <footer style={footerStyle}>
            {FooterText ? (
                <p>{FooterText}</p>
            ) : (
                <p>&copy; 2024 Rasel Hossain Adib. All rights reserved.</p>
            )}
        </footer>
        {/* Footer end */}
        <BackToTopButton />



    </>)
}

const footerStyle: React.CSSProperties = {
    backgroundColor: '#1F2544',
    padding: '10px',
    textAlign: 'center',
    color: "white",
    marginTop: "10px"
};

export default PublicUserHomeLayout