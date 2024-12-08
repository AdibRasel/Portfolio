import SuperAdminLayout from "SuperAdmin/SuperAdminLayout/SuperAdminLayout"

import React, { useState, useRef, useEffect } from 'react';
import { LiaSaveSolid } from "react-icons/lia";
import { Form } from "react-bootstrap"; // Importing Form from react-bootstrap

import { ActiveBankMailSend } from "../APIServiceBank/APIServiceBank"
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

// import {UpdateBank, ReadWithURL} from "../APIServiceBank/APIServiceBank"
import { UpdateBankinfo, ReadWithURL } from "../APIServiceBank/APIServiceBank"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


interface BankData {
    _id: string;
    BankURL: string;
    StatusBank: string;
    BankName: string;
    BankLogo: string;
    BankAddress: string;
    BranchName: string;
    BankAccountLength: number;
    RoutingNumber: string;
    SwiftCode: string;
    HotLineNumber: string;
    Template: string;
    ManagerName: string;
    OfficeImage: string;
    BorderColor: string;
    OfficeNumberOne: string;
    OfficeNumberOneWhatsApp: boolean;
    OfficeNumberOneImo: boolean;
    OfficeNumberTwo: string;
    OfficeNumberTwoWhatsApp: boolean;
    OfficeNumberTwoImo: boolean;
    OfficeEmailOne: string;
    OfficeEmailTwo: string;
    ReferenceName: string;
    ReferenceNumber: string;
    CreateDate: string;
    ServiceType: string;
    PaymentStatus: string;
    PaymentAmount: number;
    StartDate: string;
    EndDate: string;
}


