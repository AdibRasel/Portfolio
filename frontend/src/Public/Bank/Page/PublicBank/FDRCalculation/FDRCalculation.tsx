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

const FDRCalculation: React.FC = () => {

    const [isSubmitHovered, setIsSubmitHovered] = useState(false);


    // Refs for input fields
    const fdrTakaRef = useRef<HTMLInputElement | null>(null);
    const fdrRateRef = useRef<HTMLInputElement | null>(null);
    const fdrTimeRef = useRef<HTMLSelectElement | null>(null);

    // States for calculation results
    const [fdrTotalTaka, setFdrTotalTaka] = useState<number>(0);
    const [fdrInterest, setFdrInterest] = useState<number>(0);
    const [fdrTotalAmount, setFdrTotalAmount] = useState<number>(0);
    const [spelling, setSpelling] = useState<string>("");

    // FDR calculation logic
    const handleFDRCalculation = () => {
        const fdrTaka = parseFloat(fdrTakaRef.current?.value || "0");
        const fdrRate = parseFloat(fdrRateRef.current?.value || "0");
        const fdrTime = parseInt(fdrTimeRef.current?.value || "3");

        // Convert time to years if it's in months
        const timeInYears = fdrTime <= 12 ? fdrTime / 12 : fdrTime;

        // Simple Interest Calculation
        const totalInterest = (fdrTaka * fdrRate * timeInYears) / 100;
        const totalAmount = fdrTaka + totalInterest;

        // Update state with the results
        setFdrTotalTaka(fdrTaka);
        setFdrInterest(totalInterest);
        setFdrTotalAmount(totalAmount);
        setSpelling(numberToWords(totalAmount));
    };

    return (
        <PublicBankLayout>
            <div className="row">
                {/* Left Side Start */}
                <div className="col-md-6 p-5">
                    <div className="card" style={{ backgroundColor: "#f7f7f7" }}>
                        <div className="card-header text-center">FDR Calculation</div>
                        <div className="card-body">
                            <div className="Boxs_Left">
                                <label>FDR Total Amount</label>
                                <input
                                    ref={fdrTakaRef}
                                    type="number"
                                    placeholder="Enter Total FDR Amount"
                                    className="form-control mb-2"
                                />
                                <label>FDR Rate (%)</label>
                                <input
                                    ref={fdrRateRef}
                                    type="number"
                                    placeholder="Enter Interest Rate"
                                    className="form-control mb-2"
                                />
                                <label>FDR Time</label>
                                <select ref={fdrTimeRef} className="form-select mb-3" defaultValue="3">
                                    {[3, 6, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120].map((value) => (
                                        <option key={value} value={value}>
                                            {value} Month{value > 1 ? "s" : ""}
                                        </option>
                                    ))}
                                </select>
                                <button onClick={handleFDRCalculation} 
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
                </div>
                {/* Left Side End */}

                {/* Right Side Start */}
                <div className="col-md-6 p-5">
                    <div className="card" style={{ backgroundColor: "#f7f7f7" }}>
                        <div className="card-header text-center">Result</div>
                        <div className="card-body">
                            <div className="Boxs_Right">
                                <label>Total FDR Amount:</label>
                                <span><strong> {fdrTotalTaka} </strong> Taka</span>
                                <br />
                                <hr />
                                <label>Total Interest:</label>
                                <span><strong> {fdrInterest}</strong> Taka</span>
                                <br />
                                <label>Total Amount (Including Interest):</label>
                                <span><strong> {fdrTotalAmount}</strong> Taka</span>
                                <br />
                                <hr />
                                <label>Amount in Words:</label>
                                <span><strong> {spelling}</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side End */}
            </div>
        </PublicBankLayout>
    );
};

export default FDRCalculation;
