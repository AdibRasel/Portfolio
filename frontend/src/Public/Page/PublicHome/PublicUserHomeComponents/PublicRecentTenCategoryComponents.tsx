import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md"
import { FaBookReader } from "react-icons/fa";
import { RecentTenCategory } from 'ApiService/PublicAPIService/PublicAPIService'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const PublicRecentTenCategoryComponents = () => {

    const navigate = useNavigate();
    const [Loading, SetLoading] = useState<boolean>(false);
    const [LoadingRecentCategory, SetLoadingRecentCategory] = useState<boolean>(false);


    const [Category, SetCategory] = useState<any[]>([]);






    // useEffect start
    useEffect(() => {
        SetLoading(true)

        const fetchData = async () => {
            try {

                SetLoadingRecentCategory(true)

                const RecentTenCategorys = await RecentTenCategory();
                SetCategory(RecentTenCategorys.data?.data?.Data);
                SetLoadingRecentCategory(false)



            } catch (error) {
                console.error('Error fetching data:', error);
                SetLoading(true)
            }
            SetLoading(false)

        };







        fetchData();
    }, []);
    // useEffect end










    return <>




        {/* Recent 10 Category Start  */}
        <div className="card mt-3 mb-3">

            <div className="card-header">
                <h4 className="card-title CommonColor TitleColor bold text-uppercase font-weight-bold mt-3" style={{ fontWeight: "bold" }}>Recent 10 Category</h4>
            </div>


            {LoadingRecentCategory === true && (
                <div className="spinner-border text-black text-center m-2" style={{ textAlign: "center", margin: "auto" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}


            <div className="card-body">




                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}

                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                >



                    {Category.map((categoryItem, index) => (
                        <div key={index} className="" style={{ width: "100%" }}>

                            <SwiperSlide>
                                <div className="card" style={{ width: "100%" }}>
                                    <img src={categoryItem.CategoryThumbnail} style={{ width: "100%", maxHeight: "150px" }} className="card-img-top rounded" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{categoryItem.CategoryTitle}</h5>
                                        <div className="text-muted">
                                            <div style={{ color: "black" }} dangerouslySetInnerHTML={{ __html: categoryItem.CategoryDetails.substring(0, 100) }}></div>
                                        </div>
                                        <NavLink to={"/ReadBloog/BloogID/" + categoryItem._id} style={{ cursor: "pointer", width: "100%" }}>
                                            <Button size="sm" className='btn btn-dark mt-1' style={{ width: "100%", backgroundColor: "#474F7A" }} >See More <FaBookReader /></Button>
                                        </NavLink>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex justify-content-between">
                                            <div className="text-muted">
                                                <FaEdit /> <span>{categoryItem.UserName}  </span>
                                            </div>
                                            <div className="text-muted">
                                                <MdOutlineDateRange />{''}
                                                <span>
                                                    {new Date(categoryItem.CreateDate).toLocaleDateString('en-GB', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: 'numeric',
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                        </div>


                    ))}


                </Swiper>

                <div className="mt-2">
                    <div className="text-muted">
                        <NavLink to="/ReadCategory" style={{ cursor: "pointer", width: "100%" }}>
                            <span className="text-dark">See All Category <FaBookReader /></span>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
        {/* Recent 10 Category End  */}









    </>
}
export default PublicRecentTenCategoryComponents;