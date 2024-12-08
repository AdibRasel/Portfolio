import React, { useState, useRef } from 'react';
import { MdNavigateNext } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import ReactToPrint from 'react-to-print';
import { Form } from "react-bootstrap"; // Importing Form from react-bootstrap

import { BankRegistration, BankRegistrationMailSend } from "../APIServiceBank/APIServiceBank"

// import BankLogo from "../../../Assets/BankLogo2.jpeg";
import QRCode from "react-qr-code";
import { RiCustomerService2Fill } from "react-icons/ri";


import ImoIcon from "../../../Assets/ImoIcon.png"
import WhatsppIcon from "../../../Assets/WhatsppIcon.png"
import EmailIcon from "../../../Assets/EmailIcon.png"
import { useNavigate } from 'react-router-dom';

const RegistrationBank: React.FC = () => {


    const navigate = useNavigate();


    const [Loading, SetLoading] = useState<boolean>(false);

    const [show, setShow] = useState(false);

    const handleClose = () => {

        setShow(false);
        SetExistBank("")
    }

    const handleShow = () => setShow(true);

    const acTitleRef = useRef<HTMLInputElement>(null);
    const acNoRef = useRef<HTMLInputElement>(null);
    const acMobileNoRef = useRef<HTMLInputElement>(null);

    const ReferenceNameRef = useRef<HTMLInputElement>(null);
    const ReferenceNumberRef = useRef<HTMLInputElement>(null);


    const [AcTitle, SetAcTitle] = useState<string>("");
    const [AcNumber, SetAcNumber] = useState<string>("");
    const [AcMobileNumber, SetAcMobileNumber] = useState<string>("");
    const [AccountAllInfo, SetAccountAllInfo] = useState<string>("");

    const [isSubmitHovered, setIsSubmitHovered] = useState(false);
    const [isPrintHovered, setIsPrintHovered] = useState(false);
    const printRef = useRef<HTMLDivElement | null>(null);



    const [selectedTemplate, setSelectedTemplate] = useState<string>("TemplateOne");

    // Handle radio button change
    const HandleTemplateChange = (value: string) => {
        setSelectedTemplate(value);
    };



    const [BankLogo, setBankLogo] = useState<string | null>(null);
    const [OfficeImage, setOfficeImage] = useState<string | null>(null);

    const handleImageUpload = (
        event: React.ChangeEvent<HTMLInputElement>,
        imageIndex: number
    ) => {
        const file = event.target.files?.[0]; // Only handle the first selected file
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (imageIndex === 1) {
                    setBankLogo(reader.result as string);
                } else if (imageIndex === 2) {
                    setOfficeImage(reader.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const [URLValue, setURLValue] = useState('');


    const BankNameRef = useRef<HTMLInputElement>(null);
    const BankAddressRef = useRef<HTMLInputElement>(null);
    const BranchNameRef = useRef<HTMLInputElement>(null);
    const BankACLengthRef = useRef<HTMLInputElement>(null);
    const RoutingNumberRef = useRef<HTMLInputElement>(null);
    const SwiftCodeRef = useRef<HTMLInputElement>(null);
    const HotLineNumberRef = useRef<HTMLInputElement>(null);

    const ManagerNameRef = useRef<HTMLInputElement>(null);
    const OfficeNumberOneRef = useRef<HTMLInputElement>(null);
    const OfficeNumberTwoRef = useRef<HTMLInputElement>(null);
    const OfficeEmailOneRef = useRef<HTMLInputElement>(null);
    const OfficeEmailTwoRef = useRef<HTMLInputElement>(null);
    const URLRef = useRef<HTMLInputElement>(null);

    const BorderColorRef = useRef<HTMLInputElement>(null);
    const [borderColor, setBorderColor] = useState<string>("black");

    const handleSetBorderColor = () => {
        const selectedColor = BorderColorRef.current?.value || "black";
        setBorderColor(selectedColor);
    };


    const [URLValadation, SetURLValadation] = useState<string>("");
    const [BankNameValadation, SetBankNameValadation] = useState<string>("");
    const [BankAddressValadation, SetBankAddressValadation] = useState<string>("");
    const [BranchNameValadation, SetBranchNameValadation] = useState<string>("");
    const [BankACLengthValadation, SetBankACLengthValadation] = useState<string>("");
    const [RoutingNumberValadation, SetRoutingNumberValadation] = useState<string>("");
    const [SwiftCodeValadation, SetSwiftCodeValadation] = useState<string>("");
    const [HotLineNumberValadation, SetHotLineNumberValadation] = useState<string>("");
    const [ManagerNameValadation, SetManagerNameValadation] = useState<string>("");
    const [OfficeNumberOneValadation, SetOfficeNumberOneValadation] = useState<string>("");
    const [OfficeEmailOneValadation, SetOfficeEmailOneValadation] = useState<string>("");
    const [BankLogoValadation, SetBankLogoValadation] = useState<string>("");
    const [OfficeImageValadation, SetOfficeImageValadation] = useState<string>("");



    const [NumberOneImoChecked, setNumberOneImoChecked] = useState(false);
    const [NumberTwoImoChecked, setNumberTwoImoChecked] = useState(false);
    const HandleNumberOneImoChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberOneImoChecked(event.target.checked);
    };
    const HandleNumberTwoImoChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberTwoImoChecked(event.target.checked);
    };

    const [NumberOneWhatsappChecked, setNumberOneWhatsappChecked] = useState(false);
    const [NumberTwoWhatsappChecked, setNumberTwoWhatsappChecked] = useState(false);
    const HandleNumberOneWhatsappChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberOneWhatsappChecked(event.target.checked);
    };
    const HandleNumberTwoWhatsappChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberTwoWhatsappChecked(event.target.checked);
    };


    const [ExistBank, SetExistBank] = useState<string>("");


    // Submit Button
    const Submit = () => {
        let isValid = true;

        handleSetBorderColor();

        // Validate BankLogo
        if (!BankLogo) {
            SetBankLogoValadation("Bank Logo is required");
            isValid = false;
        } else {
            SetBankLogoValadation("");
        }

        // Validate OfficeImage
        if (!OfficeImage) {
            SetOfficeImageValadation("Office Image is required");
            isValid = false;
        } else {
            SetOfficeImageValadation("");
        }

        // Validate BankName
        if (!BankNameRef.current?.value) {
            SetBankNameValadation("Bank Name is required");
            isValid = false;
        } else {
            SetBankNameValadation("");
        }

        // Validate BankAddress
        if (!BankAddressRef.current?.value) {
            SetBankAddressValadation("Bank Address is required");
            isValid = false;
        } else {
            SetBankAddressValadation("");
        }

        // Validate BranchName
        if (!BranchNameRef.current?.value) {
            SetBranchNameValadation("Branch Name is required");
            isValid = false;
        } else {
            SetBranchNameValadation("");
        }

        // Validate Bank AC Length
        if (!BankACLengthRef.current?.value) {
            SetBankACLengthValadation("Bank AC Length is required");
            isValid = false;
        } else {
            SetBankACLengthValadation("");
        }

        // Validate RoutingNumber
        if (!RoutingNumberRef.current?.value) {
            SetRoutingNumberValadation("Routing Number is required");
            isValid = false;
        } else {
            SetRoutingNumberValadation("");
        }

        // Validate SwiftCode
        if (!SwiftCodeRef.current?.value) {
            SetSwiftCodeValadation("Swift Code is required");
            isValid = false;
        } else {
            SetSwiftCodeValadation("");
        }

        // Validate HotLineNumber
        if (!HotLineNumberRef.current?.value) {
            SetHotLineNumberValadation("Hotline Number is required");
            isValid = false;
        } else {
            SetHotLineNumberValadation("");
        }

        // Validate ManagerName
        if (!ManagerNameRef.current?.value) {
            SetManagerNameValadation("Manager Name is required");
            isValid = false;
        } else {
            SetManagerNameValadation("");
        }

        // Validate SetInputValadation
        if (!URLRef.current?.value) {
            SetURLValadation("URL is required");
            isValid = false;
        } else {
            SetURLValadation("");
        }

        // Validate OfficeNumberOne
        if (!OfficeNumberOneRef.current?.value) {
            SetOfficeNumberOneValadation("Office Number 1 is required");
            isValid = false;
        } else {
            SetOfficeNumberOneValadation("");
        }

        // Validate OfficeEmailOne
        if (!OfficeEmailOneRef.current?.value) {
            SetOfficeEmailOneValadation("Office Email 1 is required");
            isValid = false;
        } else {
            SetOfficeEmailOneValadation("");
        }

        // If all validations pass
        if (isValid) {

            

            if (show == false) {


                handleShow();



            } else if (show == true) {




                const PostBody = {
                    BankURL: URLValue,
                    StatusBank: "Pending",
                    BankName: BankNameRef.current?.value,
                    BankLogo: BankLogo,
                    BankAddress: BankAddressRef.current?.value,
                    BranchName: BranchNameRef.current?.value,
                    BankAccountLength: BankACLengthRef.current?.value,
                    RoutingNumber: RoutingNumberRef.current?.value,
                    SwiftCode: SwiftCodeRef.current?.value,
                    HotLineNumber: HotLineNumberRef.current?.value,
                    Template: selectedTemplate,
                    ManagerName: ManagerNameRef.current?.value,
                    OfficeImage: OfficeImage,
                    BorderColor: BorderColorRef.current?.value || "black",
                    OfficeNumberOne: OfficeNumberOneRef.current?.value,
                    OfficeNumberOneWhatsApp: NumberOneWhatsappChecked,
                    OfficeNumberOneImo: NumberOneImoChecked,
                    OfficeNumberTwo: OfficeNumberTwoRef.current?.value || "N/A",
                    OfficeNumberTwoWhatsApp: NumberTwoWhatsappChecked,
                    OfficeNumberTwoImo: NumberTwoImoChecked,
                    OfficeEmailOne: OfficeEmailOneRef.current?.value,
                    OfficeEmailTwo: OfficeEmailTwoRef.current?.value || "N/A",
                    ReferenceName: ReferenceNameRef.current?.value || "N/A",
                    ReferenceNumber: ReferenceNumberRef.current?.value || "N/A",
                    CreateDate: new Date(),
                    ServiceType: "Free",
                    PaymentStatus: "Pending",
                    PaymentAmount: 0,
                    StartDate: new Date(),
                    EndDate: new Date(new Date().setMonth(new Date().getMonth() + 1))
                };

                // // Call BankRegistration function with the PostBody
                // const BankRegistrations = await  BankRegistration(PostBody);
                SetLoading(true)




                BankRegistration(PostBody)
                    .then((BankRegistrations) => {
                        // Log the result here
                        if (BankRegistrations.status === "Bank Registration Success") {


                            BankRegistrationMailSend(PostBody)

                            navigate('/RegistrationSuccess');

                            SetLoading(false)


                        } else if (BankRegistrations.status === "Bank is already registered") {

                            SetExistBank(BankRegistrations.existingBank)
                            SetLoading(false)


                        } else if (BankRegistrations.status === "server error") {


                        }

                    })
                    .catch((error) => {
                        // Handle any errors
                    });



                // handleClose();
            }

            // const Reference_Name = acMobileNoRef.current?.value || "";
            // const Reference_Number = acMobileNoRef.current?.value || "";


            // SetReferenceName(Reference_Name);
            // SetReferenceNumber(Reference_Number);


        } else {
        }
    };




    const [ACLengthValadation, SetACLengthValadation] = useState<string>("");
    const [ACNameLengthValadation, SetACNameLengthValadation] = useState<string>("");
    const [NumberLengthValadation, SetNumberLengthValadation] = useState<string>("");

    const handleSubmit = () => {
        const AC_Title_Input = acTitleRef.current?.value || "";
        const AC_No_Input = acNoRef.current?.value || "";
        const AC_Mobile_No_Input = acMobileNoRef.current?.value || "";

        const ACLengthRequerd = Number(BankACLengthRef.current?.value); // Ensure it's a number, fallback to 0 if undefined
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
                        `${BankNameRef.current?.value}, Branch Name: ${BranchNameRef.current?.value}, AC No: ${AC_No_Input}, AC Name: ${AC_Title_Input},  Routing Number: ${RoutingNumberRef.current?.value}.`
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
            SetACLengthValadation(`Ensure the bank account number contains   ${BankACLengthRef.current?.value} digits.`);
            SetAcTitle("");
            SetAcNumber("");
            SetAcMobileNumber("");
            SetAccountAllInfo("");
        }



    };



    return (
        <div className="container">

            <div className="card" >

                <div className="card-header" style={{ backgroundColor: "#474F7A" }}>
                    <h2 className="text-center" style={{ fontWeight: 'bold', fontSize: '3rem', color: '#000' }}>
                        <span style={{ color: 'white' }}>REGISTRATION</span>
                    </h2>
                </div>

                <div className="card-body">


                    <div className="row ">

                        {/* Bank Info Start */}
                        <div className="col-md-6">
                            <h5 className="card-title text-center"><u> <b> Bank </b> Information </u></h5>

                            {/* Bank Name box */}
                            <div className="mb-2">
                                <span style={{ fontWeight: "bold" }}>Bank Name : <span className='text-danger'>*</span> </span> <br />
                                <input ref={BankNameRef} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }} />
                                <span className='text-danger'>{BankNameValadation}</span>
                            </div>

                            {/* Bank Logo box */}
                            <div className="">
                                <div className="d-flex">

                                    {/* logo input, left side  */}
                                    <div className="left">
                                        <span style={{ fontWeight: "bold" }}>Bank Logo <span className='text-danger'>*</span></span> <br />
                                        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 1)} style={{ width: "100%" }} />
                                        <span className='text-danger'>{BankLogoValadation}</span>

                                    </div>

                                    {BankLogo && (
                                        <div className='ms-auto"'>
                                            <img style={{ height: "110px", width: "100%", marginTop: "-6px", marginRight: "10px", marginBottom: "0px" }} src={BankLogo} alt="" />
                                        </div>
                                    )}

                                </div>
                            </div>

                            {/* Bank Address box */}
                            <div className="mb-2">
                                <span style={{ fontWeight: "bold" }}>Bank Address : <span className='text-danger'>*</span> </span> <br />
                                <input ref={BankAddressRef} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }} />
                                <span className='text-danger'>{BankAddressValadation}</span>
                            </div>

                            {/* Branch Name box */}
                            <div className="mb-2">
                                <span style={{ fontWeight: "bold" }}>Branch Name : <span className='text-danger'>*</span> </span> <br />
                                <input ref={BranchNameRef} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }} />
                                <span className='text-danger'>{BranchNameValadation}</span>
                            </div>

                            {/* Bank Account Lenth box */}
                            <div className="mb-2">
                                <span style={{ fontWeight: "bold" }}>Bank Account Length :  <span className='text-danger'>*</span> </span> <span>(ব্যাংক একাউন্ট কত সংখ্যার ? )</span> <br />
                                <input ref={BankACLengthRef} type="number" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }} />
                                <span className='text-danger'>{BankACLengthValadation}</span>
                            </div>

                            {/* Routing Number box */}
                            <div className="mb-2">
                                <span style={{ fontWeight: "bold" }}>Routing Number : <span className='text-danger'>*</span> </span> <br />
                                <input ref={RoutingNumberRef} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }} />
                                <span className='text-danger'>{RoutingNumberValadation}</span>
                            </div>

                            {/* Swift Code box */}
                            <div className="mb-2">
                                <span style={{ fontWeight: "bold" }}>Swift Code : <span className='text-danger'>*</span> </span> <br />
                                <input ref={SwiftCodeRef} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }} />
                                <span className='text-danger'>{SwiftCodeValadation}</span>
                            </div>

                            {/* HotLine Number box */}
                            <div className="mb-2">
                                <span style={{ fontWeight: "bold" }}>HotLine Number : <span className='text-danger'>*</span> </span> <br />
                                <input ref={HotLineNumberRef} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }} />
                                <span className='text-danger'>{HotLineNumberValadation}</span>
                            </div>


                        </div>
                        {/* Bank Info End */}










                        {/* Office Info Start */}
                        <div className="col-md-6">
                            <h5 className="card-title text-center"><u> <b> Office </b> Information </u></h5>


                            {/* Bank URL box */}
                            {/* <div className="mb-2">
                                <span style={{ fontWeight: "bold" }}>URL : <span className='text-danger'>*</span> Spaces are not allowed here. Choose BankNameAddressEtc </span> <br />
                                <input ref={URLRef} type="text" placeholder='https://domain/yourbankname.com' style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", borderRadius: "5px" }} />
                                <span className='text-danger'>{URLValadation}</span>
                            </div> */}
                            {/* Bank URL box */}
                            <div className="mb-2">
                                <span style={{ fontWeight: "bold" }}>URL : <span className='text-danger'>*</span> <span style={{ fontSize: "14px" }}> Spaces are not allowed here. Like (BankNameAddressEtc) </span> </span> <br />
                                <input
                                    ref={URLRef}
                                    type="text"
                                    placeholder='https://domain/yourbankname.com'
                                    style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", borderRadius: "5px" }}
                                    value={URLValue} // maintain state for input value
                                    onChange={(e) => {
                                        // Remove spaces dynamically from input value
                                        setURLValue(e.target.value.replace(/\s/g, ''));
                                    }}
                                />
                                <span className='text-danger'>{URLValadation}</span>
                            </div>




                            {/* Office Image box */}
                            <div className="">
                                <div className="d-flex">

                                    {/* logo input, left side  */}
                                    <div className="mb-2">
                                        <span style={{ fontWeight: "bold" }}>Office Image <span className='text-danger'>*</span></span> <br />
                                        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 2)} style={{ width: "100%" }} />
                                        <span className='text-danger'>{OfficeImageValadation}</span>
                                    </div>

                                    {OfficeImage && (
                                        <div className='ms-auto"'>
                                            <img style={{ height: "110px", width: "100%", marginTop: "-6px", marginRight: "10px", marginBottom: "0px" }} src={OfficeImage} alt="" />
                                        </div>
                                    )}

                                </div>
                            </div>

                            {/* Bank URL box */}
                            <div className="mb-2">
                                <span style={{ fontWeight: "bold" }}>Border Color :  </span> <br />
                                <input ref={BorderColorRef} type="color" />
                            </div>


                            {/* Manager Name box */}
                            <div className="mb-2">
                                <span style={{ fontWeight: "bold" }}>Manager Name : <span className='text-danger'>*</span> </span> <br />
                                <input ref={ManagerNameRef} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }} />
                                <span className='text-danger'>{ManagerNameValadation}</span>
                            </div>



                            {/* Office Number One box */}
                            <div className="mb-2">
                                <span style={{ fontWeight: "bold" }}>Office Number One : <span className='text-danger'>*</span> </span>
                                &nbsp;
                                <span>
                                    <input
                                        type="checkbox"
                                        style={{ border: "1px solid #666666", marginRight: "2px" }}
                                        className='form-check-input'
                                        checked={NumberOneWhatsappChecked}
                                        onChange={HandleNumberOneWhatsappChecked}
                                    />
                                    WhatsApp, &nbsp;
                                </span>
                                <span>
                                    <input
                                        type="checkbox"
                                        style={{ border: "1px solid #666666", marginRight: "2px" }}
                                        className='form-check-input'
                                        checked={NumberOneImoChecked}
                                        onChange={HandleNumberOneImoChecked}
                                    />
                                    Imo
                                </span>


                                <br />


                                <input ref={OfficeNumberOneRef} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }} />
                                <span className='text-danger'>{OfficeNumberOneValadation}</span>
                            </div>

                            {/* Office Number Two box */}
                            <div className="mb-2">
                                <span style={{ fontWeight: "bold" }}>Office Number Two : </span>
                                &nbsp;
                                <span>
                                    <input
                                        type="checkbox"
                                        style={{ border: "1px solid #666666", marginRight: "2px" }}
                                        className='form-check-input'
                                        checked={NumberTwoWhatsappChecked}
                                        onChange={HandleNumberTwoWhatsappChecked}
                                    />
                                    WhatsApp, &nbsp;
                                </span>
                                <span>
                                    <input
                                        type="checkbox"
                                        style={{ border: "1px solid #666666", marginRight: "2px" }}
                                        className='form-check-input'
                                        checked={NumberTwoImoChecked}
                                        onChange={HandleNumberTwoImoChecked}
                                    />
                                    Imo
                                </span>

                                <br />
                                <input ref={OfficeNumberTwoRef} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }} />
                                <span className='text-danger'>{ }</span>
                            </div>

                            {/* Office Email One box */}
                            <div className="mb-2">
                                <span style={{ fontWeight: "bold" }}>Office Email One : <span className='text-danger'>*</span> </span> <br />
                                <input ref={OfficeEmailOneRef} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }} />
                                <span className='text-danger'>{OfficeEmailOneValadation}</span>
                            </div>

                            {/* Office Email Two box */}
                            <div className="mb-2">
                                <span style={{ fontWeight: "bold" }}>Office Email Two : </span> <br />
                                <input ref={OfficeEmailTwoRef} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }} />
                                <span className='text-danger'>{ }</span>
                            </div>




                        </div>
                        {/* Office Info End */}

                    </div>

                    <button
                        type="button"
                        // onClick={handleShow}
                        onClick={Submit}
                        style={{
                            width: "100%",
                            marginTop: "10px",
                            backgroundColor: "#474F7A",
                            color: "white",
                            borderRadius: "5px",
                        }}
                    >
                        Next <MdNavigateNext />
                    </button>

                </div>
                {/* card end  */}

            </div>





            <Modal
                show={show}
                fullscreen={true}
                onHide={handleClose}
                className="modal-fullscreen"
                aria-labelledby="exampleModalFullscreenLabel"
            >
                <div className="container">

                    <div className="card" >


                        <div className="card-header" style={{ backgroundColor: "#474F7A" }}>
                            <h2 className="text-center" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#000' }}>
                                <span style={{ color: 'white' }}>Select Template and Submit Application</span>
                            </h2>
                        </div>

                        <div className="row">



                            {/* Left side start */}
                            <div className="col-md-6 p-3">

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
                                                    Test Print
                                                </button>
                                            )}
                                            content={() => printRef.current} // Pass the ref to the content prop
                                        />

                                    </div>
                                </div>
                            </div>
                            {/* Left side end */}


                            {/* Right Side start  */}
                            <div className="col-md-6 p-3">



                                <div className="card" style={{ backgroundColor: "#f7f7f7" }}>
                                    <div className="card-header text-center">Select Template</div>
                                    <div className="card-body">

                                        <div className="row my-2">
                                            <div
                                                className="col-md-3"
                                                style={{
                                                    backgroundColor: selectedTemplate === "TemplateOne" ? "#474F7A" : "", // #474F7A background for "One"
                                                    color: selectedTemplate === "TemplateOne" ? "white" : "black", // Optional: change text color
                                                    padding: "10px", // Optional: add padding for better look
                                                    borderRadius: "5px", // Optional: rounded corners for the column
                                                    cursor: "pointer"
                                                }}
                                                onClick={() => HandleTemplateChange("TemplateOne")}
                                            >
                                                Template 1
                                                <Form.Check
                                                    type="radio"
                                                    label="One"
                                                    name="radioGroup"
                                                    checked={selectedTemplate === "TemplateOne"}
                                                    onChange={() => HandleTemplateChange("TemplateOne")}
                                                // custom
                                                />
                                            </div>
                                            <div
                                                className="col-md-3"
                                                style={{
                                                    backgroundColor: selectedTemplate === "TemplateTwo" ? "#474F7A" : "",
                                                    color: selectedTemplate === "TemplateTwo" ? "white" : "black",
                                                    padding: "10px",
                                                    borderRadius: "5px",
                                                    cursor: "pointer"
                                                }}
                                                onClick={() => HandleTemplateChange("TemplateTwo")}
                                            >
                                                Template 2
                                                <Form.Check
                                                    type="radio"
                                                    label="Two"
                                                    name="radioGroup"
                                                    checked={selectedTemplate === "TemplateTwo"}
                                                    onChange={() => HandleTemplateChange("TemplateTwo")}
                                                // custom
                                                />
                                            </div>
                                            <div
                                                className="col-md-3"
                                                style={{
                                                    backgroundColor: selectedTemplate === "TemplateThree" ? "#474F7A" : "",
                                                    color: selectedTemplate === "TemplateThree" ? "white" : "black",
                                                    padding: "10px",
                                                    borderRadius: "5px",
                                                    cursor: "pointer"
                                                }}
                                                onClick={() => HandleTemplateChange("TemplateThree")}
                                            >
                                                Template 3
                                                <Form.Check
                                                    type="radio"
                                                    label="Three"
                                                    name="radioGroup"
                                                    checked={selectedTemplate === "TemplateThree"}
                                                    onChange={() => HandleTemplateChange("TemplateThree")}
                                                // custom
                                                />
                                            </div>
                                            <div
                                                className="col-md-3"
                                                style={{
                                                    backgroundColor: selectedTemplate === "TemplateFour" ? "#474F7A" : "",
                                                    color: selectedTemplate === "TemplateFour" ? "white" : "black",
                                                    padding: "10px",
                                                    borderRadius: "5px",
                                                    cursor: "pointer"
                                                }}
                                                onClick={() => HandleTemplateChange("TemplateFour")}
                                            >
                                                Template 4
                                                <Form.Check
                                                    type="radio"
                                                    label="Four"
                                                    name="radioGroup"
                                                    checked={selectedTemplate === "TemplateFour"}
                                                    onChange={() => HandleTemplateChange("TemplateFour")}
                                                // custom
                                                />
                                            </div>
                                        </div>


                                        <label>Reference: (Optional)</label>
                                        <input ref={ReferenceNameRef} style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }} className="mb-2" type="text" placeholder="Name" />
                                        <input ref={ReferenceNumberRef} style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }} className="mb-2" type="text" placeholder="Number" />


                                        {Loading && (

                                            <div className="spinner-border text-black text-center" style={{ textAlign: "center", margin: "auto" }} role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>

                                        )}

                                        {
                                            ExistBank.length > 0 ? (
                                                <span className='text-danger'>
                                                    This <b> {ExistBank} </b> URL is already booked. Please choose another bank URL. Click the <b> Back button </b> to change the URL.
                                                </span>
                                            ) : null
                                        }





                                        <button
                                            onClick={Submit}
                                            className="btn btn-primary w-100 mb-2 mt-3 bg-success"
                                            style={{
                                                // backgroundColor: isSubmitHovered ? "#81689D" : "red",
                                                padding: "3px",
                                                transition: "700ms"
                                            }}
                                            onMouseEnter={() => setIsSubmitHovered(true)}
                                            onMouseLeave={() => setIsSubmitHovered(false)}
                                        >
                                            Submit
                                        </button>


                                        <button
                                            onClick={handleClose}
                                            className="btn btn-primary w-100 mb-2 bg-warning"
                                            style={{
                                                // backgroundColor: isSubmitHovered ? "#81689D" : "red",
                                                padding: "3px",
                                                transition: "700ms"
                                            }}
                                            onMouseEnter={() => setIsSubmitHovered(true)}
                                            onMouseLeave={() => setIsSubmitHovered(false)}
                                        >
                                            Back
                                        </button>

                                    </div>
                                </div>



                            </div>



                        </div>
                        {/* Right Side start  */}











                        {/* All Templete Print Box Start  */}
                        <div ref={printRef} className="allTempletePrintBox">


                            <div className="row">

                                <div className="col-md-6">
                                    <h3 className='text-center' style={{ marginBottom: "-20px", marginTop: "30px" }}> Template One(1)</h3>
                                    {/* ================================= Template 1 start ============================== */}
                                    <div className="p-4">

                                        <div className="p-3 rounded" style={{ width: "100%", backgroundColor: "white", border: `2px solid ${borderColor}` }}>
                                            <div style={{ display: "flex" }}>
                                                <div className="" style={{ width: "65%" }}>
                                                    <img src={BankLogo ?? undefined} style={{ width: "100%", height: "65px" }} alt="Bank Asia" className="rounded img-fluid" />
                                                </div>
                                                <div className="" style={{ width: "35%", borderLeft: `0.1px solid ${borderColor}`, marginLeft: "5px", paddingLeft: "5px" }}>
                                                    {/* Bank Name  */}
                                                    <h6 className="mb-0"><strong style={{ fontWeight: "bold", color: `${borderColor}` }}> {BankNameRef.current?.value}</strong> </h6>
                                                    {/* Bank Address  */}
                                                    <span>{BankAddressRef.current?.value}</span>
                                                </div>
                                            </div>
                                            <h6 className="mt-2 text-center"><strong> Account Information </strong></h6>
                                            <table className="table table-bordered rounded text-left  mb-0 table-bordered">
                                                <tbody className="thead-dark">
                                                    <tr className="rounded" style={{ border: `1px solid ${borderColor}`, borderRadius: "5px", }}>
                                                        <td style={{ padding: "2px 0px 2px 10px", }}><strong>Account Name</strong></td>
                                                        <td style={{ width: "60%", padding: "2px 0px 2px 10px", fontWeight: "bold" }}>{AcTitle}</td>
                                                    </tr>
                                                    <tr className="rounded" style={{ border: `1px solid ${borderColor}`, borderRadius: "5px", }}>
                                                        <td style={{ padding: "2px 0px 2px 10px" }}><strong>Account Number</strong></td>
                                                        <td style={{ width: "60%", padding: "2px 0px 2px 10px", fontWeight: "bold" }}>{AcNumber}</td>
                                                    </tr>
                                                    <tr className="rounded" style={{ border: `1px solid ${borderColor}`, borderRadius: "5px", }}>
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



                                                <div style={{ width: "55%", padding: "5px", paddingLeft: "10px", borderLeft: `0.1px solid ${borderColor}` }} className="">

                                                    <p style={{ fontSize: "14px", lineHeight: "18px", marginBottom: "8px" }}>
                                                        <strong>Branch Name:</strong> {BranchNameRef.current?.value} <br />
                                                        <strong>Routing Number:</strong> {RoutingNumberRef.current?.value} <br />
                                                        <strong>Swift Code:</strong> {SwiftCodeRef.current?.value} <br />
                                                    </p>

                                                    <p style={{ fontSize: "14px", lineHeight: "18px", marginBottom: "0px" }}>

                                                        <strong>Office Contact: </strong>
                                                        <span>
                                                            {NumberOneWhatsappChecked && (
                                                                <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                                            )}&nbsp;
                                                            {NumberOneImoChecked && (
                                                                <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                                            )}&nbsp;
                                                            {OfficeNumberOneRef.current?.value}<br />
                                                        </span>

                                                        {/* Office Number 2 Logic Start  */}
                                                        {OfficeNumberTwoRef.current?.value && (
                                                            <span style={{ paddingLeft: "106px", }}>
                                                                {NumberTwoWhatsappChecked && (
                                                                    <>
                                                                        <span>

                                                                            <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                                                            &nbsp;
                                                                        </span>

                                                                    </>
                                                                )}
                                                                {NumberTwoImoChecked && (
                                                                    <>
                                                                        <span>
                                                                            <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                                                            &nbsp;
                                                                        </span>
                                                                    </>
                                                                )}


                                                                {OfficeNumberTwoRef.current?.value}<br />
                                                            </span>
                                                        )}
                                                        {/* Office Number 2 Logic End  */}







                                                        <strong>Email: </strong>
                                                        <span>
                                                            <img src={EmailIcon} style={{ width: "14px" }} alt="" /> {OfficeEmailOneRef.current?.value}
                                                        </span>

                                                        {/* Office Email 2 Logic Start  */}
                                                        {OfficeEmailTwoRef.current?.value && (
                                                            <>
                                                                <br />
                                                                <span style={{ paddingLeft: "44px", }}>
                                                                    <img src={EmailIcon} style={{ width: "14px" }} alt="" /> {OfficeEmailTwoRef.current?.value}
                                                                </span>
                                                            </>
                                                        )}
                                                        {/* Office Emil 2 Logic End  */}


                                                    </p>
                                                    <h5 style={{ textAlign: "center", fontWeight: "bold", color: `${borderColor}` }}><RiCustomerService2Fill /> <br /> {HotLineNumberRef.current?.value}</h5>

                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                    {/* ================================= Template 1 start ============================== */}

                                </div>

                                <div className="col-md-6">
                                    <h3 className='text-center' style={{ marginBottom: "-20px", marginTop: "5px" }}> Template Two(2)</h3>
                                    {/* ================================= Template 2 start ============================== */}
                                    <div className="p-4" >


                                        <div className=" p-3 rounded" style={{ width: "100%", backgroundColor: "white", border: `2px solid ${borderColor}` }}>

                                            <img src={BankLogo ?? undefined} style={{ width: "100%", height: "85px" }} alt="Bank Asia" className="rounded img-fluid" />
                                            {/* Bank Name  */}
                                            <h2 className="mb-0" style={{ fontWeight: "bold", color: `${borderColor}` }}>{BankNameRef.current?.value}</h2>
                                            {/* Bank Address */}
                                            <small>{BankAddressRef.current?.value}</small>

                                            <div className="d-flex">


                                                <div style={{ width: "70%" }}>
                                                    <h6 className="text-center"><strong> Account Information </strong></h6>

                                                    <div className="acname rounded" style={{
                                                        backgroundColor: "white",
                                                        border: `1px solid ${borderColor || '#000'}`,
                                                        marginTop: "8px",
                                                        padding: "1px",
                                                        paddingLeft: "5px",
                                                        width: "98%"
                                                    }}>
                                                        <strong>AC Name: {AcTitle}</strong>
                                                    </div>
                                                    <div className="acname rounded" style={{
                                                        backgroundColor: "white",
                                                        border: `1px solid ${borderColor}`,
                                                        marginTop: "8px",
                                                        padding: "1px",
                                                        paddingLeft: "5px",
                                                        width: "98%"
                                                    }}>
                                                        <strong>AC Number: {AcNumber}</strong>
                                                    </div>
                                                    <div className="acname rounded" style={{
                                                        backgroundColor: "white",
                                                        border: `1px solid ${borderColor}`,
                                                        marginTop: "8px",
                                                        padding: "1px",
                                                        paddingLeft: "5px",
                                                        width: "98%"
                                                    }}>
                                                        <strong>Mobile Number: {AcMobileNumber}</strong>
                                                    </div>

                                                    <p style={{ fontSize: "12px", lineHeight: "18px", marginTop: "5px", marginBottom: "5px" }}>
                                                        <strong>Branch Name:</strong> {BranchNameRef.current?.value} <br />
                                                        <strong>Routing Number:</strong> {RoutingNumberRef.current?.value} <br />
                                                        <strong>Swift Code:</strong> {SwiftCodeRef.current?.value} <br />
                                                    </p>

                                                    <p style={{ fontSize: "12px", lineHeight: "18px", marginBottom: "0px" }}>
                                                        <strong>Office Contact: </strong>
                                                        <span>
                                                            {NumberOneWhatsappChecked && (
                                                                <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                                            )}&nbsp;
                                                            {NumberOneImoChecked && (
                                                                <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                                            )}&nbsp;
                                                            {OfficeNumberOneRef.current?.value}<br />
                                                        </span>


                                                        {/* Office Number 2 Logic Start  */}
                                                        {OfficeNumberTwoRef.current?.value && (
                                                            <span style={{ paddingLeft: "92px", }}>
                                                                {NumberTwoWhatsappChecked && (
                                                                    <>
                                                                        <span>

                                                                            <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                                                            &nbsp;
                                                                        </span>

                                                                    </>
                                                                )}
                                                                {NumberTwoImoChecked && (
                                                                    <>
                                                                        <span>
                                                                            <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                                                            &nbsp;
                                                                        </span>
                                                                    </>
                                                                )}


                                                                {OfficeNumberTwoRef.current?.value}<br />
                                                            </span>
                                                        )}
                                                        {/* Office Number 2 Logic End  */}


                                                        <strong>Email: </strong>
                                                        <span>
                                                            <img src={EmailIcon} style={{ width: "12px" }} alt="" /> {OfficeEmailOneRef.current?.value}
                                                        </span>

                                                        {/* Office Email 2 Logic Start  */}
                                                        {OfficeEmailTwoRef.current?.value && (
                                                            <>
                                                                <br />
                                                                <span style={{ paddingLeft: "38px", }}>
                                                                    <img src={EmailIcon} style={{ width: "14px" }} alt="" /> {OfficeEmailTwoRef.current?.value}
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
                                                    <h5 style={{ textAlign: "center", fontWeight: "bold", color: `${borderColor}` }}><RiCustomerService2Fill /> <br /> {HotLineNumberRef.current?.value}</h5>
                                                </div>

                                            </div>



                                        </div>
                                    </div>
                                    {/* ================================= Template 2 end ============================== */}

                                </div>

                            </div>

                            <div className="page-break" style={{ pageBreakBefore: 'always' }}></div>

                            <div className="row">

                                <div className="col-md-6">
                                    <h3 className='text-center' style={{ marginBottom: "-20px", marginTop: "30px" }}> Template Three(3)</h3>
                                    {/* ================================= Template 3 start ==============================  from 2*/}
                                    <div className="p-4 " >
                                        <div className="p-3 rounded" style={{ width: "100%", backgroundColor: "white", border: `2px solid ${borderColor}` }}>


                                            <div className="flex" style={{ display: "inline-flex", alignItems: "center", marginBottom: "5px" }}>
                                                <div>
                                                    <img src={BankLogo ?? undefined} style={{ width: "150px", height: "120px", }} alt="Bank Asia" className=" img-fluid rounded" />

                                                </div>
                                                <div className="" style={{ borderLeft: `0.1px solid ${borderColor}`, marginLeft: "10px", paddingLeft: "10px" }}>
                                                    {/* Bank Name  */}
                                                    <span className="mb-0" style={{ fontSize: "25px", lineHeight: "0", fontWeight: "bold", color: `${borderColor}`, }}>{BankNameRef.current?.value}</span> <br />
                                                    {/* Bank Address  */}
                                                    <span >{BankAddressRef.current?.value}</span>
                                                </div>
                                            </div>


                                            <div className="d-flex">

                                                <div style={{ width: "75%" }}>


                                                    <h6 className="text-center"><strong> Account Information </strong></h6>
                                                    <div className="acname rounded" style={{
                                                        backgroundColor: "white",
                                                        border: `1px solid ${borderColor}`,
                                                        marginTop: "7px",
                                                        padding: "1px",
                                                        paddingLeft: "5px",
                                                        width: "95%"
                                                    }}>
                                                        <strong>AC Name: {AcTitle}</strong>
                                                    </div>
                                                    <div className="acname rounded" style={{
                                                        backgroundColor: "white",
                                                        border: `1px solid ${borderColor}`,
                                                        marginTop: "7px",
                                                        padding: "1px",
                                                        paddingLeft: "5px",
                                                        width: "95%"
                                                    }}>
                                                        <strong>AC Number: {AcNumber}</strong>
                                                    </div>
                                                    <div className="acname rounded" style={{
                                                        backgroundColor: "white",
                                                        border: `1px solid ${borderColor}`,
                                                        marginTop: "7px",
                                                        padding: "1px",
                                                        paddingLeft: "5px",
                                                        width: "95%"
                                                    }}>
                                                        <strong>Mobile Number: {AcMobileNumber}</strong>
                                                    </div>

                                                    <p style={{ fontSize: "12px", lineHeight: "18px", marginTop: "5px", marginBottom: "0px" }}>
                                                        <strong>Branch Name:</strong> {BranchNameRef.current?.value} <br />
                                                        <strong>Routing Number:</strong> {RoutingNumberRef.current?.value} <br />
                                                        <strong>Swift Code:</strong> {SwiftCodeRef.current?.value} <br />
                                                    </p>

                                                    <p style={{ fontSize: "12px", lineHeight: "18px", marginBottom: "0px", marginTop: "5px" }}>
                                                        <strong>Office Contact: </strong>
                                                        <span>
                                                            {NumberOneWhatsappChecked && (
                                                                <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                                            )}&nbsp;
                                                            {NumberOneImoChecked && (
                                                                <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                                            )}&nbsp;
                                                            {OfficeNumberOneRef.current?.value}<br />
                                                        </span>


                                                        {/* Office Number 2 Logic Start  */}
                                                        {OfficeNumberTwoRef.current?.value && (
                                                            <span style={{ paddingLeft: "92px", }}>
                                                                {NumberTwoWhatsappChecked && (
                                                                    <>
                                                                        <span>

                                                                            <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                                                            &nbsp;
                                                                        </span>

                                                                    </>
                                                                )}
                                                                {NumberTwoImoChecked && (
                                                                    <>
                                                                        <span>
                                                                            <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                                                            &nbsp;
                                                                        </span>
                                                                    </>
                                                                )}


                                                                {OfficeNumberTwoRef.current?.value}<br />
                                                            </span>
                                                        )}
                                                        {/* Office Number 2 Logic End  */}


                                                        <strong>Email: </strong>
                                                        <span>
                                                            <img src={EmailIcon} style={{ width: "12px" }} alt="" /> {OfficeEmailOneRef.current?.value}
                                                        </span>

                                                        {/* Office Email 2 Logic Start  */}
                                                        {OfficeEmailTwoRef.current?.value && (
                                                            <>
                                                                <br />
                                                                <span style={{ paddingLeft: "38px", }}>
                                                                    <img src={EmailIcon} style={{ width: "14px" }} alt="" /> {OfficeEmailTwoRef.current?.value}
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
                                                    <h5 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "0", color: `${borderColor}` }}><RiCustomerService2Fill /> <br /> {HotLineNumberRef.current?.value}</h5>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    {/* ================================= Template 3 end ============================== */}

                                </div>

                                <div className="col-md-6">
                                    <h3 className='text-center' style={{ marginBottom: "-20px", marginTop: "5px" }}> Template Four(4)</h3>
                                    {/* ================================= Template 4 start ============================== from 1 */}
                                    <div className="p-4">

                                        <div className="p-3 rounded" style={{ width: "100%", backgroundColor: "white", border: `2px solid ${borderColor}` }}>


                                            <div className="flex" style={{ display: "flex", alignItems: "center", }}>

                                                <div className="banksdfinfo" style={{ width: "75%", }}>
                                                    {/* Bank Name  */}
                                                    <span className="mb-0" style={{ fontSize: "35px", lineHeight: "18px", fontWeight: "bold", color: `${borderColor}`, }}>{BankNameRef.current?.value}</span> <br />
                                                    {/* Bank Address  */}
                                                    <span> {BankAddressRef.current?.value}</span>
                                                </div>
                                                <div className="logoff" style={{ width: "20%", borderLeft: `0.1px solid ${borderColor}`, marginLeft: "5px", paddingLeft: "5px" }}>
                                                    <img src={BankLogo ?? undefined} style={{ width: "100%", height: "110px", }} alt="Bank Asia" className=" img-fluid rounded" />

                                                </div>
                                            </div>


                                            <h6 className="text-center"><strong> Account Information </strong></h6>
                                            <table className="table table-bordered rounded text-left  mb-0 table-bordered">
                                                <tbody className="thead-dark">
                                                    <tr className="rounded" style={{ border: `1px solid ${borderColor}`, borderRadius: "5px" }}>
                                                        <td style={{ padding: "0px 0px 0px 10px", }}><strong>Account Name</strong></td>
                                                        <td style={{ width: "60%", padding: "0px 0px 0px 10px", fontWeight: "bold" }}>{AcTitle}</td>
                                                    </tr>
                                                    <tr className="rounded" style={{ border: `1px solid ${borderColor}`, borderRadius: "5px" }}>
                                                        <td style={{ padding: "0px 0px 0px 10px" }}><strong>Account Number</strong></td>
                                                        <td style={{ width: "60%", padding: "0px 0px 0px 10px", fontWeight: "bold" }}>{AcNumber}</td>
                                                    </tr>
                                                    <tr className="rounded" style={{ border: `1px solid ${borderColor}`, borderRadius: "5px" }}>
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



                                                <div style={{ width: "55%", padding: "5px", paddingLeft: "10px", paddingBottom: "0px", borderLeft: `0.1px solid ${borderColor}` }} className="">

                                                    <p style={{ fontSize: "14px", lineHeight: "18px", marginBottom: "8px" }}>
                                                        <strong>Branch Name:</strong> {BranchNameRef.current?.value} <br />
                                                        <strong>Routing Number:</strong> {RoutingNumberRef.current?.value} <br />
                                                        <strong>Swift Code:</strong> {SwiftCodeRef.current?.value} <br />
                                                    </p>

                                                    <p style={{ fontSize: "14px", lineHeight: "18px", marginBottom: "0px" }}>
                                                        <strong>Office Contact: </strong>
                                                        <span>
                                                            {NumberOneWhatsappChecked && (
                                                                <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                                            )}&nbsp;
                                                            {NumberOneImoChecked && (
                                                                <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                                            )}&nbsp;
                                                            {OfficeNumberOneRef.current?.value}<br />
                                                        </span>


                                                        {/* Office Number 2 Logic Start  */}
                                                        {OfficeNumberTwoRef.current?.value && (
                                                            <span style={{ paddingLeft: "106px", }}>
                                                                {NumberTwoWhatsappChecked && (
                                                                    <>
                                                                        <span>

                                                                            <img src={WhatsppIcon} alt="WhatsApp Icon" style={{ width: "14px" }} />
                                                                            &nbsp;
                                                                        </span>

                                                                    </>
                                                                )}
                                                                {NumberTwoImoChecked && (
                                                                    <>
                                                                        <span>
                                                                            <img src={ImoIcon} alt="Imo Icon" style={{ width: "14px" }} />
                                                                            &nbsp;
                                                                        </span>
                                                                    </>
                                                                )}


                                                                {OfficeNumberTwoRef.current?.value}<br />
                                                            </span>
                                                        )}
                                                        {/* Office Number 2 Logic End  */}


                                                        <strong>Email: </strong>
                                                        <span>
                                                            <img src={EmailIcon} style={{ width: "14px" }} alt="" /> {OfficeEmailOneRef.current?.value}
                                                        </span>

                                                        {/* Office Email 2 Logic Start  */}
                                                        {OfficeEmailTwoRef.current?.value && (
                                                            <>
                                                                <br />
                                                                <span style={{ paddingLeft: "44px", }}>
                                                                    <img src={EmailIcon} style={{ width: "14px" }} alt="" /> {OfficeEmailTwoRef.current?.value}
                                                                </span>
                                                            </>
                                                        )}
                                                        {/* Office Emil 2 Logic End  */}

                                                    </p>
                                                    <h5 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "0px", color: `${borderColor}` }}><RiCustomerService2Fill /> <br /> {HotLineNumberRef.current?.value}</h5>

                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                    {/* ================================= Template 4 start ============================== */}

                                </div>

                            </div>

                        </div>
                        {/* All Templete Print Box End */}





                    </div>
                </div>

            </Modal>




        </div>
        // container end
    );
};

export default RegistrationBank;
