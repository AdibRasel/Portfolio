import React, { useRef, useState } from "react";
import PublicBankLayout from "../Components/PublicBankLayout/PublicBankLayout";

const DPSCalculation: React.FC = () => {
    // Refs for input fields
    const dpsTakaRef = useRef<HTMLInputElement | null>(null);
    const interestRateRef = useRef<HTMLInputElement | null>(null);
    const dpsYearRef = useRef<HTMLSelectElement | null>(null);

    // States for calculation results
    const [monthlyDpsTaka, setMonthlyDpsTaka] = useState<number>(0);
    const [dpsYear, setDpsYear] = useState<number>(5); // Default to 5 years
    const [dpsTotalTaka, setDpsTotalTaka] = useState<number>(0);
    const [dpsBonus, setDpsBonus] = useState<number>(0);
    const [dpsInTotalTaka, setDpsInTotalTaka] = useState<number>(0);
    const [spelling, setSpelling] = useState<string>("");

    const [isSubmitHovered, setIsSubmitHovered] = useState(false);

    // Function to handle DPS calculation
    // Function to handle DPS calculation
    const handleDPSCalculation = () => {
        // Get values from refs and parse them
        const dpsTaka = parseFloat(dpsTakaRef.current?.value || "0"); // Monthly contribution (1000 Taka)
        const interestRate = parseFloat(interestRateRef.current?.value || "0"); // Annual interest rate (9.77%)
        const years = parseInt(dpsYearRef.current?.value || "5"); // Duration (5 years)

        // Calculate the monthly interest rate
        const monthlyInterestRate = interestRate / 100 / 12; // Monthly interest rate
        const months = years * 12; // Total months (5 years * 12 months)

        // Formula for total amount with compound interest (Future Value of Annuity)
        const totalWithBonus = dpsTaka * ((Math.pow(1 + monthlyInterestRate, months) - 1) / monthlyInterestRate) * (1 + monthlyInterestRate);

        // Round the total amount to nearest integer for simplicity
        const roundedTotal = Math.round(totalWithBonus);

        // Total contributions without interest
        const totalDpsTaka = dpsTaka * months;

        // Bonus is the difference between the total amount with bonus and the total contributions
        const bonus = roundedTotal - totalDpsTaka;

        // Log the results for debugging
        console.log("Total with Bonus: ", roundedTotal);
        console.log("Total Contributions: ", totalDpsTaka);
        console.log("Bonus: ", bonus);

        // Set the state values
        setMonthlyDpsTaka(dpsTaka);
        setDpsYear(years);
        setDpsTotalTaka(totalDpsTaka);
        setDpsBonus(bonus);
        setDpsInTotalTaka(roundedTotal);
        setSpelling(inWords(roundedTotal));  // Assuming `inWords` is a function to convert numbers to words
    };
    
    
    
    

    const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const inWords = (num: number): string => {
        const integerPart = Math.floor(num);
        const decimalPart = Math.round((num - integerPart) * 100);

        let str = convertToWords(integerPart);
        
        if (decimalPart > 0) {
            str += " and " + convertToWords(decimalPart) + " Paisa";
        }
        
        return str + " Only";
    };

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

    return (
        <PublicBankLayout>
            <div className="row">
                {/* Left Side Start */}
                <div className="col-md-6 p-5">
                    <div className="card" style={{ backgroundColor: "#f7f7f7" }}>
                        <div className="card-header text-center">DPS Calculation</div>
                        <div className="card-body">
                            <div className="Boxs_Left">
                                <label>Monthly DPS Amount</label><br />
                                <input
                                    ref={dpsTakaRef}
                                    type="number"
                                    placeholder="DPS Amount"
                                    className="form-control"
                                />
                                <br />

                                <label>Interest Rate (6.50%)</label><br />
                                <input
                                    ref={interestRateRef}
                                    type="number"
                                    placeholder="Interest Rate"
                                    className="form-control"
                                />
                                <br />
                                <select
                                    ref={dpsYearRef}
                                    className="form-select"
                                    defaultValue="5"
                                >
                                    {[...Array(12)].map((_, index) => (
                                        <option key={index + 1} value={index + 1}>{index + 1} Year</option>
                                    ))}
                                </select>
                                <br />
                                <button onClick={handleDPSCalculation} 
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
                                Monthly Contribution: <span><strong> {monthlyDpsTaka} </strong></span> Taka<br />
                                Total in <span>{dpsYear}</span> years: <span><strong>{dpsTotalTaka}</strong></span> Taka<br />
                                <hr />
                                Total Bonus: <span><strong>{dpsBonus}</strong></span> Taka<br />
                                Total with Bonus: <span><strong>{dpsInTotalTaka}</strong></span> Taka<br />
                                <br />
                                <b>Amount in Words:</b> <span><strong>{spelling}</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side End */}
            </div>
        </PublicBankLayout>
    );
};

export default DPSCalculation;
