
import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useParams } from "react-router-dom";



import {  FaLinkedin, FaMailBulk, FaFacebookSquare, FaPhoneSquare } from "react-icons/fa";
import AnimationDotGrid from 'Common/Animation/AnimationDotGrid';

// Define the props for PublicBankLayout
interface PublicBankLayoutProps {
  children: ReactNode; // Specifies that children can be any valid React element
}
// const { BankURL } = useParams<{ BankURL: string }>();

const PublicBankLayout: React.FC<PublicBankLayoutProps> = ({ children }) => {

  // useEffect(() => {

  // }, []);
  const BankName = localStorage.getItem("BankName");
  const currentYear = new Date().getFullYear();


  function formatDate() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentDate = new Date();

    const monthName = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    return `${monthName} ${day}, ${year}`;
  }
  const formattedDate = formatDate();

  const { BankURL } = useParams<{ BankURL: string }>();


  return (
    <>

      {/* Header Start  */}
      <div className="CommonBG p-1"></div>

      <div className="TopBarBG">


        <Container>
          <Row>





            <Col sm={8} className='text-center text-sm-start text-white'>

              <NavLink className="TopBarNavLink" to={`/MyBank/${BankURL}`}>
                Home
              </NavLink>

              <NavLink className="TopBarNavLink" to={`/AccountPrint/${BankURL}`}>
                Account Print
              </NavLink>

              <NavLink className="TopBarNavLink" to={`/RemittanceCalculation/${BankURL}`}>
                Remittance Calculation
              </NavLink>

              <NavLink className="TopBarNavLink" to={`/DPSCalculation/${BankURL}`}>
                DPS Calculation
              </NavLink>

              <NavLink className="TopBarNavLink" to={`/FDRCalculation/${BankURL}`}>
                FDR Calculation
              </NavLink>

              <NavLink className="TopBarNavLink" to={`/LoanCalculation/${BankURL}`}>
                Loan Calculation
              </NavLink>


              <NavLink className="TopBarNavLink" to={`/ContactUs/${BankURL}`}>
                Contact
              </NavLink>


            </Col>








            <Col sm={4} className='text-center   text-sm-end'>


              <div className="text-white justify-content-center">


                <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="https://www.facebook.com/RaselHossainAdib" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaFacebookSquare /> </span></a>
                <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="https://www.linkedin.com/in/raselhossainadib/" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaLinkedin /> </span></a>
                <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="mailto:adibrasel.com@gmail.com" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaMailBulk />  </span></a>
                <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="tel:+8801934544352" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaPhoneSquare /> </span></a>
                <a style={{ textDecoration: "none", color: "white", paddingRight: "5px" }} href="tel:+8801626757897" target="_blank" rel="noopener noreferrer"><span className='CommonHover'> <FaPhoneSquare /> </span></a>

                <span className='text-light me-4'>{formattedDate}</span>

              </div>

            </Col>




          </Row>
        </Container>

      </div>
      {/* Header End */}


      <div className="position-relative" style={{ minHeight: 'auto', height: 'auto', width: '100%' }}>
        {/* Background DotGrid */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0, minHeight: 'auto', height: 'auto', width: '100%' }}>
          {/* <DotGrid /> */}
          <AnimationDotGrid />
        </div>

        {/* All content */}
        <div className="position-relative container" style={{ zIndex: 1, backgroundColor: "#909293d6" }}>
          {children} {/* This renders the children elements passed to the component */}
        </div>
      </div>



      <footer style={footerStyle}>
        <p>&copy; {currentYear} {BankName}. All rights reserved.</p>
      </footer>
    </>

  );
};


const footerStyle: React.CSSProperties = {
  backgroundColor: 'rgb(71 79 122)',
  padding: '10px',
  textAlign: 'center',
  color: "white",
};
export default PublicBankLayout;