const UpdateBank = () => {


    const navigate = useNavigate();


    const [Loading, SetLoading] = useState<boolean>(false);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);


    const ReferenceNameRef = useRef<HTMLInputElement>(null);
    const ReferenceNumberRef = useRef<HTMLInputElement>(null);

    const [selectedTemplate, setSelectedTemplate] = useState<string>("");

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
    const PaymentRef = useRef<HTMLInputElement>(null);

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
    const [PaymentValadation, SetPaymentValadation] = useState<string>("");
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


    const [bankData, setBankData] = useState<BankData | null>(null);
    const { url } = useParams<{ url: string }>(); // Capture `url` from the route parameters

    // const [startDate, setStartDate] = useState(new Date() );
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);


    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (value: Date | null): void => {
        setSelectedDate(value);
    };


    const serviceTypeRef = useRef<HTMLSelectElement>(null);
    const paymentStatusRef = useRef<HTMLSelectElement>(null);

    const [selectedServiceType, setSelectedServiceType] = useState<string>();
    const [selectedPaymentStatus, setSelectedPaymentStatus] = useState<string>();

    // State for dynamic background class
    const [paymentStatusBgClass, setPaymentStatusBgClass] = useState<string>('bg-warning'); // Default background class for Pending
    const [serviceTypeBgClass, setServiceTypeBgClass] = useState<string>(''); // Default background class for Pending


    const statusRef = useRef<HTMLSelectElement>(null);
    const [status, setStatus] = useState<string>(''); // Default status is 'Active'

    // Handler for changing the status
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setStatus(value);
    };

    // Conditional background color class based on status
    const statusBgClass = status === 'Active' ? 'bg-success text-white' : 'bg-danger text-light';


    const [BankURL, setBankURL] = useState<string>('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Assuming ReadWithURL is a function that fetches data based on the `url`
                const response = await ReadWithURL(url);


                // Check if data exists and is properly structured
                if (response?.BankInfo?.data?.data?.[0]) {
                    setBankData(response.BankInfo.data.data[0]);
                    setNumberOneWhatsappChecked(response.BankInfo.data.data[0].OfficeNumberOneWhatsApp)
                    setNumberTwoWhatsappChecked(response.BankInfo.data.data[0].OfficeNumberTwoWhatsApp)
                    setNumberOneImoChecked(response.BankInfo.data.data[0].OfficeNumberOneImo)
                    setNumberTwoImoChecked(response.BankInfo.data.data[0].OfficeNumberTwoImo)
                    setBankLogo(response.BankInfo.data.data[0].BankLogo)
                    setOfficeImage(response.BankInfo.data.data[0].OfficeImage)
                    setSelectedTemplate(response.BankInfo.data.data[0].Template)
                    setStartDate(response.BankInfo.data.data[0].StartDate)
                    setEndDate(response.BankInfo.data.data[0].EndDate)
                    setSelectedDate(response.BankInfo.data.data[0].EndDate)
                    setStatus(response.BankInfo.data.data[0].StatusBank)
                    setBankURL(response.BankInfo.data.data[0].BankURL)

                    setSelectedServiceType(response.BankInfo.data.data[0].ServiceType)
                    setSelectedPaymentStatus(response.BankInfo.data.data[0].PaymentStatus)

                    if (response.BankInfo.data.data[0].ServiceType === 'Expired') {
                        setServiceTypeBgClass('bg-danger text-light '); // Completed
                    }


                    if (serviceTypeRef.current && response.BankInfo.data.data[0].ServiceType) {
                        serviceTypeRef.current.value = response.BankInfo.data.data[0].ServiceType;
                    }
                    if (paymentStatusRef.current && response.BankInfo.data.data[0].PaymentStatus) {
                        paymentStatusRef.current.value = response.BankInfo.data.data[0].PaymentStatus;
                        // Set the background class based on the initial payment status

                        if (response.BankInfo.data.data[0].PaymentStatus === 'Completed') {
                            setPaymentStatusBgClass('bg-success text-white '); // Completed
                        } else if (response.BankInfo.data.data[0].PaymentStatus === 'Failed') {
                            setPaymentStatusBgClass('bg-danger'); // Failed
                        }
                    }

                } else {
                    console.error('Unexpected data structure:', response);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (url) { // Ensure url is available before fetching data
            fetchData();
        }
    }, [url]); // Add `url` to the dependency array





    // Handle changes when new values are selected
    const handleServiceTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedServiceType(value);
        setServiceTypeBgClass("bg-success text-white")
        // You can store this value to your server, API, or localStorage
    };

    const handlePaymentStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedPaymentStatus(value);

        // Change background color based on payment status selection
        if (value === 'Completed') {
            setPaymentStatusBgClass('bg-success text-white '); // Completed
        } else if (value === 'Failed') {
            setPaymentStatusBgClass('bg-danger text-light '); // Failed
        } else {
            setPaymentStatusBgClass('bg-warning'); // Pending
        }
    }




    const [ExistBank, SetExistBank] = useState<string>("");


    // Submit Button
    const Submit = async () => {
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

        // Validate PaymentR
        if (!PaymentRef.current?.value) {
            SetPaymentValadation("Payment Amount is required");
            isValid = false;
        } else {
            SetPaymentValadation("");
        }

        // Validate ManagerName
        if (!ManagerNameRef.current?.value) {
            SetManagerNameValadation("Manager Name is required");
            isValid = false;
        } else {
            SetManagerNameValadation("");
        }

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
                    BankURL: URLRef.current?.value,
                    StatusBank: status,
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
                    OfficeNumberTwo: OfficeNumberTwoRef.current?.value || "",
                    OfficeNumberTwoWhatsApp: NumberTwoWhatsappChecked,
                    OfficeNumberTwoImo: NumberTwoImoChecked,
                    OfficeEmailOne: OfficeEmailOneRef.current?.value,
                    OfficeEmailTwo: OfficeEmailTwoRef.current?.value || "",
                    ReferenceName: ReferenceNameRef.current?.value || "",
                    ReferenceNumber: ReferenceNumberRef.current?.value || "",
                    ServiceType: serviceTypeRef.current?.value || "Free",
                    PaymentAmount: PaymentRef.current?.value || 0,
                    PaymentStatus: paymentStatusRef.current?.value || "Pending",
                    StartDate: startDate,
                    EndDate: endDate
                };

                // // Call BankRegistration function with the PostBody
                // const BankRegistrations = await  BankRegistration(PostBody);
                SetLoading(true)




                UpdateBankinfo(PostBody, BankURL)
                .then((UpdateBankinfo) => {
                    console.log(UpdateBankinfo)
                    // Log the result here
                    if (UpdateBankinfo.status === "Bank Update Success") {

                        // if (status == "Active") {
                        //     navigate('/ActiveBank');

                        // }

                        // if (status == "Pending") {
                        //     navigate('/PendingBank');
                        // }

                        SetLoading(false)


                        window.history.back();


                    } else if (UpdateBankinfo.status === "Bank is already registered") {

                        // SetExistBank(UpdateBankinfo.BankInfo)
                        SetLoading(false)


                    } else if (UpdateBankinfo.status === "server error") {


                    }

                })
                .catch((error) => {
                    // Handle any errors
                });

                if(status === "Active"){
                    ActiveBankMailSend(PostBody) // Active Bank Mail Send
                }

                if(selectedServiceType === "Full-Time" && status === "Active"){
                    const PostBodyFullTime = {
                        BankURL: URLRef.current?.value,
                        StatusBank: status,
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
                        OfficeNumberTwo: OfficeNumberTwoRef.current?.value || "",
                        OfficeNumberTwoWhatsApp: NumberTwoWhatsappChecked,
                        OfficeNumberTwoImo: NumberTwoImoChecked,
                        OfficeEmailOne: OfficeEmailOneRef.current?.value,
                        OfficeEmailTwo: OfficeEmailTwoRef.current?.value || "",
                        ReferenceName: ReferenceNameRef.current?.value || "",
                        ReferenceNumber: ReferenceNumberRef.current?.value || "",
                        ServiceType: serviceTypeRef.current?.value || "Free",
                        PaymentAmount: PaymentRef.current?.value || 0,
                        PaymentStatus: paymentStatusRef.current?.value || "Pending",
                        StartDate: startDate,
                        EndDate: "Full-Time"
                    };
                    ActiveBankMailSend(PostBodyFullTime) // Active Bank Mail Send

                }



            }


        } else {
        }
    };







    return <>
        <SuperAdminLayout>


            <div className="container">

                <div className="card" >

                    <div className="card-header" style={{ backgroundColor: "#474F7A" }}>
                        <span className="text-center" style={{ fontWeight: 'bold', fontSize: '22px', color: '#000', paddingLeft: "45%" }}>
                            <span style={{ color: 'white' }}>Edit Bank</span>
                        </span>
                        <span className="text-right">
                            <select
                                className={`form-select form-select-sm text-right ${statusBgClass}`}
                                style={{ width: '100px', float: "right" }}
                                ref={statusRef}
                                value={status}
                                onChange={handleStatusChange}
                            >
                                <option value="Active">Active</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </span>
                    </div>



                    <div className="card-body">

                        {bankData ? (
                            <div>

                                <div className="row">
                                    {/* Bank Info Start */}
                                    <div className="col-md-6">
                                        <h5 className="card-title text-center"><u> <b> Bank </b> Information </u></h5>

                                        {/* Bank Name box */}
                                        <div className="mb-2">
                                            <span style={{ fontWeight: "bold" }}>Bank Name : <span className='text-danger'>*</span> </span> <br />
                                            <input
                                                ref={BankNameRef}
                                                type="text"
                                                style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }}
                                                defaultValue={bankData.BankName}  // Set default value
                                            />
                                            <span className='text-danger'>{BankNameValadation}</span>
                                        </div>

                                        {/* Bank Logo box */}
                                        <div className="">
                                            <div className="d-flex">
                                                {/* logo input, left side */}
                                                <div className="left">
                                                    <span style={{ fontWeight: "bold" }}>Bank Logo <span className='text-danger'>*</span></span> <br />
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => handleImageUpload(e, 1)}
                                                        style={{ width: "100%" }}
                                                    />
                                                    <span className='text-danger'>{BankLogoValadation}</span>
                                                </div>

                                                {BankLogo && (
                                                    <div className='ms-auto'>
                                                        <img
                                                            style={{ height: "110px", width: "100%", marginTop: "-6px", marginRight: "10px", marginBottom: "0px" }}
                                                            src={BankLogo}
                                                            alt=""
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Bank Address box */}
                                        <div className="mb-2">
                                            <span style={{ fontWeight: "bold" }}>Bank Address : <span className='text-danger'>*</span> </span> <br />
                                            <input
                                                ref={BankAddressRef}
                                                type="text"
                                                style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }}
                                                defaultValue={bankData.BankAddress} // Set default value
                                            />
                                            <span className='text-danger'>{BankAddressValadation}</span>
                                        </div>

                                        {/* Branch Name box */}
                                        <div className="mb-2">
                                            <span style={{ fontWeight: "bold" }}>Branch Name : <span className='text-danger'>*</span> </span> <br />
                                            <input
                                                ref={BranchNameRef}
                                                type="text"
                                                style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }}
                                                defaultValue={bankData.BranchName} // Set default value
                                            />
                                            <span className='text-danger'>{BranchNameValadation}</span>
                                        </div>

                                        {/* Bank Account Length box */}
                                        <div className="mb-2">
                                            <span style={{ fontWeight: "bold" }}>Bank Account Length :  <span className='text-danger'>*</span> </span> <span>(ব্যাংক একাউন্ট কত সংখ্যার ? )</span> <br />
                                            <input
                                                ref={BankACLengthRef}
                                                type="number"
                                                style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }}
                                                defaultValue={bankData.BankAccountLength} // Set default value
                                            />
                                            <span className='text-danger'>{BankACLengthValadation}</span>
                                        </div>

                                        {/* Routing Number box */}
                                        <div className="mb-2">
                                            <span style={{ fontWeight: "bold" }}>Routing Number : <span className='text-danger'>*</span> </span> <br />
                                            <input
                                                ref={RoutingNumberRef}
                                                type="text"
                                                style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }}
                                                defaultValue={bankData.RoutingNumber} // Set default value
                                            />
                                            <span className='text-danger'>{RoutingNumberValadation}</span>
                                        </div>

                                        {/* Swift Code box */}
                                        <div className="mb-2">
                                            <span style={{ fontWeight: "bold" }}>Swift Code : <span className='text-danger'>*</span> </span> <br />
                                            <input
                                                ref={SwiftCodeRef}
                                                type="text"
                                                style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }}
                                                defaultValue={bankData.SwiftCode} // Set default value
                                            />
                                            <span className='text-danger'>{SwiftCodeValadation}</span>
                                        </div>

                                        {/* HotLine Number box */}
                                        <div className="mb-2">
                                            <span style={{ fontWeight: "bold" }}>HotLine Number : <span className='text-danger'>*</span> </span> <br />
                                            <input
                                                ref={HotLineNumberRef}
                                                type="text"
                                                style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }}
                                                defaultValue={bankData.HotLineNumber} // Set default value
                                            />
                                            <span className='text-danger'>{HotLineNumberValadation}</span>
                                        </div>


                                        {/* REGISTRATION box */}
                                        <div className="mb-2">
                                            <span style={{ fontWeight: "bold" }}>REGISTRATION Date : </span> <br />
                                            {/* <input ref={OfficeEmailTwoRef} defaultValue={bankData.CreateDate} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", borderRadius: "5px" }} /> */}
                                            <p style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", borderRadius: "5px" }}>
                                                {new Date(bankData.CreateDate).toLocaleDateString('en-GB', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: 'numeric',
                                                })}
                                            </p>
                                            <span className='text-danger'>{ }</span>
                                        </div>



                                        {/* Start and End Date  */}
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                {/* Stact Date Box  */}
                                                <div className="mb-2">
                                                    <span style={{ fontWeight: "bold" }}>
                                                        Stact Date : <span className="text-danger">*</span>
                                                    </span>
                                                    <br />
                                                    <DatePicker
                                                        className="form-select form-select-sm"
                                                        selected={startDate}
                                                        onChange={(date: Date | null) => setStartDate(date)} // Now handling null type
                                                        dateFormat="dd/MM/yyyy"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                {/* End Date Box  */}
                                                <div className="mb-2">
                                                    <span style={{ fontWeight: "bold" }}>
                                                        End Date : <span className="text-danger">*</span>
                                                    </span>
                                                    <br />
                                                    <DatePicker
                                                        className="form-select form-select-sm"
                                                        selected={endDate}
                                                        onChange={(date: Date | null) => setEndDate(date)} // Now handling null type
                                                        dateFormat="dd/MM/yyyy"
                                                    />
                                                </div>
                                            </div>
                                        </div>



                                        <div className="row">
                                            <div className="col-md-6">
                                                <span style={{ fontWeight: "bold" }}>Service Type : <span className='text-danger'>*</span> </span> <br />
                                                <select
                                                    className={`form-select form-select-sm ${serviceTypeBgClass}`}
                                                    style={{ width: '195px' }}
                                                    ref={serviceTypeRef}
                                                    value={selectedServiceType}
                                                    onChange={handleServiceTypeChange}
                                                >
                                                    {selectedServiceType === "Expired" && (
                                                        <option value="Expired">Expired</option>
                                                    )}
                                                    <option value="Free">Free</option>
                                                    <option value="Yearly">Yearly</option>
                                                    <option value="One-time">One-time</option>
                                                    <option value="Full-Time">Full-Time</option>
                                                </select>
                                            </div>


                                            <div className="col-md-6">
                                                <span style={{ fontWeight: "bold" }}>Payment Status : <span className='text-danger'>*</span> </span> <br />
                                                <select
                                                    className={`form-select form-select-sm ${paymentStatusBgClass}`} // Dynamic class for background color
                                                    style={{ width: '195px' }}
                                                    ref={paymentStatusRef}
                                                    value={selectedPaymentStatus}
                                                    onChange={handlePaymentStatusChange}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Completed">Completed</option>
                                                    <option value="Failed">Failed</option>
                                                </select>
                                            </div>
                                        </div>




                                        {/* Payment Amount box */}
                                        <div className="mt-3">
                                            <span style={{ fontWeight: "bold" }}>Payment Amount : <span className='text-danger'>*</span> </span> <br />
                                            <input
                                                ref={PaymentRef}
                                                type="number"
                                                style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", fontWeight: "bold", borderRadius: "5px" }}
                                                defaultValue={bankData.PaymentAmount} // Set default value
                                            />
                                            <span className='text-danger'>{PaymentValadation}</span>
                                        </div>


                                    </div>
                                    {/* Bank Info End */}





















                                    {/* Office Info Start */}
                                    <div className="col-md-6">
                                        <h5 className="card-title text-center"><u> <b> Office </b> Information </u></h5>

                                        {/* Bank URL box */}
                                        <div className="mb-2">
                                            <span style={{ fontWeight: "bold" }}>URL : <span className='text-danger'>*</span> <span style={{ fontSize: "14px" }}> Spaces are not allowed here. Like (BankNameAddressEtc) </span> </span> <br />
                                            <input
                                                ref={URLRef}
                                                type="text"
                                                placeholder='https://domain/yourbankname.com'
                                                style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", borderRadius: "5px" }}
                                                defaultValue={bankData.BankURL}  // Set default value
                                                onChange={(e) => {
                                                    setURLValue(e.target.value.replace(/\s/g, ''));
                                                }}
                                            />
                                            <span className='text-danger'>{URLValadation}</span>
                                        </div>

                                        {/* Office Image box */}
                                        <div className="">
                                            <div className="d-flex">
                                                <div className="mb-2">
                                                    <span style={{ fontWeight: "bold" }}>Office Image <span className='text-danger'>*</span></span> <br />
                                                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 2)} style={{ width: "100%" }} />
                                                    <span className='text-danger'>{OfficeImageValadation}</span>
                                                </div>
                                                {OfficeImage && (
                                                    <div className='ms-auto'>
                                                        <img
                                                            style={{ height: "110px", width: "100%", marginTop: "-6px", marginRight: "10px", marginBottom: "0px" }}
                                                            src={OfficeImage}
                                                            alt=""
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Border Color box */}
                                        <div className="mb-2">
                                            <span style={{ fontWeight: "bold" }}>Border Color :  </span> <br />
                                            <input ref={BorderColorRef} type="color" defaultValue={bankData.BorderColor} /> {/* Set default value */}
                                        </div>

                                        {/* Manager Name box */}
                                        <div className="mb-2">
                                            <span style={{ fontWeight: "bold" }}>Manager Name : <span className='text-danger'>*</span> </span> <br />
                                            <input ref={ManagerNameRef} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", borderRadius: "5px" }} defaultValue={bankData.ManagerName} />
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
                                                {/* <input
                                                    type="checkbox"
                                                    style={{ border: "1px solid #666666", marginRight: "2px" }}
                                                    className="form-check-input"
                                                    checked={bankData.OfficeNumberOneWhatsApp === true} // This checks if the value is true
                                                    onChange={HandleNumberOneWhatsappChecked}
                                                /> */}
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


                                            <input ref={OfficeNumberOneRef} defaultValue={bankData.OfficeNumberOne} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", borderRadius: "5px" }} />

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
                                            <input ref={OfficeNumberTwoRef} defaultValue={bankData.OfficeNumberTwo} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", borderRadius: "5px" }} />
                                            <span className='text-danger'>{ }</span>
                                        </div>

                                        {/* Office Email One box */}
                                        <div className="mb-2">
                                            <span style={{ fontWeight: "bold" }}>Office Email One : <span className='text-danger'>*</span> </span> <br />
                                            <input ref={OfficeEmailOneRef} defaultValue={bankData.OfficeEmailOne} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", borderRadius: "5px" }} />
                                            <span className='text-danger'>{OfficeEmailOneValadation}</span>
                                        </div>

                                        {/* Office Email Two box */}
                                        <div className="mb-2">
                                            <span style={{ fontWeight: "bold" }}>Office Email Two : </span> <br />
                                            <input ref={OfficeEmailTwoRef} defaultValue={bankData.OfficeEmailTwo} type="text" style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", borderRadius: "5px" }} />
                                            <span className='text-danger'>{ }</span>
                                        </div>



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
                                                <input ref={ReferenceNameRef} defaultValue={bankData.ReferenceName} style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", borderRadius: "5px" }} className="mb-2" type="text" placeholder="Name" />
                                                <input ref={ReferenceNumberRef} defaultValue={bankData.ReferenceNumber} style={{ width: "100%", padding: "2px 0px 2px 10px", border: "0.5px solid #666666", borderRadius: "5px" }} className="mb-2" type="text" placeholder="Number" />


                                            </div>
                                        </div>





                                    </div>
                                    {/* Office Info End */}
                                </div>

                            </div>
                        ) : (
                            <div className="spinner-border text-black text-center" style={{ textAlign: "center", margin: "auto" }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        )}




                        {Loading && (
                            <div className="text-left m-2">
                                <div className="spinner-border text-black" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}

                        <button onClick={Submit} type="button" style={{ width: "100%", marginTop: "10px", backgroundColor: "#474F7A", color: "white", borderRadius: "5px" }} >
                            Save <LiaSaveSolid />
                        </button>

                    </div>
                    {/* card end  */}



                </div>





            </div>




        </SuperAdminLayout>
    </>
}
export default UpdateBank