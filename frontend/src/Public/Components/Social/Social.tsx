import React, { useEffect, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { ImFacebook2, ImLinkedin, ImGithub } from 'react-icons/im';
import { SiGmail } from "react-icons/si";
import { BiSolidContact } from "react-icons/bi";

const Social = () => {
  const [authorName, setAuthorName] = useState<string | null>(null);
  const [facebookURL, setFacebookURL] = useState<string | null>(null);
  const [githubURL, setGithubURL] = useState<string | null>(null);
  const [linkedinURL, setLinkedinURL] = useState<string | null>(null);
  const [gmailAddressOne, setGmailAddressOne] = useState<string | null>(null);
  const [gmailAddressTwo, setGmailAddressTwo] = useState<string | null>(null);
  const [phoneNumberOne, setPhoneNumberOne] = useState<string | null>(null);
  const [phoneNumberTwo, setPhoneNumberTwo] = useState<string | null>(null);

  useEffect(() => {
    setAuthorName(localStorage.getItem('AuthorName'));

    // Check if URL starts with "http" or "https", otherwise prepend "https://"
    const formatURL = (url: string | null) => {
      return url && !url.startsWith('http') ? `https://${url}` : url;
    };

    setFacebookURL(formatURL(localStorage.getItem('FacebookURL')));
    setGithubURL(formatURL(localStorage.getItem('GithubURL')));
    setLinkedinURL(formatURL(localStorage.getItem('LinkdinURL')));
    setGmailAddressOne(localStorage.getItem('GmailAddressOne'));
    setGmailAddressTwo(localStorage.getItem('GmailAddressTwo'));
    setPhoneNumberOne(localStorage.getItem('PhoneNumberOne'));
    setPhoneNumberTwo(localStorage.getItem('PhoneNumberTwo'));
  }, []);

  return (
    <>

      <div className="card">


        <div className="card-header text-center">
          <h4 className="card-title CommonColor TitleColor">
            <BiSolidContact style={{ width: "40px", height: "40px" }} /> Contact Me
          </h4>
        </div>



        <div className="card-body">



          {/* Facebook */}
          {facebookURL && (
            <div className="mb-2">
              <a href={facebookURL} target="_blank" rel="noopener noreferrer">
                <div className="d-flex justify-content-between border CommonColor SocialItem rounded" style={{ alignItems: 'center' }}>
                  <div className="icon">
                    <ImFacebook2 style={{ width: "40px", height: "40px" }} />
                  </div>
                  <div className="p-2">
                    {authorName}
                  </div>
                </div>
              </a>
            </div>
          )}

          {/* Github */}
          {githubURL && (
            <div className="mb-2">
              <a href={githubURL} target="_blank" rel="noopener noreferrer">
                <div className="d-flex justify-content-between border CommonColor SocialItem rounded" style={{ alignItems: 'center' }}>
                  <div className="icon">
                    <ImGithub style={{ width: "40px", height: "40px" }} />
                  </div>
                  <div className="p-2">
                    {authorName}
                  </div>
                </div>
              </a>
            </div>
          )}

          {/* LinkedIn */}
          {linkedinURL && (
            <div className="mb-2">
              <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                <div className="d-flex justify-content-between border CommonColor SocialItem rounded" style={{ alignItems: 'center' }}>
                  <div className="icon">
                    <ImLinkedin style={{ width: "40px", height: "40px" }} />
                  </div>
                  <div className="p-2">
                    {authorName}
                  </div>
                </div>
              </a>
            </div>
          )}

          {/* Gmail Address One */}
          {gmailAddressOne && (
            <div className="mb-2">
              <a href={`mailto:${gmailAddressOne}`} target="_blank" rel="noopener noreferrer">
                <div className="d-flex justify-content-between border CommonColor SocialItem rounded" style={{ alignItems: 'center' }}>
                  <div className="icon">
                    <SiGmail style={{ width: "40px", height: "40px" }} />
                  </div>
                  <div className="p-2">
                    {gmailAddressOne}
                  </div>
                </div>
              </a>
            </div>
          )}

          {/* Gmail Address Two */}
          {gmailAddressTwo && (
            <div className="mb-2">
              <a href={`mailto:${gmailAddressTwo}`} target="_blank" rel="noopener noreferrer">
                <div className="d-flex justify-content-between border CommonColor SocialItem rounded" style={{ alignItems: 'center' }}>
                  <div className="icon">
                    <SiGmail style={{ width: "40px", height: "40px" }} />
                  </div>
                  <div className="p-2">
                    {gmailAddressTwo}
                  </div>
                </div>
              </a>
            </div>
          )}

          {/* Phone Number One */}
          {phoneNumberOne && (
            <div className="mb-2">
              <a href={`tel:${phoneNumberOne}`} target="_blank" rel="noopener noreferrer">
                <div className="d-flex justify-content-between border CommonColor SocialItem rounded" style={{ alignItems: 'center' }}>
                  <div className="icon">
                    <FaPhoneAlt style={{ width: "40px", height: "40px" }} />
                  </div>
                  <div className="p-2">
                    {phoneNumberOne}
                  </div>
                </div>
              </a>
            </div>
          )}

          {/* Phone Number Two */}
          {phoneNumberTwo && (
            <div className="mb-2">
              <a href={`tel:${phoneNumberTwo}`} target="_blank" rel="noopener noreferrer">
                <div className="d-flex justify-content-between border CommonColor SocialItem rounded" style={{ alignItems: 'center' }}>
                  <div className="icon">
                    <FaPhoneAlt style={{ width: "40px", height: "40px" }} />
                  </div>
                  <div className="p-2">
                    {phoneNumberTwo}
                  </div>
                </div>
              </a>
            </div>
          )}





        </div>
      </div>


    </>
  );
};

export default Social;
