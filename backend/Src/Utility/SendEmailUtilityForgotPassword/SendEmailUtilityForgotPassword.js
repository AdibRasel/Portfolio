var nodemailer = require('nodemailer');

const DoteEnv = require("dotenv")

DoteEnv.config({path:"./Config.env"})
const EmailAddress = process.env.SendGmailAddress;
const PassWord = process.env.SendGmailPassword;

const SendEmailUtilityForgotPassword = async (EmailTo, EmailText, EmailSubject) => {

    // let transporter = nodemailer.createTransport({
    //     host: 'mail.teamrabbil.com',
    //     port: 25,
    //     secure: false,
    //     auth: {
    //         user: "info@teamrabbil.com",
    //         pass: '~sR4[bhaC[Qs'
    //     }, tls: {
    //         rejectUnauthorized: false
    //     },
    // });


    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: EmailAddress, // sender user email  // user: "adibrasel.2022@gmail.com", // sender user email
            pass: PassWord, // sender password  // pass: "ezbj bzbw ycos gfil", // sender password
        },
    });


    // let mailOptions = {
    //     from: 'Portfolio Project <adibrasel.com@gmail.com>',
    //     to: EmailTo,
    //     subject: EmailSubject,
    //     text: EmailText
    // };

    let mailOptions = {
        from: 'Portfolio Project <adibrasel.com@gmail.com>',
        to: EmailTo,
        subject: EmailSubject,
        html: EmailText
    };


    return await transporter.sendMail(mailOptions)

}
module.exports = SendEmailUtilityForgotPassword