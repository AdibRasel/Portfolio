// import React from 'react';
// import ReactDOMServer from 'react-dom/server';

// interface EmailProps {
//     otpCode: number;
// }

// const EmailTextHtmlDesign: React.FC<EmailProps> = ({ otpCode }) => (
//     <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#f4f4f4', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//         <tr>
//             <td align="center">
//                 <table width="600" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#ffffff', border: '1px solid #ddd', padding: '20px' }}>
//                     <tr>
//                         <td align="center" style={{ backgroundColor: '#007bff', color: '#ffffff', padding: '10px' }}>
//                             <h1 style={{ fontSize: '24px', margin: 0 }}>Portfolio Project - PIN Verification</h1>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td style={{ padding: '20px', color: '#333333', fontSize: '16px' }}>
//                             <p>Dear User,</p>
//                             <p>We received a request to reset your password. Use the PIN code below to complete the process:</p>
//                             <div style={{ textAlign: 'center', margin: '20px 0' }}>
//                                 <span style={{ fontSize: '24px', color: '#007bff', fontWeight: 'bold', border: '1px solid #007bff', padding: '10px 20px' }}>
//                                     {otpCode}
//                                 </span>
//                             </div>
//                             <p>If you did not request this, please ignore this email.</p>
//                             <p>Best Regards,<br />Portfolio Project Team</p>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td align="center" style={{ padding: '10px', fontSize: '12px', color: '#777777' }}>
//                             © 2024 Portfolio Project. All rights reserved.
//                         </td>
//                     </tr>
//                 </table>
//             </td>
//         </tr>
//     </table>
// );