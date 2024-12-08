import BackToTopButton from 'Common/BackToTopButton/BackToTopButton'
import Footer from 'Common/Footer/Footer'
import React from 'react'
import SuperAdminNav from 'SuperAdmin/SuperAdminNav/SuperAdminNav'
import SuperAdminTopBar from 'SuperAdmin/SuperAdminNav/SuperAdminTopBar'

const SuperAdminLayout = (props: any) => {
    return (<>



        {/* <TopBar /> */}
        <SuperAdminTopBar />

        <SuperAdminNav />


        <div className="container">
            {props.children}
        </div>


        <BackToTopButton />
        <Footer />

    </>)
}

export default SuperAdminLayout