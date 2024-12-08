


import Category from '../Public/Page/Category/Category';
import Post from 'Public/Page/Post/Post';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


import ForgotPassword from 'LoginRegistration/ForgotPassword/ForgotPassword';
import NewPassword from 'LoginRegistration/ForgotPassword/NewPassword';
import OTP from 'LoginRegistration/ForgotPassword/OTP';
import Login from 'LoginRegistration/Login/Login';
import Registration from 'LoginRegistration/Registration/Registration';
import PublicReadCategory from 'Public/Page/PublicHome/PublicReadCategory/PublicReadCategory';
import PublicReadAllPost from 'Public/Page/PublicHome/PublicReadAllPost/PublicReadAllPost';
import PublicReadBloog from 'Public/Page/PublicHome/PublicReadBloog/PublicReadBloog';
import PublicUserHome from 'Public/Page/PublicHome/PublicUserHome';
import PublicBankHome from 'Public/Bank/Page/PublicBank/PublicBankHome/PublicBankHome';
import AccountPrint from 'Public/Bank/Page/PublicBank/AccountPrint/AccountPrint';
import RemittanceCalculation from 'Public/Bank/Page/PublicBank/RemittanceCalculation/RemittanceCalculation';
import DPSCalculation from 'Public/Bank/Page/PublicBank/DPSCalculation/DPSCalculation';
import FDRCalculation from 'Public/Bank/Page/PublicBank/FDRCalculation/FDRCalculation';
import LoanCalculation from 'Public/Bank/Page/PublicBank/LoanCalculation/LoanCalculation';
import ContactUs from 'Public/Bank/Page/PublicBank/ContactUs/ContactUs';
import RegistrationBank from 'Public/Bank/Page/PublicBank/RegistrationBank/RegistrationBank';
import RegistrationSuccess from 'Public/Bank/Page/PublicBank/RegistrationBank/RegistrationSuccess';





const UnAuthenticatedRouter = () => {
  return (
    <BrowserRouter>
      <Routes>



        {/* <Route path="*" element={<Home />} /> */}
        <Route path="/UserHome" element={<PublicUserHome />} />
        <Route path="/" element={<PublicUserHome />} />
        <Route path="*" element={<PublicUserHome />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Post" element={<Post />} />
        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}


        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/OTP" element={<OTP />} />
        <Route path="/NewPassword" element={<NewPassword />} />


        {/* User Home  */}
        {/* <Route path="/UserHomePageSettings" element={<UserHomePageSettings />} />
        <Route path="/UserHomePageUpdate/:id" element={<UserHomePageUpdate />} /> */}



        <Route path="/ReadCategory" element={<PublicReadCategory />} />
        <Route path="/ReadPost" element={<PublicReadAllPost />} />
        <Route path="/ReadBloog/BloogID/:id" element={<PublicReadBloog />} />
        <Route path="/ReadBloog/" element={<PublicReadBloog />} />



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

export default UnAuthenticatedRouter