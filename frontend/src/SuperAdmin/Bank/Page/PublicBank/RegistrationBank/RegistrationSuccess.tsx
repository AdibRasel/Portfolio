import React from 'react';

const RegistrationSuccess = () => {
 

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="text-center p-5 shadow-sm bg-white rounded w-50">
                <h2 className="text-success">Registration Successful!</h2>
                <p className="lead">Your application has been successful. You can check your mail and then start using the platform.</p>
                
                <div className="mt-4"> 
                    <h5>Contact Information</h5>
                    <p>
                        If you have any questions, feel free to reach out to us at:
                    </p>
                    <ul className="list-unstyled">
                        <li>Email: <a href="mailto:adibrasel.2022@gmail.com">adibrasel.2022@gmail.com</a></li>
                        <li>Phone: +8801934544352, +8801626757897</li>
                        <li>Website: <a href="https://adibrasel.github.io/My_Portfolio/" target="_blank" rel="noopener noreferrer">https://adibrasel.github.io/My_Portfolio/</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default RegistrationSuccess;
