import PublicUserHomeLayout from "../PublicUserHomeLayout";

import React from 'react'



// import PublicPostPaginationComponents from "../PublicUserHomeComponents/PublicPostPaginationComponents";
import PublicRecentTenCategoryComponents from "../PublicUserHomeComponents/PublicRecentTenCategoryComponents";
import PublicRecentTenPostComponents from "../PublicUserHomeComponents/PublicRecentTenPostComponents";
import PublicUserSlider from "../PublicUserHomeComponents/PublicUserSlider";
import PublicUserSocial from "../PublicUserHomeComponents/PublicUserSocial";
import Calendar from 'react-calendar'
import PublicPostPaginationComponents from "../PublicUserHomeComponents/PublicPostPaginationComponents";


const PublicReadAllPost = () => {





    return <>


        <PublicUserHomeLayout>

            <div className="row">

                {/* right side start  */}
                <div className="col-md-8">
                    
                    {/* Post Overview Post Details info end */}
                    <PublicPostPaginationComponents PostPaginationDataLimit={20} />
                    {/* Post Overview Post Details info end */}
                    
                </div>
                {/* right side end */}







                {/* left side start  */}
                <div className="col-md-4">


                    {/* Slider Start  */}
                    <PublicUserSlider />
                    {/* Slider End  */}


                    {/* Recent 10 Category Start  */}
                    <PublicRecentTenCategoryComponents />
                    {/* Recent 10 Category End  */}



                    <PublicUserSocial />


                    {/* Recent 10 Post Start */}
                    <PublicRecentTenPostComponents />
                    {/* Recent 10 Post End */}


                    <Calendar />



                </div>
                {/* left side end  */}

            </div>



        </PublicUserHomeLayout>





    </>
}
export default PublicReadAllPost;