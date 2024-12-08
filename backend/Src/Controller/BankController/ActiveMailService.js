const BankMailSend = require("./BankMailSend");
// এখানে ৬৬ নাম্বার লাইনে ডোমাইনের লিং টি দিতে হবে
const ActiveMailService = async (req, res) => {
    try {
        const {
            BankName,
            BankAddress,
            BranchName,
            SwiftCode,
            RoutingNumber,
            ManagerName,
            HotLineNumber,
            ServiceType,
            PaymentStatus,
            StartDate,
            EndDate,
            OfficeEmailOne,
            BankURL
        } = req.body;

        const generateEmailHtml = () => `
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
            <tr>
                <td align="center">
                    <!-- Header Section -->
                    <table width="600" cellpadding="0" cellspacing="0" style="background-color: #007bff; color: #ffffff; padding: 20px; border-radius: 8px 8px 0 0;">
                        <tr>
                            <td align="center">
                                <h1 style="margin: 0; font-size: 24px;">Bank Service Activation</h1>
                            </td>
                        </tr>
                    </table>
                    <!-- Body Section -->
                    <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border: 1px solid #ddd; padding: 20px;">
                        <tr>
                            <td>
                                <p style="font-size: 16px; color: #333;">Dear <strong>${ManagerName}</strong>,</p>
                                <p style="font-size: 14px; color: #555;">Your bank, <strong>${BankName}</strong>, has successfully activated its service. Below are the details:</p>
                                <!-- Details Section -->
                                <table width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0; font-size: 14px; color: #333; border-collapse: collapse;">
                                    <tr style="background-color: #f4f4f4;">
                                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Bank Name:</strong></td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">${BankName}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Service Type:</strong></td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">${ServiceType}</td>
                                    </tr>
                                    <tr style="background-color: #f4f4f4;">
                                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Payment Status:</strong></td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">${PaymentStatus}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Start Date:</strong></td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">${new Date(StartDate).toLocaleDateString('en-GB')}</td>
                                    </tr>
                                    <tr style="background-color: #f4f4f4;">
                                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>End Date:</strong></td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">${new Date(EndDate).toLocaleDateString('en-GB')}</td>
                                    </tr>
                                </table>
                                <!-- Software Link Section -->
                                <h3 style="font-size: 16px; color: #007bff; margin-top: 30px;">Access Your Bank Software:</h3>
                                <p style="font-size: 14px; color: #555;">You can access your bank's software using the following link:</p>
                                <p style="font-size: 16px; color: #007bff; font-weight: bold;">
                                    <a href="https://DomainName/${BankURL}" target="_blank" style="color: #007bff; text-decoration: none;">https://DomainName/${BankURL}</a>
                                </p>
                                <p style="font-size: 14px; color: #555;">If you have any questions, feel free to contact us.</p>
                            </td>
                        </tr>
                    </table>
                    <!-- Footer Section -->
                    <table width="600" cellpadding="0" cellspacing="0" style="background-color: #007bff; color: #ffffff; padding: 10px; border-radius: 0 0 8px 8px;">
                        <tr>
                            <td align="center" style="font-size: 12px;">
                                <p>Best Regards,<br>
                                Rasel Hossain Adib<br>
                                Phone: +8801934544352<br>
                                <a href="https://adibrasel.github.io/My_Portfolio/" target="_blank" style="color: #ffffff; text-decoration: none;">https://adibrasel.github.io/My_Portfolio</a></p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    `;

        const EmailContent = generateEmailHtml();
        const EmailSubject = `Active Bank Details for ${BankName}`;

        // Send email
        const SendEmail = await BankMailSend(OfficeEmailOne, EmailSubject, EmailContent);

        res.status(200).json({
            status: "Success",
            message: "Email sent successfully",
            SendEmail
        });
    } catch (error) {
        res.status(500).json({ status: "Failed", message: "Server error", error });
    }
};

module.exports = ActiveMailService;
