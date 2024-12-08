import { RecoverResetPass } from 'ApiService/ForgotPasswordAPIService/ForgotPasswordAPIService';
import React, { useEffect, useRef, useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'

import Swal from 'sweetalert2'


const NewPassword = () => {


    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState<string>("");

    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmpasswordRef = useRef<HTMLInputElement>(null);

    const [otpvalue, setOtp] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [userName, setUserName] = useState<string | null>(null);


    useEffect(() => {
        const OTP = localStorage.getItem('OTP');
        const storedUserEmail = localStorage.getItem('ForgotUserEmail');
        const storedUserName = localStorage.getItem('ForgotUserName');


        if (OTP) {
            setOtp(OTP);
            setUserEmail(storedUserEmail);
            setUserName(storedUserName);


        }
    }, []);



    const Submit = async () => {


        const passwordValue = passwordRef.current?.value?.trim();  // Trim spaces
        const confirmPasswordValue = confirmpasswordRef.current?.value?.trim();  // Trim spaces

        console.log("Password Value:", passwordValue);
        console.log("Confirm Password Value:", confirmPasswordValue);

        // Check if password and confirm password have at least 6 characters
        if (!passwordValue || passwordValue.length < 6 || !confirmPasswordValue || confirmPasswordValue.length < 6) {
            setErrorText("Please enter a password with at least 6 characters.");
            setLoading(false);
            return; // Exit early if either password is invalid
        }

        // Check if password and confirm password are the same
        if (passwordValue !== confirmPasswordValue) {
            setErrorText("Password and Confirm Password must match.");
            setLoading(false);
            return;
        }

        // Proceed with the rest of the code if validations pass






        setLoading(true);
        setErrorText(""); // Clear previous errors

        try {

            const PostBody = {
                email: userEmail,
                OTP: otpvalue,
                password: confirmPasswordValue
            }
            const resetPass = await RecoverResetPass(PostBody);

            // Check if resetPass and resetPass.data are defined and if status is a string
            if (resetPass?.data && typeof resetPass.data.data.message === "string" && resetPass.data.data.message === "OTP has already been used") {

                setErrorText(`${otpvalue} This OTP has already been used`);
                // Uncomment the line below if you want to navigate on OTP failure

            } else if (resetPass?.data && typeof resetPass.data.data.message === "string" && resetPass.data.data.message === "Invalid OTP or email") {

                setErrorText(`Invalid OTP or email. Please try again`);

            } else if (resetPass?.data && typeof resetPass.data.data.message === "string" && resetPass.data.data.message === "Password updated successfully") {

                // Set the interval time in milliseconds (e.g., 5000 for 5 seconds)
                const intervalTime = 1000;

                // Function to reload the page
                const reloadPage = () => {
                    //    window.location.reload();
                    // localStorage.clear();
                };

                Swal.fire({
                    title: "Success! Password Changed",
                    text: `${userName}, your password has been successfully updated.`,
                    icon: "success"
                });
                navigate('/Login');
                setInterval(reloadPage, intervalTime);

                // thes success
            }




        } catch (error) {
            console.error('Error calling RecoverVerifyEmail:', error);
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

                    <h2>New Password</h2>
                    <div className="form">

                        <div className="inputBox">
                            <input ref={passwordRef} type="password" /> <i>New Password</i>
                        </div>

                        <div className="inputBox">
                            <input ref={confirmpasswordRef} type="password" /> <i>Confirm New Password</i>
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
                            <NavLink to="/NewPassword">
                                <input onClick={Submit} type="submit" value="Submit" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>




    </>)
}

export default NewPassword