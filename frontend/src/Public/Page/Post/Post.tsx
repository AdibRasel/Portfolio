import React from 'react'
import Header from '../../../Common/Header/Header'
import TopBar from '../../../Common/Header/TopBar'
import PublicNavBar from 'Common/NavBar/PublicNavBar'
import BackToTopButton from '../../../Common/BackToTopButton/BackToTopButton'
import Footer from '../../../Common/Footer/Footer'
import ReadPost from './ReadPost'

const Post = () => {
  return (<>


    <TopBar />

    <Header />

    <PublicNavBar />


    {/* <NavBarTop /> */}

    <div className="container">

      <ReadPost />

    </div>

    {/* <div className="container">
      <hr />
      <div className="row">
        <div className="col-md-8">
        </div>
        <div className="col-md-4">
          <Topic />
          <span className='m-2'></span>
          <Calendar />
        </div>

      </div>
    </div> */}



    <BackToTopButton />

    <Footer />

  </>)
}

export default Post