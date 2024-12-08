import UserHomeLayout from "../UserHomeLayout";


import React, { useEffect, useState } from 'react'
import Social from 'Public/Components/Social/Social'

import { NavLink, useParams } from 'react-router-dom'
import { VscCompassActive } from "react-icons/vsc";
import Calendar from 'react-calendar'

import { FaBookReader } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

import PostPaginationComponents from "../UserHomeComponents/PostPaginationComponents";
import CategoryPaginationComponents from "../UserHomeComponents/CategoryPaginationComponents";
import UserSlider from "../UserHomeComponents/UserSlider";
import RecentTenPostComponents from "../UserHomeComponents/RecentTenPostComponents";
import RecentTenCategoryComponents from "../UserHomeComponents/RecentTenCategoryComponents";
import { CategoryUnderAllPost, PostUnderCategoryDetails, ReadCategoryWithID, ReadPostWithID } from "ApiService/PublicAPIService/PublicAPIService";




const ReadBloog = () => {





    const navigate = useNavigate();
    const [Loading, SetLoading] = useState<boolean>(false);
    const [LoadingPostUnderCategoryDetails, SetLoadingPostUnderCategoryDetails] = useState<boolean>(false);
    const [LoadingCategoryUnderAllPosts, SetLoadingCategoryUnderAllPosts] = useState<boolean>(false);


    // Category All State start
    const [IsCategory, SetIsCategory] = useState<boolean>(false);

    const [CategoryTitle, SetCategoryTitle] = useState<any>("");
    const [CategoryDetails, SetCategoryDetails] = useState<any>("");
    const [CategoryThumbnail, SetCategoryThumbnail] = useState<any>("");
    const [CategoryStatus, SetCategoryStatus] = useState<any>("");

    const [CategoryUserName, SetCategoryUserName] = useState<any>("");
    const [CategoryCreateDate, SetCategoryCreateDate] = useState<any>("");


    const [CategoryUnderAllPostData, SetCategoryUnderAllPostData] = useState<any[]>([]);
    // Category All State end



    // Post All State start
    const [IsPost, SetIsPost] = useState<boolean>(false);

    const [PostTitle, SetPostTitle] = useState<any>("");
    const [PostDetails, SetPostDetails] = useState<any>("");
    const [PostThumbnail, SetPostThumbnail] = useState<any>("");
    const [PostStatus, SetPostStatus] = useState<any>("");

    const [PostCreatedUserName, SetPostCreatedUserName] = useState<any>("");
    const [PostCreateDate, SetCreateDate] = useState<any>("");

    const [PostUnderCategoryTitle, SetPostUnderCategoryTitle] = useState<any>("");
    const [PostUnderCategoryDetailsData, SetPostUnderCategoryDetailsData] = useState<any>("");
    const [PostUnderCategoryThumbnail, SetPostUnderCategoryThumbnail] = useState<any>("");
    const [PostUnderStatus, SetPostUnderStatus] = useState<any>("");

    const [PostUnderUserName, SetPostUnderUserName] = useState<any>("");
    const [PostUnderCreateDate, SetPostUnderCreateDate] = useState<any>("");
    // Post All State end


    const { id } = useParams<{ id: string }>();


    // প্রতি ক্লিকে এই ফাংশনটি কল হবে
    const PostClick = async () => {

        // যে কোন যায়গায় ক্লিক করলে আস্তে আস্তে উপরে নিয়ে আসবে। 
        // window.scrollTo({
        //     top: 0,
        //     behavior: 'smooth',
        // });
        try {
            if (!id) {
                console.error("ID is undefined.");
                return;
            }

            SetLoading(true);
            const PostData = await ReadPostWithID(id);
            const CategoryData = await ReadCategoryWithID(id);
            SetLoading(false);


            // Post Data logic
            if (PostData?.data?.data?.length > 0) {


                // post key is 12
                if (Array.isArray(PostData?.data?.data) && PostData?.data?.data.length > 0) {
                    const firstDataObject = PostData?.data?.data[0];
                    const keyCount = Object.keys(firstDataObject).length;
                    if (keyCount === 12) {
                        SetPostTitle(PostData?.data?.data[0].PostTitle);
                        SetPostDetails(PostData?.data?.data[0].PostDetails);
                        SetPostThumbnail(PostData?.data?.data[0].PostThumbnail);
                        SetPostStatus(PostData?.data?.data[0].Status);
                        SetCreateDate(PostData?.data?.data[0].CreateDate);
                        SetPostCreatedUserName(PostData?.data?.data[0].UserName);




                        const CategoryIDFind = PostData?.data?.data[0].CategoryID

                        SetLoadingPostUnderCategoryDetails(true);

                        const PostUnderCategoryDetailsData = await PostUnderCategoryDetails(CategoryIDFind);

                        SetPostUnderCategoryTitle(PostUnderCategoryDetailsData?.data?.data[0].CategoryTitle);
                        SetPostUnderCategoryDetailsData(PostUnderCategoryDetailsData?.data?.data[0].CategoryDetails);
                        SetPostUnderCategoryThumbnail(PostUnderCategoryDetailsData?.data?.data[0].CategoryThumbnail);
                        SetPostUnderStatus(PostUnderCategoryDetailsData?.data?.data[0].Status);
                        SetPostUnderUserName(PostUnderCategoryDetailsData?.data?.data[0].UserName);
                        SetPostUnderCreateDate(PostUnderCategoryDetailsData?.data?.data[0].CreateDate);


                        SetLoadingPostUnderCategoryDetails(false);



                        SetIsPost(true);
                        SetIsCategory(false);
                        // SetLoadingPostUnderCategoryDetails(false);

                    }
                } else {
                    console.log("Data is empty or not an array");
                }
            } else {
                console.error("Failed to fetch post data:", PostData.error || "Unknown error");
            }



            // Category Data logic
            if (CategoryData?.data?.data?.length > 0) {


                // Category key is 12
                if (Array.isArray(CategoryData?.data?.data) && CategoryData?.data?.data.length > 0) {
                    const firstDataObject = CategoryData?.data?.data[0];
                    const keyCount = Object.keys(firstDataObject).length;
                    if (keyCount === 10) {
                        SetCategoryTitle(CategoryData?.data?.data[0].CategoryTitle);
                        SetCategoryDetails(CategoryData?.data?.data[0].CategoryDetails);
                        SetCategoryThumbnail(CategoryData?.data?.data[0].CategoryThumbnail);
                        SetCategoryStatus(CategoryData?.data?.data[0].Status);
                        SetCategoryUserName(CategoryData?.data?.data[0].UserName);
                        SetCategoryCreateDate(CategoryData?.data?.data[0].CreateDate);
                        // const CategoryUnderAllPost = CategoryData?.data?.data[0].
                        SetIsCategory(true);
                        SetIsPost(false);

                        SetLoadingCategoryUnderAllPosts(true)
                        const CategoryUnderAllPostData = await CategoryUnderAllPost(id);
                        SetCategoryUnderAllPostData(CategoryUnderAllPostData?.data?.data ?? []);
                        console.log(CategoryUnderAllPostData)
                        SetLoadingCategoryUnderAllPosts(false)
                    }
                } else {
                    console.log("Data is empty or not an array");
                }
            } else {
                console.error("Failed to fetch Category data:", CategoryData.error || "Unknown error");
            }






        } catch (error) {
            console.error("Error in PostClick:", error);
        }
    };

    // useEffect to add the event listener
    useEffect(() => {
        const handleClick = () => {
            PostClick();
        };

        // Add event listener to document
        document.addEventListener("click", handleClick);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [id]); // Adding id as a dependency ensures PostClick updates with the new id










    return <>



        <UserHomeLayout>


            <div className="container">
                {Loading && <div className="spinner-border text-black text-center m-2 p-2" role="status"><span className="visually-hidden">Loading...</span></div>}
            </div>

            {/*Category Data Start  */}
            {IsCategory === true && (
                <>






                    <div className="card border border-secondary">
                        <div className="card-header">
                            <h4 className="card-title d-inline form-inline CommonColor TitleColor bold text-uppercase font-weight-bold">
                                {CategoryTitle}
                            </h4>
                            <div className="">
                                <span className="text-muted">
                                    <FaEdit /> <span>{CategoryUserName}</span>
                                </span>&nbsp;&nbsp;
                                <span className="text-muted">
                                    <MdOutlineDateRange />
                                    <span>{new Date(CategoryCreateDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                                </span>&nbsp;&nbsp;
                                <span className="text-muted">
                                    <VscCompassActive />
                                    <span> {CategoryStatus}</span>
                                </span>
                            </div>
                        </div>

                        <div className="container">
                            {Loading && <div className="spinner-border text-black text-center m-2" role="status"><span className="visually-hidden">Loading...</span></div>}
                        </div>

                        <div className="card-body">
                            <div className="row">

                                {/* right side start  */}
                                <div className="col-md-9">

                                    <div className="container">
                                        {LoadingCategoryUnderAllPosts && <div className="spinner-border text-black text-center m-2 p-2" role="status"><span className="visually-hidden">Loading...</span></div>}
                                    </div>


                                    <div className="card-body">
                                        {CategoryUnderAllPostData.map((PostItem, index) => (
                                            <div key={index} className="row border border-secondary rounded mb-4 mx-1 p-2">
                                                <div className="col-md-5">
                                                    <NavLink to={`/ReadBloog/BloogID/${PostItem._id}`}>
                                                        <img style={{ width: "100%" }} src={PostItem.PostThumbnail} className='img-fluid rounded' alt="" />
                                                    </NavLink>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="text-muted">
                                                            <FaEdit /> <span>{PostItem.UserName}</span>
                                                        </div>
                                                        <div className="text-muted">
                                                            <MdOutlineDateRange />
                                                            <span>{new Date(PostItem.CreateDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <NavLink to={`/ReadBloog/BloogID/${PostItem._id}`} style={{ cursor: "pointer" }}>
                                                        <h2 className='CommonColor fs-4'>{PostItem.PostTitle}</h2>
                                                        <div className="text-muted">
                                                            <div dangerouslySetInnerHTML={{ __html: PostItem.PostDetails.substring(0, 50) + ". see more..." }}></div>
                                                        </div>
                                                    </NavLink>
                                                    <NavLink to={`/ReadBloog/BloogID/${PostItem._id}`} style={{ cursor: "pointer" }}>
                                                        <Button size="sm" className='btn btn-dark mt-1' style={{ width: "100%", backgroundColor: "#474F7A" }}>Read More <FaBookReader /></Button>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        ))}
                                    </div>





                                </div>
                                {/* right side end  */}

                                {/* left side start  */}
                                <div className="col-md-3">
                                    <img style={{ width: "100%" }} src={CategoryThumbnail} className='img-fluid rounded' alt="Category Thumbnail" />

                                    <div style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: CategoryDetails }}></div>
                                </div>
                                {/* left side end  */}
                            </div>
                        </div>

                        <nav className="card-footer">

                        </nav>
                    </div>










                </>
            )}
            {/*Category Data End  */}




            {/* Post Data Start  */}
            {IsPost === true && (
                <>

                    <div className="card border border-secondary">
                        <div className="card-header">
                            <h4 className="card-title d-inline form-inline CommonColor TitleColor bold text-uppercase font-weight-bold">
                                {PostTitle}
                            </h4>
                            <div className="">
                                <span className="text-muted">
                                    <FaEdit /> <span>{PostCreatedUserName}</span>
                                </span>&nbsp;&nbsp;
                                <span className="text-muted">
                                    <MdOutlineDateRange />
                                    <span>{new Date(PostCreateDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                                </span>&nbsp;&nbsp;
                                <span className="text-muted">
                                    <VscCompassActive />
                                    <span> {PostStatus}</span>
                                </span>
                            </div>
                        </div>

                        <div className="card-body">


                            <div className="row">



                                {/* Right Side Data Start  */}
                                <div className="col-md-9">
                                    <div style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: PostDetails }}></div>
                                </div>
                                {/* Right Side Data Start  */}


                                {/* Left Side Data Start  */}
                                <div className="col-md-3">
                                    <img style={{ width: "100%" }} src={PostThumbnail} className='img-fluid rounded' alt="Post Thumbnail" />
                                    <hr />



                                    {/* =========== Post Under Category Details start  ================= */}
                                    <div className="container">
                                        {LoadingPostUnderCategoryDetails && <div className="spinner-border text-black text-center m-2 p-2" role="status"><span className="visually-hidden">Loading...</span></div>}
                                    </div>

                                    <h5 className="card-title d-inline form-inline CommonColor TitleColor bold text-uppercase font-weight-bold">
                                        {PostUnderCategoryTitle}
                                    </h5>

                                    <img style={{ width: "100%" }} src={PostUnderCategoryThumbnail} className='img-fluid rounded' alt="Category Thumbnail" />



                                    {/* <div className="d-flex justify-content-between"> */}
                                    <div className="text-muted">
                                        <FaEdit /> <span>{PostUnderUserName}</span>
                                    </div>
                                    <div className="text-muted">
                                        <MdOutlineDateRange />
                                        <span>{new Date(PostUnderCreateDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                                    </div>
                                    <div className="text-muted">
                                        <VscCompassActive />
                                        <span>{PostUnderStatus}</span>
                                    </div>
                                    {/* </div> */}

                                    <div style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: PostUnderCategoryDetailsData }}></div>



                                    {/* =========== Post Under Category Details end  ================= */}




                                </div>
                                {/* Left Side Data End  */}



                            </div>


                        </div>


                    </div>

                </>
            )}
            {/* Post Data End  */}



            <div className="row mt-4">


                {/* right side start  */}
                <div className="col-md-8">


                    {/* Post Overview Post Details info end */}
                    <PostPaginationComponents PostPaginationDataLimit={10} />
                    {/* Post Overview Post Details info end */}


                    <div className="mt-5"></div>


                    {/* Category Overview Category Details info start */}
                    <CategoryPaginationComponents CategoryPaginationDataLimit={10} />
                    {/* Category Overview Category Details info end */}



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





                    <Social />





                    {/* Recent 10 Post Start */}
                    <RecentTenPostComponents />
                    {/* Recent 10 Post End */}



                    <Calendar />



                    {/* Slider Start  */}
                    <UserSlider />
                    {/* Slider End  */}





                </div>
                {/* left side end  */}

            </div>



        </UserHomeLayout>



    </>
}
export default ReadBloog;