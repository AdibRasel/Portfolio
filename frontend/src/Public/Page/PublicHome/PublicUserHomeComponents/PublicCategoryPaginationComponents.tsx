import React, { useEffect, useState, useRef } from 'react';
import { NavLink,  } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import axios from 'axios';

interface CategoryPaginationProps {
    CategoryPaginationDataLimit: number;
}

const PublicCategoryPaginationComponents: React.FC<CategoryPaginationProps> = ({ CategoryPaginationDataLimit }) => {
    const [LoadingSearchBtn, SetLoadingSearchBtn] = useState<boolean>(false);
    const [LoadingCategoryOverview, SetLoadingCategoryOverview] = useState<boolean>(false);
    const [LoadingPagination, SetLoadingPagination] = useState<boolean>(false);
    const [CategoryPaginationData, SetCategoryPaginationData] = useState<any[]>([]);
    const [CategoryPaginationDataCount, SetCategoryPaginationDataCount] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(CategoryPaginationDataLimit);
    const inputRef = useRef<HTMLInputElement>(null);
    const [searchKeyword, setSearchKeyword] = useState("0");

    // Fetch data when component mounts and when pagination parameters change
    useEffect(() => {
        const fetchData = async () => {
            SetLoadingCategoryOverview(true);
            try {
                const response = await CategoryPagination(currentPage, perPage, searchKeyword);
                SetCategoryPaginationDataCount(response.data?.data[0]?.Total[0]?.count || 0);
                SetCategoryPaginationData(response.data?.data[0]?.Rows || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                SetLoadingCategoryOverview(false);
            }
        };

        fetchData();
    }, []);

    const CategoryPagination = async (pageNo: number, perPage: number, searchKeyword: string) => {
        return axios.get(`https://portfolio-pah5.onrender.com/api/v1/CategoryPagination/${pageNo}/${perPage}/${searchKeyword}`);
    };

    const SearchBtn = async () => {
        SetLoadingSearchBtn(true);
        const query = inputRef.current?.value || "0";
        setSearchKeyword(query);
        try {
            const response = await CategoryPagination(1, perPage, query);
            const totalDataCount = response.data?.data?.[0]?.Total?.[0]?.count ?? 0;
            const rowsData = response.data?.data?.[0]?.Rows ?? [];
            SetCategoryPaginationDataCount(totalDataCount);
            SetCategoryPaginationData(rowsData);
            setCurrentPage(1);
        } catch (error) {
            console.error("Error searching:", error);
        } finally {
            SetLoadingSearchBtn(false);
        }
    };

    const PaginationBtn = async (pageNumber: number) => {
        SetLoadingPagination(true);
        try {
            const response = await CategoryPagination(pageNumber, perPage, searchKeyword);
            const totalDataCount = response.data?.data?.[0]?.Total?.[0]?.count ?? 0;
            const rowsData = response.data?.data?.[0]?.Rows ?? [];
            SetCategoryPaginationDataCount(totalDataCount);
            SetCategoryPaginationData(rowsData);
            setCurrentPage(pageNumber);
        } catch (error) {
            console.error("Error in pagination:", error);
        } finally {
            SetLoadingPagination(false);
        }
    };

    const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    return (
        <div className="CategoryDetails">
            <div className="card border border-secondary">
                <div className="card-header">
                    <nav className="navbar navbar-light bg-light justify-content-between">
                        <h4 className="card-title d-inline form-inline CommonColor TitleColor bold text-uppercase font-weight-bold">
                            Category Overview
                        </h4>
                        <form className="form-inline d-flex" style={{ width: "60%" }}>
                            <input type="search" ref={inputRef} className="form-control d-inline mr-sm-2" placeholder="Search. not enter, click Search button" />
                            <button type='button' onClick={SearchBtn} className="btn d-inline btn-outline-dark my-2 my-sm-0 ml-2">
                                Search
                            </button>
                        </form>
                    </nav>
                </div>

                <div className="container">
                    {LoadingSearchBtn && <div className="spinner-border text-black text-center m-2" role="status"><span className="visually-hidden">Loading...</span></div>}
                    {LoadingCategoryOverview && <div className="spinner-border text-black text-center m-2" role="status"><span className="visually-hidden">Loading...</span></div>}
                    {LoadingPagination && <div className="spinner-border text-black text-center m-2" role="status"><span className="visually-hidden">Loading...</span></div>}
                </div>

                <div className="card-body">
                    {CategoryPaginationData.map((CategoryItem, index) => (
                        <div key={index} className="row border border-secondary rounded mb-4 mx-1 p-2">
                            <div className="col-md-5">
                                <NavLink to={`/ReadBloog/BloogID/${CategoryItem._id}`}>
                                    <img style={{ width: "100%" }} src={CategoryItem.CategoryThumbnail} className='img-fluid rounded' alt="" />
                                </NavLink>
                                <div className="d-flex justify-content-between">
                                    <div className="text-muted">
                                        <FaEdit /> <span>{CategoryItem.UserName}</span>
                                    </div>
                                    <div className="text-muted">
                                        <MdOutlineDateRange />
                                        <span>{new Date(CategoryItem.CreateDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <NavLink to={`/ReadBloog/BloogID/${CategoryItem._id}`} style={{ cursor: "pointer" }}>
                                    <h2 className='CommonColor fs-4'>{CategoryItem.CategoryTitle}</h2>
                                    <div className="text-muted">
                                        <div dangerouslySetInnerHTML={{ __html: CategoryItem.CategoryDetails.substring(0, 50) + ". see more..." }}></div>
                                    </div>
                                </NavLink>
                                <NavLink to={`/ReadBloog/BloogID/${CategoryItem._id}`} style={{ cursor: "pointer" }}>
                                    <Button size="sm" className='btn btn-dark mt-1' style={{ width: "100%", backgroundColor: "#474F7A" }}>Read More <FaBookReader /></Button>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>

                <nav className="card-footer" aria-label="...">
                    <div className="selector mb-2">
                        <span>Data Show </span>
                        <select onChange={handlePerPageChange} value={perPage}>
                            <option value="3"> 3 </option>
                            <option value="5"> 5 </option>
                            <option value="10"> 10 </option>
                            <option value="20"> 20 </option>
                            <option value="50"> 50 </option>
                            <option value="100"> 100 </option>
                        </select>
                    </div>

                    <ul className="pagination">
                        <li style={{ cursor: "pointer" }} className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <span className="page-link" onClick={() => PaginationBtn(currentPage - 1)}>Previous</span>
                        </li>
                        {Array.from({ length: Math.ceil(CategoryPaginationDataCount / perPage) }, (_, index) => (
                            <li style={{ cursor: "pointer" }} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                                <span className="page-link" onClick={() => PaginationBtn(index + 1)}>{index + 1}</span>
                            </li>
                        ))}
                        <li style={{ cursor: "pointer" }} className={`page-item ${currentPage === Math.ceil(CategoryPaginationDataCount / perPage) ? 'disabled' : ''}`}>
                            <span className="page-link" onClick={() => PaginationBtn(currentPage + 1)}>Next</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default PublicCategoryPaginationComponents;
