import PublicUserHomeLayout from "../PublicUserHomeLayout";

import React from 'react'




import PublicRecentTenCategoryComponents from "../PublicUserHomeComponents/PublicRecentTenCategoryComponents";
import PublicRecentTenPostComponents from "../PublicUserHomeComponents/PublicRecentTenPostComponents";
import PublicCategoryPaginationComponents from "../PublicUserHomeComponents/PublicCategoryPaginationComponents";
import PublicUserSlider from "../PublicUserHomeComponents/PublicUserSlider";
import Social from 'Public/Components/Social/Social'
import Calendar from 'react-calendar'


const PublicReadCategory = () => {


    return <>


        <PublicUserHomeLayout>

            <div className="row">
                {/* right side start  */}
                <div className="col-md-8">



                    {/* Category Overview Category Details info start */}
                    <PublicCategoryPaginationComponents CategoryPaginationDataLimit={20} />
                    {/* Category Overview Category Details info end */}


                </div>
                {/* right side end */}







                {/* left side start  */}
                <div className="col-md-4">


                    {/* Slider Start  */}
                    <PublicUserSlider />
                    {/* Slider End  */}


                    {/* Recent 10 Post Start */}
                    <PublicRecentTenPostComponents />
                    {/* Recent 10 Post End */}


                    <Social />


                    {/* Recent 10 Category Start  */}
                    <PublicRecentTenCategoryComponents />
                    {/* Recent 10 Category End  */}


                    <Calendar />


                </div>
                {/* left side end  */}

            </div>



        </PublicUserHomeLayout>





    </>
}
export default PublicReadCategory;