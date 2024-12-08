import AuthenticCategory from 'Authentic/AuthenticCategory/AuthenticCategory';
import AuthenticCategoryNew from 'Authentic/AuthenticCategory/AuthenticCategoryNew';
import AuthenticCategoryUpdate from 'Authentic/AuthenticCategory/AuthenticCategoryUpdate';
import AuthenticCategoryView from 'Authentic/AuthenticCategory/AuthenticCategoryView';
import AuthenticCreatePost from 'Authentic/AuthenticCategory/AuthenticPost/AuthenticCreatePost';
import AuthenticUpdatePost from 'Authentic/AuthenticCategory/AuthenticPost/AuthenticUpdatePost';
import AuthenticViewPost from 'Authentic/AuthenticCategory/AuthenticPost/AuthenticViewPost';
import ThousendEmailList from 'Authentic/AuthenticComment/ThousendEmailList';
import EmailSetting from 'Authentic/AuthenticSendEmail/EmailSetting';
import MultipleEmailSend from 'Authentic/AuthenticSendEmail/MultipleEmailSend';
import SingleEmailSend from 'Authentic/AuthenticSendEmail/SingleEmailSend';
import PublicReadAllPost from 'Public/Page/PublicHome/PublicReadAllPost/PublicReadAllPost';
import PublicReadBloog from 'Public/Page/PublicHome/PublicReadBloog/PublicReadBloog';
import PublicReadCategory from 'Public/Page/PublicHome/PublicReadCategory/PublicReadCategory';
import PublicUserHome from 'Public/Page/PublicHome/PublicUserHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BankHome from 'SuperAdmin/Bank/Page/Home/Home';
import AccountPrint from 'SuperAdmin/Bank/Page/PublicBank/AccountPrint/AccountPrint';
import ActiveBank from 'SuperAdmin/Bank/Page/PublicBank/ActiveBank/ActiveBank';
import ContactUs from 'SuperAdmin/Bank/Page/PublicBank/ContactUs/ContactUs';
import DPSCalculation from 'SuperAdmin/Bank/Page/PublicBank/DPSCalculation/DPSCalculation';
import FDRCalculation from 'SuperAdmin/Bank/Page/PublicBank/FDRCalculation/FDRCalculation';
import LoanCalculation from 'SuperAdmin/Bank/Page/PublicBank/LoanCalculation/LoanCalculation';
import PendingBank from 'SuperAdmin/Bank/Page/PublicBank/PendingBank/PendingBank';
import PublicBankHome from 'SuperAdmin/Bank/Page/PublicBank/PublicBankHome/PublicBankHome';
import RegistrationBank from 'SuperAdmin/Bank/Page/PublicBank/RegistrationBank/RegistrationBank';
import RegistrationSuccess from 'SuperAdmin/Bank/Page/PublicBank/RegistrationBank/RegistrationSuccess';
import RemittanceCalculation from 'SuperAdmin/Bank/Page/PublicBank/RemittanceCalculation/RemittanceCalculation';
import UpdateBank from 'SuperAdmin/Bank/Page/PublicBank/UpdateBank/UpdateBank';
import FooterSettings from 'SuperAdmin/SoftwareSettings/FooterSettings';
import ForgotPasswordPageSettings from 'SuperAdmin/SoftwareSettings/ForgotPasswordPageSettings';
import HomePageSettings from 'SuperAdmin/SoftwareSettings/HomePageSettings';
import HomePageUpdate from 'SuperAdmin/SoftwareSettings/HomePageUpdate';
import LoginPageSettings from 'SuperAdmin/SoftwareSettings/LoginPageSettings';
import NewPasswordPageSettings from 'SuperAdmin/SoftwareSettings/NewPasswordPageSettings';
import OTPPageSettings from 'SuperAdmin/SoftwareSettings/OTPPageSettings';
import RegistrationPageSettings from 'SuperAdmin/SoftwareSettings/RegistrationPageSettings';
import SoftwareSettings from 'SuperAdmin/SoftwareSettings/SoftwareSettings';
import SuperAdminHome from 'SuperAdmin/SuperAdminHome/SuperAdminHome';
import SuperAdminProfile from 'SuperAdmin/SuperAdminProfile/SuperAdminProfile';






const SuperAdminRouter = () => {



    return (
        <BrowserRouter>
            <Routes>

                <Route path="*" element={<SuperAdminHome />} />
                <Route path="/SuperAdminProfile" element={<SuperAdminProfile />} />
                <Route path="/SoftwareSettings" element={<SoftwareSettings />} />
                <Route path="/SoftwareSettings/HomePageSettings" element={<HomePageSettings />} />
                <Route path="/SoftwareSettings/HomePageUpdate/:id" element={<HomePageUpdate />} />
                <Route path="/SoftwareSettings/FooterSettings" element={<FooterSettings />} />
                <Route path="/SoftwareSettings/ForgotPasswordPageSettings" element={<ForgotPasswordPageSettings />} />
                <Route path="/SoftwareSettings/LoginPageSettings" element={<LoginPageSettings />} />
                <Route path="/SoftwareSettings/NewPasswordPageSettings" element={<NewPasswordPageSettings />} />
                <Route path="/SoftwareSettings/OTPPageSettings" element={<OTPPageSettings />} />
                <Route path="/SoftwareSettings/RegistrationPageSettings" element={<RegistrationPageSettings />} />


                <Route path="/AuthenticCategory" element={<AuthenticCategory />} />
                <Route path="/AuthenticCreatePost/:CategoryName/:CategoryID" element={<AuthenticCreatePost />} />
                <Route path="/AuthenticUpdatePost/:PostID/:CategoryTitle" element={<AuthenticUpdatePost />} />
                <Route path="/AuthenticViewPost/:PostID" element={<AuthenticViewPost />} />
                <Route path="/AuthenticCategoryNew" element={<AuthenticCategoryNew />} />
                <Route path="/AuthenticCategoryView/:id" element={<AuthenticCategoryView />} />
                <Route path="/AuthenticCategoryUpdate/:id" element={<AuthenticCategoryUpdate />} />



                <Route path="/UserHome" element={<PublicUserHome />} />
                <Route path="/ReadCategory" element={<PublicReadCategory />} />
                <Route path="/ReadPost" element={<PublicReadAllPost />} />
                <Route path="/ReadBloog/BloogID/:id" element={<PublicReadBloog />} />
                <Route path="/ReadBloog/" element={<PublicReadBloog />} />


                <Route path="/MultipleEmailSend" element={<MultipleEmailSend />} />
                <Route path="/EmailSetting" element={<EmailSetting />} />
                <Route path="/SingleEmailSend" element={<SingleEmailSend />} />
                <Route path="/ThousendEmailList" element={<ThousendEmailList />} />
                






                {/* Bank Project Start  */}
                <Route path="/BankHome" element={<BankHome />} />
                <Route path="/PendingBank" element={<PendingBank />} />
                <Route path="/ActiveBank" element={<ActiveBank />} />
                <Route path="/UpdateBank/:url" element={<UpdateBank />} />

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

export default SuperAdminRouter