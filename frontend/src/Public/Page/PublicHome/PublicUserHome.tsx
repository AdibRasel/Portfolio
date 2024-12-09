import React, { useEffect, useState } from 'react'
import Social from 'Public/Components/Social/Social'

import { NavLink } from 'react-router-dom'


import { RecentTenCategory } from 'ApiService/PublicAPIService/PublicAPIService'
import Calendar from 'react-calendar'
import BackToTopButton from 'Common/BackToTopButton/BackToTopButton'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Logo from "Assets/Image/Logo.png"
import LogoInfo from "Assets/Image/LogoInfo.png"
import SliderOne from "Assets/Image/SliderOne.jpg"
import SliderTwo from "Assets/Image/SliderTwo.jpg"
import SliderThree from "Assets/Image/SliderThree.jpg"


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import { SuperAdminCretedHomeAllInfo } from 'ApiService/UserHomeApiService/UserHomeApiService'
import PublicUserSocialLink from './PublicUserSocialLink'
import PublicUserHomeMenu from './PublicUserHomeComponents/PublicUserHomeMenu'
import PublicRecentTenCategoryComponents from './PublicUserHomeComponents/PublicRecentTenCategoryComponents'
import PublicRecentTenPostComponents from './PublicUserHomeComponents/PublicRecentTenPostComponents'
// import PublicPostPaginationComponents from './PublicUserHomeComponents/PublicPostPaginationComponents'
import PublicCategoryPaginationComponents from './PublicUserHomeComponents/PublicCategoryPaginationComponents'
import PublicUserSlider from './PublicUserHomeComponents/PublicUserSlider'
import PublicPostPaginationComponents from './PublicUserHomeComponents/PublicPostPaginationComponents'



