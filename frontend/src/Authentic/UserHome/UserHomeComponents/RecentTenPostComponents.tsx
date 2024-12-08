import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md"
import { FaBookReader } from "react-icons/fa";
import { RecentTenPost } from 'ApiService/PublicAPIService/PublicAPIService'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const RecentTenPostComponents = () => {

    const navigate = useNavigate();
    const [LoadingRecentPost, SetLoadingRecentPost] = useState<boolean>(false);


    const [Post, SetPost] = useState<any[]>([]);








    // useEffect start
    useEffect(() => {

        const fetchData = async () => {
            try {

                SetLoadingRecentPost(true)

                const RecentTenPosts = await RecentTenPost();
                SetPost(RecentTenPosts.data?.data?.Data);
                SetLoadingRecentPost(false)

            } catch (error) {
                console.error('Error fetching data:', error);
            }

        };




        fetchData();
    }, []);
    // useEffect end










    return <>



        {/* Recent 10 Post Start */}
        <div className="card mt-3 mb-3">

            <div className="card-header">
                <h4 className="card-title CommonColor TitleColor bold text-uppercase font-weight-bold mt-3" style={{ fontWeight: "bold" }}>Recent 10 Post </h4>
            </div>


            {LoadingRecentPost === true && (
                <div className="spinner-border text-black text-center m-2" style={{ textAlign: "center", margin: "auto" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}


            <div className="card-body text-dark">



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


                    {Post.map((PostItem, index) => (
                        <div key={index} className="card p-2 mb-4" style={{ width: "100%" }}>

                            <SwiperSlide>


                                <h5 className="card-title" style={{ color: "black" }}>{PostItem.PostTitle}</h5>


                                <img src={PostItem.PostThumbnail} style={{ width: "100%", height: "250px" }} className="card-img-top rounded" alt="..." />


                                <div className="d-flex justify-content-between">
                                    <div className="text-muted">
                                        <FaEdit /> <span>{PostItem.UserName}  </span>
                                    </div>
                                    <div className="text-muted">
                                        <MdOutlineDateRange />{''}
                                        <span>
                                            {new Date(PostItem.CreateDate).toLocaleDateString('en-GB', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    </div>
                                </div>

                                <NavLink to={"/ReadBloog/BloogID/" + PostItem._id} style={{ cursor: "pointer" }}>
                                    <Button size="sm" className='btn btn-dark mt-1' style={{ width: "100%", backgroundColor: "#474F7A" }} >See More <FaBookReader /></Button>
                                </NavLink>



                            </SwiperSlide>




                        </div>
                    ))}
                </Swiper>



            </div>
        </div>
        {/* Recent 10 Post End */}





    </>
}
export default RecentTenPostComponents;