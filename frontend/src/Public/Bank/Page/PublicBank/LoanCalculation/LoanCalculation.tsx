import React, { useRef, useState } from "react";
import PublicBankLayout from "../Components/PublicBankLayout/PublicBankLayout";

// Number to words conversion function
const numberToWords = (num: number): string => {
    const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const convertToWords = (num: number): string => {
        if (num === 0) return 'Zero';
        if (num > 99999999) return 'Overflow';

        const crore = Math.floor(num / 10000000);
        num %= 10000000;
        const lakh = Math.floor(num / 100000);
        num %= 100000;
        const thousand = Math.floor(num / 1000);
        num %= 1000;
        const hundred = Math.floor(num / 100);
        num %= 100;
        const ten = Math.floor(num / 10);
        const unit = num % 10;

        let str = '';
        if (crore) str += (a[crore] || b[Math.floor(crore / 10)] + ' ' + a[crore % 10]) + ' Crore ';
        if (lakh) str += (a[lakh] || b[Math.floor(lakh / 10)] + ' ' + a[lakh % 10]) + ' Lakh ';
        if (thousand) str += (a[thousand] || b[Math.floor(thousand / 10)] + ' ' + a[thousand % 10]) + ' Thousand ';
        if (hundred) str += a[hundred] + ' Hundred ';
        if (ten > 1) str += b[ten] + (unit ? ' ' + a[unit] : '') + ' ';
        else if (ten === 1 || unit) str += a[10 * ten + unit] + ' ';

        return str.trim();
    };

    return convertToWords(num);
};

const LoanCalculation: React.FC = () => {
    const [isSubmitHovered, setIsSubmitHovered] = useState(false);



    // Refs for input fields
    const loanAmountRef = useRef<HTMLInputElement | null>(null);
    const loanRateRef = useRef<HTMLInputElement | null>(null);
    const loanTenureRef = useRef<HTMLInputElement | null>(null);
    const loanTenureTypeRef = useRef<HTMLSelectElement | null>(null);

    // States for calculation results
    const [emi, setEmi] = useState<number>(0);
    const [totalInterest, setTotalInterest] = useState<number>(0);
    const [totalPayment, setTotalPayment] = useState<number>(0);
    const [amountInWords, setAmountInWords] = useState<string>("");

    // Loan calculation logic
    const handleLoanCalculation = () => {
        // Ensure that the value is parsed as a number and handle null/undefined values
        const loanAmount = parseFloat(loanAmountRef.current?.value || "0");
        const annualRate = parseFloat(loanRateRef.current?.value || "0");
        const tenure = parseFloat(loanTenureRef.current?.value || "0"); // Loan tenure (months or years)
        const tenureType = loanTenureTypeRef.current?.value;
    
        // Convert tenure to months if in years
        const totalMonths = tenureType === "Years" ? tenure * 12 : tenure;
    
        // Monthly interest rate (annual rate divided by 12)
        const monthlyRate = annualRate / 12 / 100;
    
        // EMI Calculation using the formula
        const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    
        // Total interest = EMI * months - loan amount
        const totalInterest = emi * totalMonths - loanAmount;
    
        // Total payment = Loan amount + total interest
        const totalPayment = loanAmount + totalInterest;
    
        // Update states with the results
        setEmi(emi);
        setTotalInterest(totalInterest);
        setTotalPayment(totalPayment);
        setAmountInWords(numberToWords(totalPayment));
    };
    

    return (
        <PublicBankLayout>
            <div className="row">
                {/* Input Section */}
                <div className="col-md-6 p-5">
                    <div className="card" style={{ backgroundColor: "#f7f7f7" }}>
                        <div className="card-header text-center">Loan Calculation</div>
                        <div className="card-body">
                            <label>Loan Amount</label>
                            <input
                                ref={loanAmountRef}
                                type="number"
                                placeholder="Enter Loan Amount"
                                className="form-control mb-1"
                            />
                            {/* <br /> */}
                            <label>Annual Interest Rate (%)</label>
                            <input
                                ref={loanRateRef}
                                type="number"
                                placeholder="Enter Interest Rate"
                                className="form-control mb-1"
                            />
                            {/* <br /> */}
                            <label>Loan Tenure</label>
                            <input
                                ref={loanTenureRef}
                                type="number"
                                placeholder="Enter Tenure"
                                className="form-control mb-1"
                            />
                            {/* <br /> */}
                            <label>Tenure Type</label>
                            <select ref={loanTenureTypeRef} className="form-select">
                                <option value="Years">Years</option>
                                <option value="Months">Months</option>
                            </select>
                            <br />
                            {/* <button onClick={handleLoanCalculation} className="btn btn-primary">
                                Calculate
                            </button> */}
                            <button onClick={handleLoanCalculation} 
                                className="btn btn-primary w-100 mb-2"
                                style={{
                                    backgroundColor: isSubmitHovered ? "#81689D" : "rgb(71, 79, 122)",
                                    padding: "3px",
                                    transition: "700ms"
                                }}
                                onMouseEnter={() => setIsSubmitHovered(true)}
                                onMouseLeave={() => setIsSubmitHovered(false)}
                                >
                                    Submit
                                    </button>
                        </div>
                    </div>
                </div>
                {/* Result Section */}
                <div className="col-md-6 p-5">
                    <div className="card" style={{ backgroundColor: "#f7f7f7" }}>
                        <div className="card-header text-center">Loan Details</div>
                        <div className="card-body">
                            <label>Loan Amount: </label>
                            <span><strong> {loanAmountRef.current?.value}</strong> Taka</span>
                            <br />
                            <label>Tenure: </label>
                            <span><strong> {loanTenureRef.current?.value}</strong> {loanTenureTypeRef.current?.value}</span>
                             <hr />
                             <label>EMI: </label>
                            <span><strong> {emi.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</strong> Taka (per month)</span>
                            <br />
                            <label>Total Interest: </label>
                            <span><strong> {totalInterest.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</strong> Taka</span>
                            <br />
                            <label>Total Payment (Principal + Interest): </label>
                            <span><strong> {totalPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</strong> Taka</span>
                            <hr />
                            <label>Amount in Words: </label>
                            <span><strong> {amountInWords}</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </PublicBankLayout>
    );
};

export default LoanCalculation;
