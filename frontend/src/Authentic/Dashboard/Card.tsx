import React from 'react';
import { FaRegEye } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BiCategory } from "react-icons/bi";
import { BsFillPostcardFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { MdMarkEmailRead } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";



const Card = () => {
    return (
        <>
            <div className="container mt-4">
                {/* First Row */}
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="card DashBoardcard shadow-lg border-light">
                            <div className="card-body text-center">
                                <h2 className="card-title text-dark">Profile</h2>
                                <h1 className="card-icon text-primary">
                                    <HiMiniUserGroup />
                                </h1>
                                <NavLink to="/AuthenticUserProfile">
                                    <button className="btn btn-primary mt-3">
                                        See <FaRegEye />
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="card DashBoardcard shadow-lg border-light">
                            <div className="card-body text-center">
                                <h2 className="card-title text-dark">Category</h2>
                                <h1 className="card-icon text-info">
                                    <BiCategory />
                                </h1>
                                <NavLink to="/AuthenticCategory">
                                    <button className="btn btn-info mt-3">
                                        See <FaRegEye />
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="card DashBoardcard shadow-lg border-light">
                            <div className="card-body text-center">
                                <h2 className="card-title text-dark">CV</h2>
                                <h1 className="card-icon text-warning">
                                    <BsFillPostcardFill />
                                </h1>
                                <NavLink to="/">
                                    <button className="btn btn-warning mt-3">
                                        See <FaRegEye />
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="card DashBoardcard shadow-lg border-light">
                            <div className="card-body text-center">
                                <h2 className="card-title text-dark">Portfolio Website</h2>
                                <h1 className="card-icon text-success">
                                    <CgWebsite />
                                </h1>
                                <NavLink to="/">
                                    <button className="btn btn-success mt-3">
                                        See <FaRegEye />
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className="row">

                    <div className="col-md-3 mb-4">
                        <div className="card DashBoardcard shadow-lg border-light">
                            <div className="card-body text-center">
                                <h4 className="card-title text-dark">Multiple Email Send</h4>
                                <h1 className="card-icon text-info">
                                    <SiAmazonsimpleemailservice />
                                </h1>
                                <NavLink to="/MultipleEmailSend">
                                    <button className="btn btn-info mt-3">
                                        See <FaRegEye />
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="card DashBoardcard shadow-lg border-light">
                            <div className="card-body text-center">
                                <h4 className="card-title text-dark">Thousend Email List</h4>
                                <h1 className="card-icon text-secondary">
                                    <MdMarkEmailRead />
                                </h1>
                                <NavLink to="/ThousendEmailList">
                                    <button className="btn btn-secondary mt-3">
                                        See <FaRegEye />
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3 mb-4">
                        <div className="card DashBoardcard shadow-lg border-light">
                            <div className="card-body text-center">
                                <h4 className="card-title text-dark">Home Page Settings</h4>
                                <h1 className="card-icon text-danger">
                                    <CiSettings />
                                </h1>
                                <NavLink to="/UserHomePageSettings">
                                    <button className="btn btn-danger mt-3">
                                        See <FaRegEye />
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    );
}

export default Card;
