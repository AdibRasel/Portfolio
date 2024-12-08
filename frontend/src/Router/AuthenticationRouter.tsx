import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Dashboard from 'Authentic/Dashboard/Dashboard';
// import AuthenticUser from 'Authentic/AuthenticUser/AuthenticUser';
import AuthenticCategory from 'Authentic/AuthenticCategory/AuthenticCategory';
// import AuthenticPost from 'Authentic/AuthenticPost/AuthenticPost';
// import ThousendEmailList 'Authentic/AuthenticComment/ThousendEmailList';
// import AuthenticProfile from 'Authentic/AuthenticProfile/AuthenticProfile';
import AuthenticUserProfile from 'Authentic/AuthenticUser/AuthenticUserProfile';
import AuthenticCategoryNew from 'Authentic/AuthenticCategory/AuthenticCategoryNew';
import AuthenticCategoryView from 'Authentic/AuthenticCategory/AuthenticCategoryView';
import AuthenticCategoryUpdate from 'Authentic/AuthenticCategory/AuthenticCategoryUpdate';
import MultipleEmailSend from 'Authentic/AuthenticSendEmail/MultipleEmailSend';
import SingleEmailSend from 'Authentic/AuthenticSendEmail/SingleEmailSend';
import EmailSetting from 'Authentic/AuthenticSendEmail/EmailSetting';
import AuthenticCreatePost from 'Authentic/AuthenticCategory/AuthenticPost/AuthenticCreatePost';
import AuthenticUpdatePost from 'Authentic/AuthenticCategory/AuthenticPost/AuthenticUpdatePost';
import AuthenticViewPost from 'Authentic/AuthenticCategory/AuthenticPost/AuthenticViewPost';
import UserHome from 'Authentic/UserHome/UserHome';
import WebSiteSettings from 'Authentic/WebSiteSettings/WebSiteSettings';
import UserHomePageSettings from 'Authentic/UserHome/UserHomePageSettings';
import UserHomePageUpdate from 'Authentic/UserHome/UserHomePageUpdate';
import ReadCategory from 'Authentic/UserHome/ReadCategory/ReadCategory';
import ReadAllPost from 'Authentic/UserHome/ReadAllPost/ReadAllPost';
import ReadBloog from 'Authentic/UserHome/ReadBloog/ReadBloog';
import ThousendEmailList from 'Authentic/AuthenticComment/ThousendEmailList';

import PublicBankHome from 'Public/Bank/Page/PublicBank/PublicBankHome/PublicBankHome';
import AccountPrint from 'Public/Bank/Page/PublicBank/AccountPrint/AccountPrint';
import RemittanceCalculation from 'Public/Bank/Page/PublicBank/RemittanceCalculation/RemittanceCalculation';
import DPSCalculation from 'Public/Bank/Page/PublicBank/DPSCalculation/DPSCalculation';
import FDRCalculation from 'Public/Bank/Page/PublicBank/FDRCalculation/FDRCalculation';
import LoanCalculation from 'Public/Bank/Page/PublicBank/LoanCalculation/LoanCalculation';
import ContactUs from 'Public/Bank/Page/PublicBank/ContactUs/ContactUs';
import RegistrationBank from 'Public/Bank/Page/PublicBank/RegistrationBank/RegistrationBank';
import RegistrationSuccess from 'Public/Bank/Page/PublicBank/RegistrationBank/RegistrationSuccess';


const AuthenticationRouter = () => {



    return (
        <BrowserRouter>
            <Routes>

                <Route path="*" element={<UserHome />} />


                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/UserHome" element={<UserHome />} />
                <Route path="/Home" element={<UserHome />} />
                <Route path="/WebSiteSettings" element={<WebSiteSettings />} />
                {/* <Route path="/AuthenticUser" element={<AuthenticUser />} /> */}
                <Route path="/AuthenticCategory" element={<AuthenticCategory />} />
                {/* <Route path="/AuthenticPost" element={<AuthenticPost />} /> */}
                <Route path="/ThousendEmailList" element={<ThousendEmailList />} />
                {/* <Route path="/AuthenticProfile" element={<AuthenticProfile />} /> */}
                <Route path="/AuthenticUserProfile" element={<AuthenticUserProfile />} />
                <Route path="/AuthenticCategoryNew" element={<AuthenticCategoryNew />} />
                <Route path="/AuthenticCategoryView/:id" element={<AuthenticCategoryView />} />
                <Route path="/AuthenticCategoryUpdate/:id" element={<AuthenticCategoryUpdate />} />

                <Route path="/AuthenticCreatePost/:CategoryName/:CategoryID" element={<AuthenticCreatePost />} />
                <Route path="/AuthenticUpdatePost/:PostID/:CategoryTitle" element={<AuthenticUpdatePost />} />
                <Route path="/AuthenticViewPost/:PostID" element={<AuthenticViewPost />} />




                {/* User Home  */}
                <Route path="/UserHomePageSettings" element={<UserHomePageSettings />} />
                <Route path="/UserHomePageUpdate/:id" element={<UserHomePageUpdate />} />



                <Route path="/ReadCategory" element={<ReadCategory />} />
                <Route path="/ReadPost" element={<ReadAllPost />} />
                <Route path="/ReadBloog/BloogID/:id" element={<ReadBloog />} />
                <Route path="/ReadBloog/" element={<ReadBloog />} />










                <Route path="/EmailSetting" element={<EmailSetting />} />
                <Route path="/MultipleEmailSend" element={<MultipleEmailSend />} />
                <Route path="/SingleEmailSend" element={<SingleEmailSend />} />



                {/* Bank Project Start  */}
                {/* Public Page Start  */}
                <Route path="/MyBank/:BankURL" element={<PublicBankHome />} />
                <Route path="/AccountPrint/:BankURL" element={<AccountPrint />} />
                <Route path="/RemittanceCalculation/:BankURL" element={<RemittanceCalculation />} />
                <Route path="/DPSCalculation/:BankURL" element={<DPSCalculation />} />
                <Route path="/FDRCalculation/:BankURL" element={<FDRCalculation />} />
                <Route path="/LoanCalculation/:BankURL" element={<LoanCalculation />} />
                <Route path="/ContactUs/:BankURL" element={<ContactUs />} />
                <Route path="/RegistrationBank" element={<RegistrationBank />} />
                <Route path="/RegistrationSuccess" element={<RegistrationSuccess />} />
                {/* Public Page End */}
                {/* Bank Project Start  */}






            </Routes>
        </BrowserRouter>
    )
}

export default AuthenticationRouter