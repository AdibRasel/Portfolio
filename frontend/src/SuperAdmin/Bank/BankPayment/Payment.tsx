import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import PaymentInfo from "../Assets/PaymentLockBank.gif"
import axios from "axios";
import { useParams } from "react-router-dom";

const BankPayment: React.FC = () => {





    const { BankURL } = useParams<{ BankURL: string }>();
    // Change the initial state of BankData to an empty object
    const [BankData, SetBankData] = useState<any>({});


    useEffect(() => {
        const BankFullData = async () => {
            try {

                const response = await axios.get(
                    `http://localhost:5000/api/v1/ReadWithURL/${BankURL}`
                );
                const bankData = response.data?.data?.[0] || {};

                SetBankData(bankData);




            } catch (error) {
                console.error("Error fetching bank data:", error);
            } finally {
                console.error("Ok. Data Show Success");
            }
        };

        BankFullData();
    }, [BankURL]);



    return (
        <Container className="mt-5">
            <Row className="justify-content-center">


                <Col md={6}>
                    <Card className="shadow-sm border-0 mb-4">
                        <Card.Header as="h5" className="text-center rounded-top bg-warning text-dark">
                            Important Message
                        </Card.Header>
                        <Card.Body>
                            Dear <b>{BankData.BankName}</b>, <br />
                            Your service is currently <b> inactive </b> as the subscription period from <b> {new Date(BankData.StartDate).toLocaleDateString('en-GB')} </b> to <b>  {new Date(BankData.EndDate).toLocaleDateString('en-GB')}  </b> has ended. Kindly complete the payment to <b> reactivate </b> your bank service.
                            <img src={PaymentInfo} alt="Payment info image" />
                        </Card.Body>
                    </Card>
                </Col>


                <Col md={6}>
                    <Card className="shadow-sm border-0 mb-4">
                        <Card.Header as="h5" className="text-center rounded-top bg-primary text-white">
                            Payment Information
                        </Card.Header>

                        <Card.Body>

                            <div className="mb-2">
                                <span><strong>Bkash Personal Number:</strong> +8801934544352</span> <br />
                                <span><strong>Nogod Personal Number:</strong> +8801626757897</span> <br />
                                <span><strong>Bank Account:</strong> Bank Name <strong>Bank Asia </strong></span><br />
                                <span>Account Name: <strong>Rasal Hossain</strong></span><br />
                                <span>Account Number: <strong>1083475020738</strong></span><br />
                                <span>Routing Number: <strong>070270602</strong></span><br />
                            </div>

                        </Card.Body>
                        <Card.Footer >
                            <span className="text-muted">
                                Please settle the payment or contact <br />
                                Rasel Hossain at +8801934544352 or +8801626757897. <br />
                                You can also reach out on Facebook:
                                <a href="https://www.facebook.com/RaselHossainAdib" target="_blank" rel="noopener noreferrer"> Rasel Hossain Adib</a>. <br />
                                Thank you!
                            </span>
                        </Card.Footer>
                    </Card>
                </Col>


            </Row>
        </Container>
    );
};

export default BankPayment;
