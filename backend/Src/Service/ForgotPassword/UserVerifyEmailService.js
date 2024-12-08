const OTPModel = require("../../Model/OTPModel/OTPModel");
const SendEmailUtilityForgotPassword = require("../../Utility/SendEmailUtilityForgotPassword/SendEmailUtilityForgotPassword");

const UserVerifyEmailService = async (Req, DataModel) => {
    let email = Req.params.email;
    let OTPCode = Math.floor(100000 + Math.random() * 900000);

    try {
        // Email Account Query
        let userResult = await DataModel.aggregate([
            { $match: { Email: email } },
            { $project: { FullName: 1 } }
        ]);

        const forgottenUserName = userResult.length > 0 ? userResult[0].FullName : null;

        if (userResult.length > 0) {
            // OTP Insert
            let CreateOTP = await OTPModel.create({ email: email, otp: OTPCode });

            // Function to generate HTML email content
            const generateEmailHtml = (otpCode) => `
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px; font-family: Arial, sans-serif;">
                    <tr>
                        <td align="center">
                            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border: 1px solid #ddd; padding: 20px;">
                                <tr>
                                    <td align="center" style="background-color: #007bff; color: #ffffff; padding: 10px;">
                                        <h1 style="font-size: 24px; margin: 0;">Portfolio Project - PIN Verification</h1>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px; color: #333333; font-size: 16px;">
                                        <p>Dear ${forgottenUserName},</p>
                                        <p>We received a request to reset your password. Use the PIN code below to complete the process:</p>
                                        <div style="text-align: center; margin: 20px 0;">
                                            <span style="font-size: 24px; color: #007bff; font-weight: bold; border: 1px solid #007bff; padding: 10px 20px;">
                                                ${otpCode}
                                            </span>
                                        </div>
                                        <p>If you did not request this, please ignore this email.</p>
                                        <p>Best Regards,<br>Portfolio Project Team</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding: 10px; font-size: 12px; color: #777777;">
                                        © 2024 Portfolio Project. All rights reserved.
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            `;

            const EmailContent = generateEmailHtml(OTPCode);
            const EmailSubject = `${OTPCode} is your Portfolio Project account recovery code.`;

            // Send the email
            let SendEmail = await SendEmailUtilityForgotPassword(email, EmailContent, EmailSubject);

            return{ status: "Success", SendEmail: SendEmail, ForgetenUserName: forgottenUserName };
        } else {
            return{ status: "Failed", data: "No User Found" };
        }
    } catch (e) {
        return{ status: "Failed", data: "Failed from controller" };
    }

}

module.exports = UserVerifyEmailService