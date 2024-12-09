import React from 'react'
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useNavigate } from 'react-router-dom';

import UserSocialLink from 'Authentic/UserHome/UserSocialLink';

const TopBar = () => {

  const navigate = useNavigate();



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

    <div className="CommonBG p-1"></div>

    <div className="TopBarBG p-1">


      <Container>
        <Row>

          <Col sm={5} className='text-center text-sm-start '>


            <div className="text-white justify-content-center">

              <span className='text-light me-4'>{formattedDate}</span>
              <UserSocialLink />
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

            <NavLink className="TopBarNavLink" to="/Dashboard">
              Dashboard
            </NavLink>

            <NavLink className="TopBarNavLink" to="/about">
              About
            </NavLink>

            <NavLink className="TopBarNavLink" to="/contact">
              Contact
            </NavLink>

            <span className="TopBarNavLink" onClick={LogOut}>
              Log Out
            </span>



          </Col>
        </Row>
      </Container>

    </div>


  </>)
}

export default TopBar