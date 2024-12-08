import { RecoverVerifyOTP } from 'ApiService/ForgotPasswordAPIService/ForgotPasswordAPIService';
import React, { useEffect, useRef, useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'


const OTP = () => {

    const navigate = useNavigate();


    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState<string>("");

    const [userName, setUserName] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        const storedUserName = localStorage.getItem('ForgotUserName');
        const storedUserEmail = localStorage.getItem('ForgotUserEmail');
        if (storedUserName) {
            setUserName(storedUserName);
            setUserEmail(storedUserEmail);
        }
    }, []);

    const OtpRef = useRef<HTMLInputElement>(null);


    const Submit = async () => {


        const otpValue = OtpRef.current?.value;

        if (!otpValue || otpValue.length < 6) {
            setErrorText("Please enter a valid OTP (at least 6 characters).");
            setLoading(false);

            return; // Exit early if the email is invalid
        }

        setLoading(true);
        setErrorText(""); // Clear previous errors

        try {
            const otpData = await RecoverVerifyOTP(userEmail, otpValue);


            // Check if otpData and otpData.data are defined and if status is a string
            if (otpData?.data && typeof otpData.data.data.data === "string" && otpData.data.data.data === "Invalid OTP Code") {
               
                setErrorText(`${otpValue} is incorrect. Please check and try again.`);
                // Uncomment the line below if you want to navigate on OTP failure

            }else if(otpData?.data && typeof otpData.data.data.data === "string" && otpData.data.data.data === "OTP Code already used"){
                
                setErrorText(`${otpValue} This OTP Code already used. Pleasy try again.`);

            }else if(otpData?.data && typeof otpData.data.data.status === "string" && otpData.data.data.status === "success") {
               
                // thes success
                localStorage.setItem('OTP', otpValue);
                navigate('/NewPassword');
                // Handle successful OTP verification here
            }


        } catch (error) {
            console.error('Error calling RecoverVerifyOTP:', error);
            setErrorText("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }


    };




    return (<>





        <section className='SectionBG'>
            {[...Array(100)].map((_, index) => (
                <span key={index}></span>
            ))}
            <div className="signin">
                <div className="content">

                    <div className="text-center">
                        <NavLink to="/" className="p-2">
                            Home
                        </NavLink>
                        <NavLink to="/" className="p-2">
                            About
                        </NavLink>
                        <NavLink to="/" className="p-2">
                            Contact
                        </NavLink>
                    </div>


                    <h2>OTP</h2>

                    <div style={{ color: "white" }} className='mb-2'>
                        Dear, <b> {userName} </b> <br />
                        Check your email <u>{userEmail}</u> for the 6-digit OTP code.
                    </div>


                    <div className="form">
                        <div className="inputBox">
                            <input ref={OtpRef} type="string" className='InputOTP' maxLength={6} pattern="\d{6}" /> <i>Enter the 6 digit number in your Email address</i>
                        </div>


                        {loading && <div className="spinner-border text-black text-center m-2" role="status"><span className="visually-hidden">Loading...</span></div>}

                        <div className='text-danger'>{errorText}</div>


                        <div className="links">
                            <NavLink to="/Registration">
                                Registration
                            </NavLink>
                            <NavLink to="/Login">
                                Login
                            </NavLink>
                        </div>
                        <div className="inputBox">
                            <NavLink to="/otp">
                                <input onClick={Submit} type="submit" value="Next" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>




    </>)
}

export default OTP