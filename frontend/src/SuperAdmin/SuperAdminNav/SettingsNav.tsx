import React from 'react';

import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const SettingsNav =() =>{
    return<>
    


    <hr />

    <Nav className="me-auto my-2 my-lg-0 PublicNavbarActive" style={{ maxHeight: '100px' }} navbarScroll>
        <NavLink className="TopBarNavLink" to="/SoftwareSettings/HomePageSettings">
            <u className='NavBar'>Home Page Settings</u>
        </NavLink>
        <NavLink className="TopBarNavLink" to="/SoftwareSettings/LoginPageSettings">
            <u className='NavBar'>Login Page Settings</u>
        </NavLink>
        <NavLink className="TopBarNavLink" to="/SoftwareSettings/RegistrationPageSettings">
            <u className='NavBar'>Registration Page Settings</u>
        </NavLink>
        <NavLink className="TopBarNavLink" to="/SoftwareSettings/ForgotPasswordPageSettings">
            <u className='NavBar'>Forgot Password Page Settings</u>
        </NavLink>
        {/* <NavLink className="TopBarNavLink" to="/AuthenticProfile">
            <u className='NavBar'>Profile</u>
        </NavLink> */}
        <NavLink className="TopBarNavLink" to="/SoftwareSettings/OTPPageSettings">
            <u className='NavBar'>OTP Page Settings</u>
        </NavLink>
        <NavLink className="TopBarNavLink" to="/SoftwareSettings/NewPasswordPageSettings">
            <u className='NavBar'>New Password Page Settings</u>
        </NavLink>
        <NavLink className="TopBarNavLink" to="/SoftwareSettings/FooterSettings">
            <u className='NavBar'>Footer Settings</u>
        </NavLink>
        
    </Nav>











    </>
}



export default SettingsNav