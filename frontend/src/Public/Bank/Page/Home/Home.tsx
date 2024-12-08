import SuperAdminLayout from "SuperAdmin/SuperAdminLayout/SuperAdminLayout"
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import BankManagment from "../../Assets/BankManagment.gif"
import AnimationDotGrid from "Common/Animation/AnimationDotGrid";
import axios from "axios";


interface BankInfoResponse {
    status: string;
    AllBank: number;
    PendingBank: number;
    ActiveBank: number;
    message?: string;
}

const Home = () => {


    const [Loading, SetLoading] = useState<boolean>(false);


    const [allBank, setAllBank] = useState<number>(0);
    const [pendingBank, setPendingBank] = useState<number>(0);
    const [activeBank, setActiveBank] = useState<number>(0);
    const [error, setError] = useState<string>("");

    useEffect(() => {

        SetLoading(true)

        // Function to fetch bank data
        const fetchBankInfo = async () => {
            try {
                const response = await axios.get<BankInfoResponse>(
                    "https://portfolio-pah5.onrender.com/api/v1/AllBankInfo" // Replace with your actual API endpoint
                );

                if (response.data.status === "Success") {
                    setAllBank(response.data.AllBank);
                    setPendingBank(response.data.PendingBank);
                    setActiveBank(response.data.ActiveBank);
                    SetLoading(false)

                } else {
                    setError(response.data.message || "Failed to fetch bank data");
                }
            } catch (err: unknown) {
                if (axios.isAxiosError(err)) {
                    setError(err.message || "An error occurred while fetching bank data");
                } else {
                    setError("Unexpected error occurred.");
                }
            }
        };
        // SetLoading(false)


        fetchBankInfo();


    }, []);


    return <>


        <div className="position-relative" style={{ minHeight: 'auto', height: 'auto', width: '100%' }}>
            {/* Background DotGrid */}
            <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0, minHeight: 'auto', height: 'auto', width: '100%' }}>
                {/* <DotGrid /> */}
                <AnimationDotGrid />
            </div>


            <SuperAdminLayout>





                <div className="card" style={{ backgroundColor: "#cccccceb" }}>
                    <div className="card-header" style={{ fontWeight: 'bold', color: "black" }}>
                        Bank Management
                    </div>


                    <div className="card-body">

                        <div className="row">
                            {/* Left Side Start  */}

                            <div className="col-md-6">

                                <div className="card DashBoardcard shadow-lg border-light" style={{ backgroundColor: "rgb(20 112 190 / 61%)" }}>
                                    <div className="card-body text-center">
                                        <h4 className="card-title text-white">Total Registered Banks</h4>
                                        <h2 className="card-icon text-white" style={{ fontWeight: "bold" }}>
                                            {/* <FaHome /> */}
                                            <span style={{ border: "1px solid white", borderRadius: "50%", padding: "5px" }}> {allBank} {error} </span>
                                        </h2>
                                        {Loading && (
                                            <div className="text-left">
                                                <div className="spinner-border text-black" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    {/* Active start  */}
                                    <div className="col-md-6 mt-3">
                                        <NavLink style={{ cursor: "pointer" }} to="/PendingBank">
                                            <div className="card DashBoardcard shadow-lg border-light bg-warning" >
                                                <div className="card-body text-center">
                                                    <h5 className="card-title text-black">Pending Bank <span style={{ border: "1px solid black", borderRadius: "50%", padding: "5px" }}>
                                                        {pendingBank} {error}
                                                    </span></h5>
                                                    {Loading && (
                                                        <div className="text-left">
                                                            <div className="spinner-border text-black" role="status">
                                                                <span className="visually-hidden">Loading...</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>

                                    {/* Panding Start  */}
                                    <div className="col-md-6 mt-3">
                                        <NavLink style={{ cursor: "pointer" }} to="/ActiveBank">
                                            <div className="card DashBoardcard shadow-lg border-light bg-success ">
                                                <div className="card-body text-center">
                                                    <h5 className="card-title text-white">Active Bank <span style={{ border: "1px solid white", borderRadius: "50%", padding: "5px" }}>
                                                        {activeBank} {error}
                                                    </span></h5>
                                                    {Loading && (
                                                        <div className="text-left">
                                                            <div className="spinner-border text-black" role="status">
                                                                <span className="visually-hidden">Loading...</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>

                                <NavLink style={{ cursor: "pointer" }} to="/RegistrationBank">
                                    <div className="card DashBoardcard shadow-lg border-light mb-3" style={{ backgroundColor: "rgb(20 112 190 / 61%)" }}>
                                        <div className="card-body text-center">
                                            <h5 className="card-title text-white">Registration Bank</h5>
                                        </div>
                                    </div>
                                </NavLink>

                            </div>
                            {/* Left Side End  */}


                            {/* Right Side Start  */}
                            <div className="col-md-6">
                                <img src={BankManagment} className="img-fluid rounded" alt="" />
                            </div>
                            {/* Right Side End  */}
                        </div>




                    </div>
                </div>


            </SuperAdminLayout >

        </div >



    </>
}
export default Home