import React from 'react';
import { FaGithubSquare, FaLinkedin, FaFacebookSquare, FaMailBulk, FaPhoneSquare } from 'react-icons/fa';

// Functional component for each link
const SocialLink: React.FC<{ url: string; icon: JSX.Element; isEmail?: boolean; isPhone?: boolean }> = ({ url, icon, isEmail, isPhone }) => {
  const href = isEmail ? `mailto:${url}` : isPhone ? `tel:${url}` : url;

  return (
    <a
      style={{ textDecoration: 'none', color: 'white', paddingRight: '5px' }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className='CommonHover'>
        {icon}
      </span>
    </a>
  );
};

const PublicUserSocialLink: React.FC = () => {
  // Retrieve from localStorage or use default values
  const githubURL = localStorage.getItem('GithubURL') || 'https://github.com/AdibRasel';
  const linkedinURL = localStorage.getItem('LinkdinURL') || 'https://www.linkedin.com/in/raselhossainadib/';
  const facebookURL = localStorage.getItem('FacebookURL') || 'https://www.facebook.com/RaselHossainAdib';
  const emailOne = localStorage.getItem('GmailAddressOne') || 'adibrasel.2022@gmail.com';
  const emailTwo = localStorage.getItem('GmailAddressTwo') || 'adibrasel.com@gmail.com';
  const phoneOne = localStorage.getItem('PhoneNumberOne') || '+8801934544352';
  const phoneTwo = localStorage.getItem('PhoneNumberTwo') || '+8801626757897';

  return (
    <>
      <SocialLink url={githubURL} icon={<FaGithubSquare />} />
      <SocialLink url={linkedinURL} icon={<FaLinkedin />} />
      <SocialLink url={facebookURL} icon={<FaFacebookSquare />} />
      <SocialLink url={emailOne} icon={<FaMailBulk />} isEmail />
      <SocialLink url={emailTwo} icon={<FaMailBulk />} isEmail />
      <SocialLink url={phoneOne} icon={<FaPhoneSquare />} isPhone />
      <SocialLink url={phoneTwo} icon={<FaPhoneSquare />} isPhone />
    </>
  );
};

export default PublicUserSocialLink;
