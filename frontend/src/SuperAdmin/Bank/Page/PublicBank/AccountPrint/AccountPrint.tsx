import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from 'react-to-print';
import PublicBankLayout from "../Components/PublicBankLayout/PublicBankLayout";
import QRCode from "react-qr-code";
import { RiCustomerService2Fill } from "react-icons/ri";

import ImoIcon from "../../../Assets/ImoIcon.png"
import WhatsppIcon from "../../../Assets/WhatsppIcon.png"
import EmailIcon from "../../../Assets/EmailIcon.png"
import axios from "axios";
import BankPayment from "SuperAdmin/Bank/BankPayment/Payment";
import { useParams } from "react-router-dom";




const AccountPrint: React.FC = () => {




    const { BankURL } = useParams<{ BankURL: string }>();
    // const PaymentInfo = true;
    const [PaymentInfo, SePaymentInfo] = useState<boolean>(true);
    const [Loading, SetLoading] = useState<boolean>(false);
    // Change the initial state of BankData to an empty object
    const [BankData, SetBankData] = useState<any>({});

    const [TempleteDesign, SetTempleteDesign] = useState<any>("TemplateOne");


    useEffect(() => {
        const BankFullData = async () => {
            SetLoading(true);
            try {

                const response = await axios.get(
                    `http://localhost:5000/api/v1/ReadBank/${BankURL}`
                );
                const bankData = response.data?.data?.[0] || {};

                if (bankData.PaymentStatus === "Completed" && bankData.StatusBank === "Active") {
                    SePaymentInfo(true)
                    SetTempleteDesign(bankData.Template)
                    SetBankData(bankData);
                    localStorage.setItem("BankName", bankData.BankName); 
                } else {
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









    const acTitleRef = useRef<HTMLInputElement>(null);
    const acNoRef = useRef<HTMLInputElement>(null);
    const acMobileNoRef = useRef<HTMLInputElement>(null);

    const printRef = useRef<HTMLDivElement | null>(null);

    const [isSubmitHovered, setIsSubmitHovered] = useState(false);
    const [isPrintHovered, setIsPrintHovered] = useState(false);

    const [AcTitle, SetAcTitle] = useState<string>("");
    const [AcNumber, SetAcNumber] = useState<string>("");
    const [AcMobileNumber, SetAcMobileNumber] = useState<string>("");
    const [AccountAllInfo, SetAccountAllInfo] = useState<string>("");




    const [ACLengthValadation, SetACLengthValadation] = useState<string>("");
    const [ACNameLengthValadation, SetACNameLengthValadation] = useState<string>("");
    const [NumberLengthValadation, SetNumberLengthValadation] = useState<string>("");



    const handleSubmit = () => {
        const AC_Title_Input = acTitleRef.current?.value || "";
        const AC_No_Input = acNoRef.current?.value || "";
        const AC_Mobile_No_Input = acMobileNoRef.current?.value || "";

        const ACLengthRequerd = Number(BankData.BankAccountLength); // Ensure it's a number, fallback to 0 if undefined
        const ACLengthA = ACLengthRequerd - 1;
        const ACLengthB = ACLengthRequerd + 1;

        const ACLength = Number(AC_No_Input.length);
        const ACNameLength = Number(AC_Title_Input.length);
        const NumberLength = Number(AC_Mobile_No_Input.length);

        if (ACLength > ACLengthA && ACLength < ACLengthB) {
            SetACLengthValadation("")

            if (ACNameLength >= 3) {
                SetACNameLengthValadation("")

                if (NumberLength > 10 && NumberLength < 12) {
                    SetNumberLengthValadation("")

                    SetAcTitle(AC_Title_Input);
                    SetAcNumber(AC_No_Input);
                    SetAcMobileNumber(AC_Mobile_No_Input);

                    SetAccountAllInfo(
                        `${BankData.BankName}, Branch Name: ${BankData.BranchName}, AC No: ${AC_No_Input}, AC Name: ${AC_Title_Input},  Routing Number: ${BankData.RoutingNumber}.`
                    );

                } else {
                    SetNumberLengthValadation(`The number must be 11 digits, as per BD standards.`);
                    SetAcTitle("");
                    SetAcNumber("");
                    SetAcMobileNumber("");
                    SetAccountAllInfo("");
                }

            } else {
                SetACNameLengthValadation(`A valid account name requires at least 3 characters.`);
                SetAcTitle("");
                SetAcNumber("");
                SetAcMobileNumber("");
                SetAccountAllInfo("");

            }





        } else {
            SetACLengthValadation(`Ensure the bank account number contains   ${BankData.BankAccountLength} digits.`);
            SetAcTitle("");
            SetAcNumber("");
            SetAcMobileNumber("");
            SetAccountAllInfo("");
        }



    };








    const formatDate = (): string => {
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const formattedDate = formatDate();











    const renderTemplate = () => {
        if (TempleteDesign === "TemplateOne") {
            return (
                <>
                    {/* ================================= Template 1 start ============================== */}
                    <div ref={printRef} className="p-4">

                        {/* <div className="p-3 rounded" style={{ width: "100%", backgroundColor: "white", border: `2px solid ${BankData.borderColor}` }}> */}
                        <div className="p-3 rounded" style={{ width: "100%", backgroundColor: "white", border: `2px solid ${BankData.BorderColor}` }}>
                            <div style={{ display: "flex" }}>
                                <div className="" style={{ width: "65%" }}>
                                    <img src={BankData.BankLogo ?? undefined} style={{ width: "100%", height: "65px" }} alt="Bank Asia" className="rounded img-fluid" />
                                </div>
                                <div className="" style={{ width: "35%", borderLeft: `0.1px solid ${BankData.BorderColor}`, marginLeft: "5px", paddingLeft: "5px" }}>
                                    {/* Bank Name  */}
                                    <h6 className="mb-0"><strong style={{ fontWeight: "bold", color: `${BankData.BorderColor}` }}> {BankData.BankName}</strong> </h6>
                                    {/* Bank Address  */}
                                    <span>{BankData.BankAddress}</span>
                                </div>
                            </div>
                            <h6 className="mt-2 text-center"><strong> Account Information </strong></h6>
                            <table className="table table-bordered rounded text-left  mb-0 table-bordered">
                                <tbody className="thead-dark">
                                    <tr className="rounded" style={{ border: `1px solid ${BankData.BorderColor}`, borderRadius: "5px", }}>
                                        <td style={{ padding: "2px 0px 2px 10px", }}><strong>Account Name</strong></td>
                                        <td style={{ width: "60%", padding: "2px 0px 2px 10px", fontWeight: "bold" }}>{AcTitle}</td>
                                    </tr>
                                    <tr className="rounded" style={{ border: `1px solid ${BankData.BorderColor}`, borderRadius: "5px", }}>
                                        <td style={{ padding: "2px 0px 2px 10px" }}><strong>Account Number</strong></td>
                                        <td style={{ width: "60%", padding: "2px 0px 2px 10px", fontWeight: "bold" }}>{AcNumber}</td>
                                    </tr>
                                    <tr className="rounded" style={{ border: `1px solid ${BankData.BorderColor}`, borderRadius: "5px", }}>
                                        <td style={{ padding: "2px 0px 2px 10px" }}><strong>Account Mobile No</strong></td>
                                        <td style={{ width: "60%", padding: "2px 0px 2px 10px", fontWeight: "bold" }}>{AcMobileNumber}</td>
                                    </tr>
                                </tbody>
                            </table>




                            <div style={{ display: "flex", marginTop: "5px" }}>

                                <div style={{ width: "45%", padding: "5px", textAlign: "center", }} className="">
                                    <p style={{ fontSize: "14px", lineHeight: "13px", textAlign: "center", marginBottom: "0px" }}>Scan For Account <br /> Information</p>

                                    <div style={{ height: "auto", width: "35%", marginTop: "5px", justifySelf: "center" }}>
                                        <QRCode
                                            size={256}
                                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                            value={AccountAllInfo}
                                            viewBox="0 0 256 256"
                                        />
                                    </div>

                                    <p style={{ fontSize: "10px", lineHeight: "12px", textAlign: "center", marginBottom: "0px" }}>
                                        Looking for a quick bank account information print service? Contact +8801934544352
                                    </p>
                                </div>



                                <div style={{ width: "55%", padding: "5px", paddingLeft: "10px", borderLeft: `0.1px solid ${BankData.BorderColor}` }} className="">

                                    <p style={{ fontSize: "14px", lineHeight: "18px", marginBottom: "8px" }}>
                                        <strong>Branch Name:</strong> {BankData.BranchName} <br />
                                        <strong>Routing Number:</strong> {BankData.RoutingNumber} <br />
                                        <strong>Swift Code:</strong> {BankData.SwiftCode} <br />
                                    </p>

                                    <p style={{ fontSize: "14px", lineHeight: "18px", marginBottom: "0px" }}>

                                        <strong>Office Contact: </strong>
                                        <span>
                                            {BankData.OfficeNumberOneWhatsApp && (
                                                <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                            )}&nbsp;
                                            {BankData.OfficeNumberOneImo && (
                                                <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                            )}&nbsp;
                                            {BankData.OfficeNumberOne}<br />
                                        </span>

                                        {/* Office Number 2 Logic Start  */}
                                        {BankData.OfficeNumberTwo && (
                                            <span style={{ paddingLeft: "106px", }}>
                                                {BankData.OfficeNumberTwoWhatsApp && (
                                                    <>
                                                        <span>

                                                            <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                                            &nbsp;
                                                        </span>

                                                    </>
                                                )}
                                                {BankData.OfficeNumberTwoImo && (
                                                    <>
                                                        <span>
                                                            <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                                            &nbsp;
                                                        </span>
                                                    </>
                                                )}


                                                {BankData.OfficeNumberTwo}<br />
                                            </span>
                                        )}
                                        {/* Office Number 2 Logic End  */}







                                        <strong>Email: </strong>
                                        <span>
                                            <img src={EmailIcon} style={{ width: "14px" }} alt="" /> {BankData.OfficeEmailOne}
                                        </span>

                                        {/* Office Email 2 Logic Start  */}
                                        {BankData.OfficeEmailTwo && (
                                            <>
                                                <br />
                                                <span style={{ paddingLeft: "44px", }}>
                                                    <img src={EmailIcon} style={{ width: "14px" }} alt="" /> {BankData.OfficeEmailTwo}
                                                </span>
                                            </>
                                        )}
                                        {/* Office Emil 2 Logic End  */}


                                    </p>
                                    <h5 style={{ textAlign: "center", fontWeight: "bold", color: `${BankData.BorderColor}` }}><RiCustomerService2Fill /> <br /> {BankData.HotLineNumber}</h5>

                                </div>

                            </div>


                        </div>
                    </div>
                    {/* ================================= Template 1 start ============================== */}

                </>
            );
        } else if (TempleteDesign === "TemplateTwo") {
            return (
                <>

                    {/* ================================= Template 2 start ============================== */}
                    <div ref={printRef} className="p-4" >


                        <div className=" p-3 rounded" style={{ width: "100%", backgroundColor: "white", border: `2px solid ${BankData.BorderColor}` }}>

                            <img src={BankData.BankLogo ?? undefined} style={{ width: "100%", height: "85px" }} alt="Bank Asia" className="rounded img-fluid" />
                            {/* Bank Name  */}
                            <h2 className="mb-0" style={{ fontWeight: "bold", color: `${BankData.BorderColor}` }}>{BankData.BankName}</h2>
                            {/* Bank Address */}
                            <small>{BankData.BankAddress}</small>

                            <div className="d-flex">


                                <div style={{ width: "70%" }}>
                                    <h6 className="text-center"><strong> Account Information </strong></h6>

                                    <div className="acname rounded" style={{
                                        backgroundColor: "white",
                                        border: `1px solid ${BankData.BorderColor || '#000'}`,
                                        marginTop: "8px",
                                        padding: "1px",
                                        paddingLeft: "5px",
                                        width: "98%"
                                    }}>
                                        <strong>AC Name: {AcTitle}</strong>
                                    </div>
                                    <div className="acname rounded" style={{
                                        backgroundColor: "white",
                                        border: `1px solid ${BankData.BorderColor}`,
                                        marginTop: "8px",
                                        padding: "1px",
                                        paddingLeft: "5px",
                                        width: "98%"
                                    }}>
                                        <strong>AC Number: {AcNumber}</strong>
                                    </div>
                                    <div className="acname rounded" style={{
                                        backgroundColor: "white",
                                        border: `1px solid ${BankData.BorderColor}`,
                                        marginTop: "8px",
                                        padding: "1px",
                                        paddingLeft: "5px",
                                        width: "98%"
                                    }}>
                                        <strong>Mobile Number: {AcMobileNumber}</strong>
                                    </div>

                                    <p style={{ fontSize: "12px", lineHeight: "18px", marginTop: "5px", marginBottom: "5px" }}>
                                        <strong>Branch Name:</strong> {BankData.BranchName} <br />
                                        <strong>Routing Number:</strong> {BankData.RoutingNumber} <br />
                                        <strong>Swift Code:</strong> {BankData.SwiftCode} <br />
                                    </p>

                                    <p style={{ fontSize: "12px", lineHeight: "18px", marginBottom: "0px" }}>
                                        <strong>Office Contact: </strong>
                                        <span>
                                            {BankData.OfficeNumberOneWhatsApp && (
                                                <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                            )}&nbsp;
                                            {BankData.OfficeNumberOneImo && (
                                                <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                            )}&nbsp;
                                            {BankData.OfficeNumberOne}<br />
                                        </span>


                                        {/* Office Number 2 Logic Start  */}
                                        {BankData.OfficeNumberTwo.value && (
                                            <span style={{ paddingLeft: "92px", }}>
                                                {BankData.OfficeNumberTwoWhatsApp && (
                                                    <>
                                                        <span>

                                                            <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                                            &nbsp;
                                                        </span>

                                                    </>
                                                )}
                                                {BankData.OfficeNumberTwoImo && (
                                                    <>
                                                        <span>
                                                            <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                                            &nbsp;
                                                        </span>
                                                    </>
                                                )}
                                                {BankData.OfficeNumberTwo}<br />
                                            </span>
                                        )}
                                        {/* Office Number 2 Logic End  */}


                                        <strong>Email: </strong>
                                        <span>
                                            <img src={EmailIcon} style={{ width: "12px" }} alt="" /> {BankData.OfficeEmailOne}
                                        </span>

                                        {/* Office Email 2 Logic Start  */}
                                        {BankData.OfficeEmailTwo.value && (
                                            <>
                                                <br />
                                                <span style={{ paddingLeft: "38px", }}>
                                                    <img src={EmailIcon} style={{ width: "14px" }} alt="" /> {BankData.OfficeEmailTwo}
                                                </span>
                                            </>
                                        )}
                                        {/* Office Emil 2 Logic End  */}
                                    </p>
                                </div>


                                <div style={{ width: "30%" }}>
                                    <p style={{ textAlign: "center", marginBottom: "2px" }}>Scan For Account <br /> Information</p>

                                    <div style={{ height: "auto", maxWidth: "100%", width: "68%", justifySelf: "center" }}>
                                        <QRCode
                                            size={256}
                                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                            value={AccountAllInfo}
                                            viewBox="0 0 256 256"
                                        />
                                    </div>
                                    <p style={{ fontSize: "10px", lineHeight: "12px", textAlign: "center", marginBottom: "0px" }}>
                                        Looking for a quick bank account information print service? Contact +8801934544352
                                    </p>
                                    <h5 style={{ textAlign: "center", fontWeight: "bold", color: `${BankData.BorderColor}` }}><RiCustomerService2Fill /> <br /> {BankData.HotLineNumber}</h5>
                                </div>

                            </div>



                        </div>
                    </div>
                    {/* ================================= Template 2 end ============================== */}

                </>
            );
        } else if (TempleteDesign === "TemplateThree") {
            return (
                <>
                    {/* ================================= Template 3 start ==============================  from 2*/}
                    <div ref={printRef} className="p-4 " >
                        <div className="p-3 rounded" style={{ width: "100%", backgroundColor: "white", border: `2px solid ${BankData.BorderColor}` }}>


                            <div className="flex" style={{ display: "inline-flex", alignItems: "center", marginBottom: "5px" }}>
                                <div>
                                    <img src={BankData.BankLogo ?? undefined} style={{ width: "150px", height: "120px", }} alt="Bank Asia" className=" img-fluid rounded" />

                                </div>
                                <div className="" style={{ borderLeft: `0.1px solid ${BankData.BorderColor}`, marginLeft: "10px", paddingLeft: "10px" }}>
                                    {/* Bank Name  */}
                                    <span className="mb-0" style={{ fontSize: "25px", lineHeight: "0", fontWeight: "bold", color: `${BankData.BorderColor}`, }}>{BankData.BankName}</span> <br />
                                    {/* Bank Address  */}
                                    <span >{BankData.BankAddress}</span>
                                </div>
                            </div>


                            <div className="d-flex">

                                <div style={{ width: "75%" }}>


                                    <h6 className="text-center"><strong> Account Information </strong></h6>
                                    <div className="acname rounded" style={{
                                        backgroundColor: "white",
                                        border: `1px solid ${BankData.BorderColor}`,
                                        marginTop: "7px",
                                        padding: "1px",
                                        paddingLeft: "5px",
                                        width: "95%"
                                    }}>
                                        <strong>AC Name: {AcTitle}</strong>
                                    </div>
                                    <div className="acname rounded" style={{
                                        backgroundColor: "white",
                                        border: `1px solid ${BankData.BorderColor}`,
                                        marginTop: "7px",
                                        padding: "1px",
                                        paddingLeft: "5px",
                                        width: "95%"
                                    }}>
                                        <strong>AC Number: {AcNumber}</strong>
                                    </div>
                                    <div className="acname rounded" style={{
                                        backgroundColor: "white",
                                        border: `1px solid ${BankData.BorderColor}`,
                                        marginTop: "7px",
                                        padding: "1px",
                                        paddingLeft: "5px",
                                        width: "95%"
                                    }}>
                                        <strong>Mobile Number: {AcMobileNumber}</strong>
                                    </div>

                                    <p style={{ fontSize: "12px", lineHeight: "18px", marginTop: "5px", marginBottom: "0px" }}>
                                        <strong>Branch Name:</strong> {BankData.BranchName} <br />
                                        <strong>Routing Number:</strong> {BankData.RoutingNumber} <br />
                                        <strong>Swift Code:</strong> {BankData.SwiftCode} <br />
                                    </p>

                                    <p style={{ fontSize: "12px", lineHeight: "18px", marginBottom: "0px", marginTop: "5px" }}>
                                        <strong>Office Contact: </strong>
                                        <span>
                                            {BankData.OfficeNumberOneWhatsApp && (
                                                <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                            )}&nbsp;
                                            {BankData.OfficeNumberOneImo && (
                                                <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                            )}&nbsp;
                                            {BankData.OfficeNumberOne}<br />
                                        </span>


                                        {/* Office Number 2 Logic Start  */}
                                        {BankData.OfficeNumberTwo.value && (
                                            <span style={{ paddingLeft: "92px", }}>
                                                {BankData.OfficeNumberTwoWhatsApp && (
                                                    <>
                                                        <span>

                                                            <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                                            &nbsp;
                                                        </span>

                                                    </>
                                                )}
                                                {BankData.OfficeNumberTwoImo && (
                                                    <>
                                                        <span>
                                                            <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                                            &nbsp;
                                                        </span>
                                                    </>
                                                )}
                                                {BankData.OfficeNumberTwo}<br />
                                            </span>
                                        )}
                                        {/* Office Number 2 Logic End  */}


                                        <strong>Email: </strong>
                                        <span>
                                            <img src={EmailIcon} style={{ width: "12px" }} alt="" /> {BankData.OfficeEmailOne}
                                        </span>

                                        {/* Office Email 2 Logic Start  */}
                                        {BankData.OfficeEmailTwo.value && (
                                            <>
                                                <br />
                                                <span style={{ paddingLeft: "38px", }}>
                                                    <img src={EmailIcon} style={{ width: "14px" }} alt="" /> {BankData.OfficeEmailTwo}
                                                </span>
                                            </>
                                        )}
                                        {/* Office Emil 2 Logic End  */}

                                    </p>
                                </div>



                                <div style={{ width: "25%" }}>
                                    <p style={{ textAlign: "center", marginBottom: "2px", }}>Scan For Account <br /> Information</p>

                                    <div style={{ height: "auto", maxWidth: "100%", width: "68%", justifySelf: "center" }}>
                                        <QRCode
                                            size={256}
                                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                            value={AccountAllInfo}
                                            viewBox="0 0 256 256"
                                        />
                                    </div>
                                    <p style={{ fontSize: "10px", lineHeight: "12px", textAlign: "center", marginBottom: "0px" }}>
                                        Looking for a quick bank account information print service? Contact +8801934544352
                                    </p>
                                    <h5 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "0", color: `${BankData.BorderColor}` }}><RiCustomerService2Fill /> <br /> {BankData.HotLineNumber}</h5>
                                </div>

                            </div>

                        </div>
                    </div>
                    {/* ================================= Template 3 end ============================== */}

                </>
            );
        } else if (TempleteDesign === "TemplateFour") {
            return (
                <>

                    {/* ================================= Template 4 start ============================== from 1 */}
                    <div ref={printRef} className="p-4">
                        <div className="p-3 rounded" style={{ width: "100%", backgroundColor: "white", border: `2px solid ${BankData.BorderColor}` }}>


                            <div className="flex" style={{ display: "flex", alignItems: "center", }}>

                                <div className="banksdfinfo" style={{ width: "75%", }}>
                                    {/* Bank Name  */}
                                    <span className="mb-0" style={{ fontSize: "35px", lineHeight: "18px", fontWeight: "bold", color: `${BankData.BorderColor}`, }}>{BankData.BankName}</span> <br />
                                    {/* Bank Address  */}
                                    <span>{BankData.BankAddress}</span>
                                </div>
                                <div className="logoff" style={{ width: "20%", borderLeft: `0.1px solid ${BankData.BorderColor}`, marginLeft: "5px", paddingLeft: "5px" }}>
                                    <img src={BankData.BankLogo ?? undefined} style={{ width: "100%", height: "110px", }} alt="Bank Asia" className=" img-fluid rounded" />

                                </div>
                            </div>


                            <h6 className="text-center"><strong> Account Information </strong></h6>
                            <table className="table table-bordered rounded text-left  mb-0 table-bordered">
                                <tbody className="thead-dark">
                                    <tr className="rounded" style={{ border: `1px solid ${BankData.BorderColor}`, borderRadius: "5px" }}>
                                        <td style={{ padding: "0px 0px 0px 10px", }}><strong>Account Name</strong></td>
                                        <td style={{ width: "60%", padding: "0px 0px 0px 10px", fontWeight: "bold" }}>{AcTitle}</td>
                                    </tr>
                                    <tr className="rounded" style={{ border: `1px solid ${BankData.BorderColor}`, borderRadius: "5px" }}>
                                        <td style={{ padding: "0px 0px 0px 10px" }}><strong>Account Number</strong></td>
                                        <td style={{ width: "60%", padding: "0px 0px 0px 10px", fontWeight: "bold" }}>{AcNumber}</td>
                                    </tr>
                                    <tr className="rounded" style={{ border: `1px solid ${BankData.BorderColor}`, borderRadius: "5px" }}>
                                        <td style={{ padding: "0px 0px 0px 10px" }}><strong>Account Mobile No</strong></td>
                                        <td style={{ width: "60%", padding: "0px 0px 0px 10px", fontWeight: "bold" }}>{AcMobileNumber}</td>
                                    </tr>
                                </tbody>
                            </table>




                            <div style={{ display: "flex", marginTop: "5px" }}>

                                <div style={{ width: "45%", padding: "5px", textAlign: "center", }} className="">
                                    <p style={{ fontSize: "14px", lineHeight: "13px", textAlign: "center", marginBottom: "0px" }}>Scan For Account <br /> Information</p>

                                    <div style={{ height: "auto", width: "35%", marginTop: "5px", justifySelf: "center" }}>
                                        <QRCode
                                            size={256}
                                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                            value={AccountAllInfo}
                                            viewBox="0 0 256 256"
                                        />
                                    </div>

                                    <p style={{ fontSize: "10px", lineHeight: "12px", textAlign: "center", marginBottom: "0px" }}>
                                        Looking for a quick bank account information print service? Contact +8801934544352
                                    </p>
                                </div>



                                <div style={{ width: "55%", padding: "5px", paddingLeft: "10px", paddingBottom: "0px", borderLeft: `0.1px solid ${BankData.BorderColor}` }} className="">

                                    <p style={{ fontSize: "14px", lineHeight: "18px", marginBottom: "8px" }}>
                                        <strong>Branch Name:</strong> {BankData.BranchName} <br />
                                        <strong>Routing Number:</strong> {BankData.RoutingNumber} <br />
                                        <strong>Swift Code:</strong> {BankData.SwiftCode} <br />
                                    </p>

                                    <p style={{ fontSize: "14px", lineHeight: "18px", marginBottom: "0px" }}>
                                        <strong>Office Contact: </strong>
                                        <span>
                                            {BankData.OfficeNumberOneWhatsApp && (
                                                <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                            )}&nbsp;
                                            {BankData.OfficeNumberOneImo && (
                                                <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                            )}&nbsp;
                                            {BankData.OfficeNumberOne}<br />
                                        </span>


                                        {/* Office Number 2 Logic Start  */}
                                        {BankData.OfficeNumberTwo && (
                                            <span style={{ paddingLeft: "106px", }}>
                                                {BankData.OfficeNumberTwoWhatsApp && (
                                                    <>
                                                        <span>

                                                            <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                                            &nbsp;
                                                        </span>

                                                    </>
                                                )}
                                                {BankData.OfficeNumberTwoImo && (
                                                    <>
                                                        <span>
                                                            <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                                            &nbsp;
                                                        </span>
                                                    </>
                                                )}


                                                {BankData.OfficeNumberTwo}<br />
                                            </span>
                                        )}
                                        {/* Office Number 2 Logic End  */}


                                        <strong>Email: </strong>
                                        <span>
                                            <img src={EmailIcon} style={{ width: "14px" }} alt="" /> {BankData.OfficeEmailOne}
                                        </span>

                                        {/* Office Email 2 Logic Start  */}
                                        {BankData.OfficeEmailTwo && (
                                            <>
                                                <br />
                                                <span style={{ paddingLeft: "44px", }}>
                                                    <img src={EmailIcon} style={{ width: "14px" }} alt="" /> {BankData.OfficeEmailTwo}
                                                </span>
                                            </>
                                        )}
                                        {/* Office Emil 2 Logic End  */}

                                    </p>
                                    <h5 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "0px", color: `${BankData.BorderColor}` }}><RiCustomerService2Fill /> <br /> {BankData.HotLineNumber}</h5>

                                </div>

                            </div>


                        </div>
                    </div>
                    {/* ================================= Template 4 start ============================== */}

                </>
            );
        }
        return null;
    };







    if (PaymentInfo) {
        return (
            <PublicBankLayout>


                <div className="row">



                    {/* Left side start */}
                    <div className="col-md-6 p-5">

                        <div className="card" style={{ backgroundColor: "#f7f7f7" }}>
                            <div className="card-header text-center">Generate Account Details Print</div>
                            <div className="card-body">
                                <label>Account Number:</label>
                                <input ref={acNoRef} className="form-control " type="number" placeholder="Account Number" />
                                <p className='text-danger' style={{ marginBottom: "0px" }}>{ACLengthValadation}</p>

                                <label className='mt-2'>Account Name:</label>
                                <input ref={acTitleRef} className="form-control " type="text" placeholder="Account Name" />
                                <p className='text-danger' style={{ marginBottom: "0px" }}>{ACNameLengthValadation}</p>


                                <label className='mt-2'>Mobile Number:</label>
                                <input ref={acMobileNoRef} className="form-control " type="number" placeholder="Mobile Number" />
                                <span className='text-danger'>{NumberLengthValadation}</span>



                                <button
                                    onClick={handleSubmit}
                                    className="btn btn-primary w-100 mb-2 mt-2"
                                    style={{
                                        backgroundColor: isSubmitHovered ? "#81689D" : "rgb(71 79 122)",
                                        padding: "3px",
                                        transition: "700ms"
                                    }}
                                    onMouseEnter={() => setIsSubmitHovered(true)}
                                    onMouseLeave={() => setIsSubmitHovered(false)}
                                >
                                    Submit Account Information
                                </button>


                                <ReactToPrint
                                    trigger={() => (
                                        <button
                                            className="btn btn-primary w-100"
                                            style={{
                                                backgroundColor: isPrintHovered ? "#81689D" : "rgb(71 79 122)",
                                                padding: "3px",
                                                transition: "700ms",
                                            }}
                                            onMouseEnter={() => setIsPrintHovered(true)}
                                            onMouseLeave={() => setIsPrintHovered(false)}
                                        >
                                            Print
                                        </button>
                                    )}
                                    content={() => printRef.current} // Pass the ref to the content prop
                                />

                            </div>
                        </div>


                    </div>
                    {/* Left side end */}


                    {/* Right Side Start  */}
                    <div className="col-md-6">
                        {renderTemplate()}
                    </div>
                    {/* Right Side End  */}


                </div>


            </PublicBankLayout>
        );
    } else {
        return <BankPayment />;
    }

};





export default AccountPrint;
