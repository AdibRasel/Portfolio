import PublicBankLayout from "../Components/PublicBankLayout/PublicBankLayout"
import { Container, Row, Col, Button } from "react-bootstrap";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";


const ContactUs = () => {
    return <>
        <PublicBankLayout >

            <div style={{ backgroundColor: "#373e63", color: "#ffffff", paddingTop: "50px" }}>
                <Container>
                    <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px" }}>
                        Get in touch
                    </h2>

                    <p style={{ textAlign: "center", color: "#ffcc00", fontSize: "1.1rem", fontWeight: "bold", marginBottom: "20px" }}>
                        If you have any suggestions or complaints, please feel free to contact us.
                    </p>

                    <p style={{ textAlign: "center", color: "#cfd8dc", marginBottom: "50px" }}>
                        For software, Android, iPhone, desktop apps, or website development, reach out to us.
                    </p>


                    <Row>
                        <Col md={6} style={{ backgroundColor: "#ffffff", color: "#333333", padding: "30px", borderRadius: "8px", marginBottom: "20px" }}>
                            <div className="text-center mb-3">
                                <FaPhoneSquareAlt style={{ fontSize: "2.5rem", color: "rgb(71 79 122)" }} />
                            </div>
                            <h5 className="text-center" style={{ fontWeight: "bold", marginBottom: "15px" }}>Let’s talk, call us now</h5>

                            <p className="text-center" style={{ fontWeight: "bold", color: "rgb(71 79 122)", fontSize: "1.1rem" }}>+8801934-544352</p>
                            <p className="text-center" style={{ fontWeight: "bold", color: "rgb(71 79 122)", fontSize: "1.1rem" }}>+8801626-757897</p>
                        </Col>
                        <Col md={6} style={{ backgroundColor: "#ffffff", color: "#333333", padding: "30px", borderRadius: "8px", marginBottom: "20px" }}>
                            <div className="text-center mb-3">
                                <FaSquareFacebook style={{ fontSize: "2.5rem", color: "rgb(71 79 122)" }} />
                            </div>
                            <h5 className="text-center" style={{ fontWeight: "bold", marginBottom: "15px" }}>Connect on Facebook</h5>
                            <p className="text-center" style={{ color: "#666666", marginBottom: "20px" }}>
                                Sometimes you need a little help from your friends. Don’t worry… we’re here for you. Contact us on Facebook
                            </p>
                            <div className="text-center">
                                <a href="https://www.facebook.com/RaselHossainAdib" target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" style={{ backgroundColor: "rgb(71 79 122)" }}>Contact Facebook</Button>
                                </a>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


        </PublicBankLayout>

    </>
}
export default ContactUs