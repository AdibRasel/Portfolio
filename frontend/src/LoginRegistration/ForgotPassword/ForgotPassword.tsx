import { RecoverVerifyEmail } from 'ApiService/ForgotPasswordAPIService/ForgotPasswordAPIService';
import React, { useRef, useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'



const ForgotPassword = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState<string>("");
    // const [userEmailAddress, setUserEmailAddress] = useState<string>("");
    // const [userName, setUserName] = useState<string>("");

    const userEmail = useRef<HTMLInputElement>(null);

    const Submit = async () => {


        const userEmailValue = userEmail.current?.value;

        if (!userEmailValue || userEmailValue.length < 8) {
            setErrorText("Please enter a valid email address (at least 8 characters).");
            setLoading(false);

            return; // Exit early if the email is invalid
        }

        setLoading(true);
        setErrorText(""); // Clear previous errors

        try {
            const recoverPass = await RecoverVerifyEmail(userEmailValue);

            if (recoverPass?.data?.data?.ForgetenUserName) {
                // setUserName(recoverPass.data.data.ForgetenUserName);
                // setUserEmailAddress(userEmailValue);
                localStorage.setItem('ForgotUserName', recoverPass.data.data.ForgetenUserName);
                localStorage.setItem('ForgotUserEmail', userEmailValue);
                navigate('/otp');
            } else {
                setErrorText("No account found for this email: " + userEmailValue);
            }
        } catch (error) {
            console.error('Error calling RecoverVerifyEmail:', error);
            setErrorText("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }

        console.log('User email:', userEmailValue);
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

                    <h2>Forgot Password</h2>
                    <div className="form">
                        <div className="inputBox">
                            <input ref={userEmail} type="email" placeholder='Email Address' /> <i>Enter your forgotten account Email</i>
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
                            {/* <NavLink to="/OTP"> */}
                            <NavLink to="/ForgotPassword">
                                {/* <button> */}

                                <input onClick={Submit} type="submit" value="Next" />
                                {/* </button> */}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>







    </>)
}

export default ForgotPassword