const BankMailSend = require("./BankMailSend");

const RegistrationMailController = async (req, res) => {
    try {
        const {
            BankURL,
            StatusBank,
            BankName,
            BankLogo,
            BankAddress,
            BranchName,
            BankAccountLength,
            RoutingNumber,
            SwiftCode,
            HotLineNumber,
            Template,
            ManagerName,
            OfficeImage,
            BorderColor,
            OfficeNumberOne,
            OfficeNumberOneWhatsApp,
            OfficeNumberOneImo,
            OfficeNumberTwo,
            OfficeNumberTwoWhatsApp,
            OfficeNumberTwoImo,
            OfficeEmailOne,
            OfficeEmailTwo,
            ReferenceName,
            ReferenceNumber,
            CreateDate,
            ServiceType,
            PaymentStatus,
            PaymentAmount,
            StartDate,
            EndDate
        } = req.body;

        const generateEmailHtml = () => `
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
                <tr>
                    <td align="center">
                        <!-- Header Section -->
                        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #007bff; color: #ffffff; padding: 20px; border-radius: 8px 8px 0 0;">
                            <tr>
                                <td align="center">
                                    <h1 style="margin: 0; font-size: 24px;">Bank Registration Completed</h1>
                                </td>
                            </tr>
                        </table>
                        <!-- Body Section -->
                        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border: 1px solid #ddd; padding: 20px;">
                            <tr>
                                <td>
                                    <p style="font-size: 16px; color: #333;">Dear <strong>${ManagerName}</strong>,</p>
                                    <p style="font-size: 14px; color: #555;">Your bank- <strong>${BankName}</strong>, has successfully been registered. <b> Please complete the payment to start using the platform.</b></p>
                                    <p style="font-size: 14px; color: #555;">Below are your bank's registration details:</p>
                                    <!-- Details Section -->
                                    <table width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0; font-size: 14px; color: #333; border-collapse: collapse;">
                                        <tr style="background-color: #f4f4f4;">
                                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Bank Name:</strong></td>
                                            <td style="padding: 8px; border: 1px solid #ddd;">${BankName}</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Manager Name:</strong></td>
                                            <td style="padding: 8px; border: 1px solid #ddd;">${ManagerName}</td>
                                        </tr>
                                        <tr style="background-color: #f4f4f4;">
                                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Bank Address:</strong></td>
                                            <td style="padding: 8px; border: 1px solid #ddd;">${BankAddress}</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Branch Name:</strong></td>
                                            <td style="padding: 8px; border: 1px solid #ddd;">${BranchName}</td>
                                        </tr>
                                        <tr style="background-color: #f4f4f4;">
                                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Swift Code:</strong></td>
                                            <td style="padding: 8px; border: 1px solid #ddd;">${SwiftCode}</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Routing Number:</strong></td>
                                            <td style="padding: 8px; border: 1px solid #ddd;">${RoutingNumber}</td>
                                        </tr>
                                        <tr style="background-color: #f4f4f4;">
                                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Hotline:</strong></td>
                                            <td style="padding: 8px; border: 1px solid #ddd;">${HotLineNumber}</td>
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
                                    <!-- Payment Info Section -->
                                    <h3 style="font-size: 16px; color: #007bff; margin-top: 30px;">Payment Information:</h3>
                                    <table width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0; font-size: 14px; color: #333; border-collapse: collapse;">
                                        <tr>
                                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Bank Name:</strong></td>
                                            <td style="padding: 8px; border: 1px solid #ddd;">Bank Asia</td>
                                        </tr>
                                        <tr style="background-color: #f4f4f4;">
                                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Account Name:</strong></td>
                                            <td style="padding: 8px; border: 1px solid #ddd;">Rasal Hossain</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Account Number:</strong></td>
                                            <td style="padding: 8px; border: 1px solid #ddd;">1083475020738</td>
                                        </tr>
                                         <tr style="background-color: #f4f4f4;">
                                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Branch Name:</strong></td>
                                            <td style="padding: 8px; border: 1px solid #ddd;">Agent Banking</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Routing Number:</strong></td>
                                            <td style="padding: 8px; border: 1px solid #ddd;">070270602</td>
                                        </tr>
                                        <hr />
                                        <tr>
                                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Bkash (Personal):</strong></td>
                                            <td style="padding: 8px; border: 1px solid #ddd;">01934544352</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Nagad (Personal):</strong></td>
                                            <td style="padding: 8px; border: 1px solid #ddd;">01626757897</td>
                                        </tr>
                                    </table>
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
                                    Phone: +8801934544352, +8801626757897<br>
                                    <a href="https://adibrasel.github.io/My_Portfolio/" target="_blank" style="color: #ffffff; text-decoration: none;">https://adibrasel.github.io/My_Portfolio</a></p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        `;



        const EmailContent = generateEmailHtml();
        const EmailSubject = `Bank Registration Details for ${BankName}`;

        // Send email
        const SendEmail = await BankMailSend(
            OfficeEmailOne,
            EmailSubject,
            EmailContent
        );

        res.status(200).json({
            status: "Success",
            message: "Email sent successfully",
            SendEmail
        });
    } catch (error) {
        res.status(500).json({ status: "Failed", message: "Server error", error });
    }
};

module.exports = RegistrationMailController;
