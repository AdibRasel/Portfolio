import BankPayment from "SuperAdmin/Bank/BankPayment/Payment";
import PublicBankLayout from "../Components/PublicBankLayout/PublicBankLayout";

import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PublicBankHome = () => {
    const { BankURL } = useParams<{ BankURL: string }>();
    // const PaymentInfo = true;
    const [PaymentInfo, SePaymentInfo] = useState<boolean>(true);
    const [Loading, SetLoading] = useState<boolean>(false);
    // Change the initial state of BankData to an empty object
    const [BankData, SetBankData] = useState<any>({});

    useEffect(() => {
        const BankFullData = async () => {
            SetLoading(true);
            try {

                const response = await axios.get(
                    `https://portfolio-pah5.onrender.com/api/v1/ReadBank/${BankURL}`
                );
                const bankData = response.data?.data?.[0] || {};

                if(bankData.PaymentStatus === "Completed" && bankData.StatusBank === "Active"){
                    SePaymentInfo(true)
                    SetBankData(bankData);
                    localStorage.setItem("BankName", bankData.BankName); 
                }else{
                    SePaymentInfo(false)
                }

                SetLoading(false);


            } catch (error) {
                console.error("Error fetching bank data:", error);
            } finally {
                console.error("Ok. Data Show Success");
            }
        };

        BankFullData();
    }, [BankURL]);



    

    if (PaymentInfo) {
        return (
            <PublicBankLayout>

                {Loading && (
                    <div className="text-center m-2">
                        <div className="spinner-border text-black" role="status">
                            <span className="visually-hidden">Loading...</span>

                        </div>
                    </div>
                )}

                <div
                    className="d-flex align-items-center justify-content-between"
                    style={{
                        backgroundColor: '#f5f5f5',
                        padding: '50px',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >


                    <div style={{ maxWidth: '50%' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '3rem', color: '#000' }}>
                            <span style={{ color: 'rgb(71 79 122)' }}>{BankData.BankName}</span>
                        </span> <br />
                        <span style={{ fontWeight: 'bold', fontSize: '1rem', color: '#000' }}>
                            <span style={{ color: 'rgb(71 79 122)' }}>{BankData.BankAddress}</span>
                        </span>
                        <ul
                            style={{
                                listStyleType: "none",
                                padding: 0,
                                marginTop: '20px',
                                color: '#555',
                            }}
                        >
                           <NavLink to={`/AccountPrint/${BankURL}`}>
                                <li style={{ color: "#555" }}>✔ Account Print </li>
                            </NavLink>
                            <NavLink to={`/RemittanceCalculation/${BankURL}`}>
                                <li style={{ color: "#555" }}>✔ Remittance Calculation </li>
                            </NavLink>
                            <NavLink to={`/DPSCalculation/${BankURL}`}>
                                <li style={{ color: "#555" }}>✔ DPS Calculation </li>
                            </NavLink>
                            <NavLink to={`/FDRCalculation/${BankURL}`}>
                                <li style={{ color: "#555" }}>✔ FDR Calculation </li>
                            </NavLink>
                            <NavLink to={`/LoanCalculation/${BankURL}`}>
                                <li style={{ color: "#555" }}>✔ Loan Calculation </li>
                            </NavLink>
                            <li>
                                ✚ Need a new feature?&nbsp;
                                <NavLink to={`/ContactUs/${BankData.BankURL}`}>
                                    <u>
                                        <span style={{ color: "#333", fontWeight: "bold" }}>
                                            Contact us
                                        </span>
                                    </u>
                                </NavLink>
                                &nbsp; to get it added!
                            </li>
                        </ul>
                    </div>

                    <div style={{ width: '50%', position: 'relative' }}>
                        {BankData.OfficeImage ? (
                            <img
                                src={BankData.OfficeImage}
                                alt="Business"
                                style={{ width: '100%', borderRadius: '5px' }}
                            />
                        ) : (
                            <p>No image available</p>
                        )}
                    </div>
                </div>
            </PublicBankLayout>
        );
    } else {
        return <BankPayment />;
    }
};

export default PublicBankHome;
