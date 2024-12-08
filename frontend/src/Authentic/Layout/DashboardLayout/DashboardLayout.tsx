import TopBar from 'Authentic/Layout/Common/TopBar'
import UserHomeMenu from 'Authentic/UserHome/UserHomeComponents/UserHomeMenu'
import BackToTopButton from 'Common/BackToTopButton/BackToTopButton'
import Footer from 'Common/Footer/Footer'
import React from 'react'

const AuthenticLayout = (props: any) => {
    return (<>



        {/* <AuthenticTopBar /> */}
        <TopBar />

        {/* <NavBar /> */}
        {/* <NavBar /> */}
        <UserHomeMenu />

        <div className="container">
            {props.children}
        </div>


        <BackToTopButton />
        <Footer />

    </>)
}

export default AuthenticLayout