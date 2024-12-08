import UserHomeLayout from "../UserHomeLayout";

import React from 'react'




import RecentTenCategoryComponents from "../UserHomeComponents/RecentTenCategoryComponents";
import RecentTenPostComponents from "../UserHomeComponents/RecentTenPostComponents";
import CategoryPaginationComponents from "../UserHomeComponents/CategoryPaginationComponents";
import UserSlider from "../UserHomeComponents/UserSlider";
import Social from 'Public/Components/Social/Social'
import Calendar from 'react-calendar'


const ReadCategory = () => {


    return <>


        <UserHomeLayout>

            <div className="row">
                {/* right side start  */}
                <div className="col-md-8">



                    {/* Category Overview Category Details info start */}
                    <CategoryPaginationComponents CategoryPaginationDataLimit={20} />
                    {/* Category Overview Category Details info end */}


                </div>
                {/* right side end */}







                {/* left side start  */}
                <div className="col-md-4">


                    {/* Slider Start  */}
                    <UserSlider />
                    {/* Slider End  */}


                    {/* Recent 10 Post Start */}
                    <RecentTenPostComponents />
                    {/* Recent 10 Post End */}


                    <Social />


                    {/* Recent 10 Category Start  */}
                    <RecentTenCategoryComponents />
                    {/* Recent 10 Category End  */}


                    <Calendar />


                </div>
                {/* left side end  */}

            </div>



        </UserHomeLayout>





    </>
}
export default ReadCategory;