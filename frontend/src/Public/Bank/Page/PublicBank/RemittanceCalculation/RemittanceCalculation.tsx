import React, { useRef, useState } from "react";
import PublicBankLayout from "../Components/PublicBankLayout/PublicBankLayout";

const RemittanceCalculation: React.FC = () => {
    const remittanceRef = useRef<HTMLInputElement | null>(null);
    const interestRateRef = useRef<HTMLSelectElement | null>(null);

    const [interestRateShow, setInterestRateShow] = useState<string>("(2.50)%");
    const [totalRemittance, setTotalRemittance] = useState<number>(0);
    const [totalInterest, setTotalInterest] = useState<number>(0);
    const [totalTaka, setTotalTaka] = useState<number>(0);
    const [spelling, setSpelling] = useState<string>("");

    
    const [isSubmitHovered, setIsSubmitHovered] = useState(false);

    const onChangeInterestRate = () => {
        const interestRate = interestRateRef.current?.value ?? "2.50";
        setInterestRateShow(`(${interestRate})%`);
    };

    const remittanceCalculation = () => {
        const remittanceTaka = parseFloat(remittanceRef.current?.value ?? "0");
        const interestRate = parseFloat(interestRateRef.current?.value ?? "0");

        const interest = remittanceTaka * interestRate / 100;
        const total = remittanceTaka + interest;

        setTotalRemittance(remittanceTaka);
        setTotalInterest(interest);
        setTotalTaka(total);
        setSpelling(inWords(total));
    };

    const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const inWords = (num: number) => {
        const integerPart = Math.floor(num);
        const decimalPart = Math.round((num - integerPart) * 100);

        let str = convertToWords(integerPart);

        if (decimalPart > 0) {
            str += " and " + convertToWords(decimalPart) + " Paisa";
        }

        return str + " Only";
    };

    const convertToWords = (num: number) => {
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
                {/* Left Side Start  */}
                <div className="col-md-6 p-5">
                    <div className="card" style={{ backgroundColor: "#f7f7f7" }}>
                        <div className="card-header text-center">Remittance Calculation</div>
                        <div className="card-body">

                            <div className="">
                                <label className="mb-2">Remittance Calculation <span>{interestRateShow}</span></label>
                                <br />

                                <input
                                    ref={remittanceRef}
                                    type="number"
                                    placeholder="Remittance"
                                    className="form-control"
                                />

                                <select
                                    ref={interestRateRef}
                                    className="my-3"
                                    onChange={onChangeInterestRate}
                                >
                                    {[".50", "1", "1.50", "2", "2.50", "3", "3.50", "4", "4.50", "5", "5.50", "6", "6.50", "7", "7.50", "8", "8.50", "9", "9.50", "10"].map((rate) => (
                                        <option key={rate} value={rate} selected={rate === "2.50"}>{rate}</option>
                                    ))}
                                </select> <br />


                                <button onClick={remittanceCalculation}
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
                {/* Left Side End  */}




                {/* Right side Start  */}
                <div className="col-md-6 p-5">
                    <div className="card" style={{ backgroundColor: "#f7f7f7" }}>
                        <div className="card-header text-center">Result</div>
                        <div className="card-body">
                            <div className="Boxs_Right">
                                <p>Total Remittance: <span>{totalRemittance}</span></p>
                                <p>Total Interest: <span>{totalInterest}</span></p>
                                <hr />
                                <b>Total Taka: <span>{totalTaka}</span></b><br />
                                <b>Spelling: <span>{spelling}</span></b>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right side End  */}
            </div>
        </PublicBankLayout>
    );
};

export default RemittanceCalculation;
