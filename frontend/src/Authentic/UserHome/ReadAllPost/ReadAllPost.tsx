import UserHomeLayout from "../UserHomeLayout";

import React from 'react'



import PostPaginationComponents from "../UserHomeComponents/PostPaginationComponents";
import RecentTenCategoryComponents from "../UserHomeComponents/RecentTenCategoryComponents";
import RecentTenPostComponents from "../UserHomeComponents/RecentTenPostComponents";
import UserSlider from "../UserHomeComponents/UserSlider";
import UserSocial from "../UserHomeComponents/UserSocial";
import Calendar from 'react-calendar'


const ReadAllPost = () => {





    return <>


        <UserHomeLayout>

            <div className="row">

                {/* right side start  */}
                <div className="col-md-8">
                    
                    {/* Post Overview Post Details info end */}
                    <PostPaginationComponents PostPaginationDataLimit={20} />
                    {/* Post Overview Post Details info end */}
                    
                </div>
                {/* right side end */}







                {/* left side start  */}
                <div className="col-md-4">


                    {/* Slider Start  */}
                    <UserSlider />
                    {/* Slider End  */}


                    {/* Recent 10 Category Start  */}
                    <RecentTenCategoryComponents />
                    {/* Recent 10 Category End  */}



                    <UserSocial />


                    {/* Recent 10 Post Start */}
                    <RecentTenPostComponents />
                    {/* Recent 10 Post End */}


                    <Calendar />



                </div>
                {/* left side end  */}

            </div>



        </UserHomeLayout>





    </>
}
export default ReadAllPost;