const PublicUserHome = () => {

  const [LoadingRecentCategory, SetLoadingRecentCategory] = useState<boolean>(false);


  const [Category, SetCategory] = useState<any[]>([]);






  // useEffect start
  useEffect(() => {

    const fetchData = async () => {
      try {

        SetLoadingRecentCategory(true)


        const SuperAdminCretedHomeAllInfos = await SuperAdminCretedHomeAllInfo()

        // const [SuperAdminCretedHomeAllInfos] = await Promise.all([
        //   SuperAdminCretedHomeAllInfo()
        // ]);


        const RecentTenCategorys = await RecentTenCategory();
        SetCategory(RecentTenCategorys.data?.data?.Data);
        console.log(SetCategory);
        SetLoadingRecentCategory(false)




        if (SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]) {

          localStorage.setItem('Logo', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.Logo);
          localStorage.setItem('LogoInfoImage', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.LogoInfoImage);
          localStorage.setItem('SliderOne', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.SliderOne);
          localStorage.setItem('SliderTwo', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.SliderTwo);
          localStorage.setItem('SliderThree', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.SliderThree);
          localStorage.setItem('HomePageInfoID', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?._id);
          localStorage.setItem('AuthorName', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.AuthorName);
          localStorage.setItem('Title', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.Title);
          localStorage.setItem('FacebookURL', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.FacebookURL);
          localStorage.setItem('GithubURL', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.GithubURL);
          localStorage.setItem('LinkdinURL', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.LinkdinURL);
          localStorage.setItem('GmailAddressOne', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.GmailAddressOne);
          localStorage.setItem('GmailAddressTwo', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.GmailAddressTwo);
          localStorage.setItem('PhoneNumberOne', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.PhoneNumberOne);
          localStorage.setItem('PhoneNumberTwo', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.PhoneNumberTwo);
          localStorage.setItem('FooterText', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.FooterText);
          localStorage.setItem('HomePageAllInfosCreateDate', SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data[0]?.CreateDate);




        }


      } catch (error) {
        console.error('Error fetching data:', error);
      }

    };






    fetchData();
  }, []);
  // useEffect end





  const LogoUrl = localStorage.getItem('Logo');
  const LogoInfoUrl = localStorage.getItem('LogoInfoImage');
  const SliderOneUrl = localStorage.getItem('SliderOne');
  const SliderTwoUrl = localStorage.getItem('SliderTwo');
  const SliderThreeUrl = localStorage.getItem('SliderThree');
  const FooterText = localStorage.getItem('FooterText');



  


  function formatDate() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentDate = new Date();

    const monthName = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    return `${monthName} ${day}, ${year}`;
  }
  const formattedDate = formatDate();




  return (<>

    {/* OK  */}
    {/* TopBar start  */}
    <div className="TopBarBG p-1">


      <Container>
        <Row>

          <Col sm={5} className='text-center text-sm-start '>


            <div className="text-white justify-content-center">

              <span className='text-light me-4'>{formattedDate}</span>
              <PublicUserSocialLink />
            </div>

          </Col>


          <Col sm={7} className='text-center text-sm-end text-white'>




            <NavLink className="TopBarNavLink" to="/UserHome">
              Home
            </NavLink>

            <NavLink className="TopBarNavLink" to="/ReadCategory">
              Category
            </NavLink>

            <NavLink className="TopBarNavLink" to="/ReadPost">
              Post
            </NavLink>


            <NavLink className="TopBarNavLink" to="/ReadBloog">
              Bloog
            </NavLink>

            <NavLink className="TopBarNavLink" to="/about">
              About
            </NavLink>

            <NavLink className="TopBarNavLink" to="/contact">
              Contact
            </NavLink>

            <NavLink className="TopBarNavLink" to="/Login">
              Login
            </NavLink>

            <NavLink className="TopBarNavLink" to="/Registration">
            Registration
            </NavLink>


          </Col>
        </Row>
      </Container>

    </div>
    {/* TopBar End  */}






    {/* ok */}
    {/* Logo and Logo Title start  */}
    <Container>
      <Row className='Header'>
        <Col sm={4} className='text-center text-sm-start '>
          <NavLink className="TopBarNavLink" to="/">
            {/* <img src={Logo} className='img-fluid rounded HeaderLogo' alt="" /> */}
            {LogoUrl ? (
              <img src={LogoUrl} className='img-fluid rounded HeaderLogo' alt="Logo" />
            ) : (
              <img src={Logo} className='img-fluid rounded HeaderLogo' alt="Placeholder Logo" />
            )}
          </NavLink>

        </Col>


        <Col sm={8} className='text-center text-sm-end text-white'>
          <NavLink className="TopBarNavLink" to="/">
            {/* <img src={HeaderImage} className='img-fluid rounded HeaderImage' alt="" /> */}
            {LogoInfoUrl ? (
              <img src={LogoInfoUrl} className='img-fluid rounded HeaderImage' alt="Logo" />
            ) : (
              <img src={LogoInfo} className='img-fluid rounded HeaderImage' alt="Placeholder Logo" />
            )}
          </NavLink>

        </Col>
      </Row>
    </Container>
    {/* Logo and Logo Title end  */}


    {/* ok */}
    {/* My Website Menu Link Start  */}
    <Container className='d-md-block d-none'>



      <div className="">
        <a href="https://adibrasel.github.io/Javascript/" target="_blank" rel="noreferrer"><span className="mt-md-0 mt-3 NavBarTopMenu"> Javascript </span></a>
        <a href="https://adibrasel.github.io/MongoDB/" target="_blank" rel="noreferrer"><span className="mt-md-0 mt-3 NavBarTopMenu"> MongoDB </span></a>
        <a href="https://adibrasel.github.io/Express_js/" target="_blank" rel="noreferrer"><span className="mt-md-0 mt-3 NavBarTopMenu"> Express JS </span></a>
        <a href="https://adibrasel.github.io/React_JS/index.html" target="_blank" rel="noreferrer"><span className="mt-md-0 mt-3 NavBarTopMenu"> React JS </span></a>
        <a href="https://adibrasel.github.io/Node_JS/" target="_blank" rel="noreferrer"><span className="mt-md-0 mt-3 NavBarTopMenu"> Node JS </span></a>
        <a href="https://adibrasel.github.io/API/" target="_blank" rel="noreferrer"><span className="mt-md-0 mt-3 NavBarTopMenu"> Rest API </span></a>
      </div>


    </Container>
    {/* My Website Menu Link End  */}







    {/* Main Contant Start  */}
    <div className="container mt-3">



      <div className="row">


        {/* Right Side All Content Start  */}
        <div className="col-md-8">


          {/* ok */}
          {/* Home Intro Carousel Start  */}
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >



            {SliderOneUrl ? (
              <SwiperSlide>
                <img className='img-fluid rounded' src={SliderOneUrl} alt="" />
              </SwiperSlide>
            ) : (
              <SwiperSlide>
                <img className='img-fluid rounded' src={SliderOne} alt="" />
              </SwiperSlide>
            )}

            {SliderTwoUrl ? (
              <SwiperSlide>
                <img className='img-fluid rounded' src={SliderTwoUrl} alt="" />
              </SwiperSlide>
            ) : (
              <SwiperSlide>
                <img className='img-fluid rounded' src={SliderTwo} alt="" />
              </SwiperSlide>
            )}


            {SliderThreeUrl ? (
              <SwiperSlide>
                <img className='img-fluid rounded' src={SliderThreeUrl} alt="" />
              </SwiperSlide>
            ) : (
              <SwiperSlide>
                <img className='img-fluid rounded' src={SliderThree} alt="" />
              </SwiperSlide>
            )}

          </Swiper>
          {/* Home Intro Carousel End  */}


          <div className='mt-2'></div>



          {/* Post Overview Post Details info start */}
          <PublicPostPaginationComponents PostPaginationDataLimit={5} />
          {/* Post Overview Post Details info end */}

          <div className='mt-4'></div>

          {/* Category Overview Category Details info start */}
          <PublicCategoryPaginationComponents CategoryPaginationDataLimit={5} />
          {/* Category Overview Category Details info end */}



        </div>
        {/* Right Side All Content End  */}







        {/* Left Side All Content Start  */}
        <div className="col-md-4">

          {/* ok */}
          {/* CATEGORY And My Website Menu Start  */}
          <h2 className='mt-md-0 mt-3 text-center CommonColor' style={{ backgroundColor: "#82699e", padding: "5px", borderRadius: "10px 10px 1px 0px" }}>CATEGORY</h2>
          <div className=" text-white SideMenu" style={{ height: "400px", overflow: "scroll", padding: "10px", border: "1px solid #81689D", borderRadius: "10px" }}>
            <NavLink className="text-white" target="_blank" to="https://adibrasel.github.io/Javascript/" style={{ textDecoration: "none", }}>
              <div className="text-white" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                Javascript
              </div>
            </NavLink>
            <NavLink className="text-white" target="_blank" to="https://adibrasel.github.io/MongoDB/" style={{ textDecoration: "none", }}>
              <div className="text-white" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                MongoDB
              </div>
            </NavLink>
            <NavLink className="text-white" target="_blank" to="https://adibrasel.github.io/Express_js/" style={{ textDecoration: "none", }}>
              <div className="text-white" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                Express JS
              </div>
            </NavLink>
            <NavLink className="text-white" target="_blank" to="https://adibrasel.github.io/React_JS/" style={{ textDecoration: "none", }}>
              <div className="text-white" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                React JS
              </div>
            </NavLink>
            <NavLink className="text-white" target="_blank" to="https://adibrasel.github.io/Node_JS/" style={{ textDecoration: "none", }}>
              <div className="text-white" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                Node JS
              </div>
            </NavLink>
            <NavLink className="text-white" target="_blank" to="https://adibrasel.github.io/API/" style={{ textDecoration: "none", }}>
              <div className="text-white" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                Rest API
              </div>
            </NavLink>


            {LoadingRecentCategory === true && (
              <div className="spinner-border text-black text-center m-2" style={{ textAlign: "center", margin: "auto" }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}

            {Category.map((categoryItem, index) => (
              <NavLink key={index} className="" to={`/ReadBloog/BloogID/${categoryItem._id}`} style={{ textDecoration: "none" }}>
                <div className="text-white" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                  {categoryItem.CategoryTitle}
                </div>
              </NavLink>
            ))}
          </div>
          {/* CATEGORY And My Website Menu Start  */}





          {/* Recent 10 Category Start  */}
          <PublicRecentTenCategoryComponents />
          {/* Recent 10 Category End  */}




          <Social />




          {/* Recent 10 Post Start */}
          <PublicRecentTenPostComponents />
          {/* Recent 10 Post End */}




          <Calendar />



          <div className='mt-2'></div>



          <PublicUserSlider />




        </div>
        {/* Left Side All Content Start  */}





      </div>


    </div>
    {/* Main Contant End  */}








    {/* Navbar Menu start  */}
    <PublicUserHomeMenu />
    {/* Navbar Menu End  */}




    <BackToTopButton />

    {/* Footer Start  */}
    <footer style={footerStyle}>
      {FooterText ? (
        <p>{FooterText}</p>
      ) : (
        <p>&copy; 2024 Rasel Hossain Adib. All rights reserved.</p>
      )}
    </footer>
    {/* Footer end */}


  </>)
}


const footerStyle: React.CSSProperties = {
  backgroundColor: '#1F2544',
  padding: '10px',
  textAlign: 'center',
  color: "white",
  marginTop: "10px"
};
export default PublicUserHome