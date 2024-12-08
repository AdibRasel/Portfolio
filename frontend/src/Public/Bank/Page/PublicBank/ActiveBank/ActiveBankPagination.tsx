import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { CiRead } from "react-icons/ci";
import { MdEditNote } from "react-icons/md";

// TypeScript Interface for props
interface ActiveBankPaginationProps {
    ActiveBankList: number; // Number of items per page
}

const ActiveBankPagination: React.FC<ActiveBankPaginationProps> = ({ ActiveBankList }) => {
    const navigate = useNavigate();

    const [Loading, SetLoading] = useState<boolean>(false);
    const [BankListData, SetBankListData] = useState<any[]>([]);
    const [BankListDataCount, SetBankListDataCount] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(ActiveBankList);
    const [searchKeyword, setSearchKeyword] = useState<string>("i");
    const inputRef = useRef<HTMLInputElement>(null);

    // Fetch bank list data when component mounts or pagination parameters change
    useEffect(() => {
        const fetchActiveBanks = async () => {
            SetLoading(true);
            try {
                const response = await axios.get(
                    `https://portfolio-pah5.onrender.com/api/v1/ActiveBankList/${currentPage}/${perPage}/${searchKeyword}`
                );
                SetBankListDataCount(response.data?.data?.[0]?.Total?.[0]?.count || 0);
                SetBankListData(response.data?.data?.[0]?.Rows || []);
            } catch (error) {
                console.error("Error fetching Active banks:", error);
            } finally {
                SetLoading(false);
            }
        };

        fetchActiveBanks();
    }, [currentPage, perPage, searchKeyword]);

    // Handle search button click
    const SearchBtn = async () => {
        const query = inputRef.current?.value || "i";
        setSearchKeyword(query);
        setCurrentPage(1);
    };

    // Handle pagination button click
    const PaginationBtn = (pageNumber: number) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // smooth স্ক্রলিং
        });
        setCurrentPage(pageNumber);
    };

    // Handle per page change
    const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // smooth স্ক্রলিং
        });
        setPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    return (
        <div className="ActiveBankList">

            <div className="card border border-secondary">
                <div className="card-header">
                    <nav className="navbar navbar-light bg-light justify-content-between">
                        <h2 className="card-title font-weight-bold">
                            Active Bank List
                        </h2>
                        <form className="form-inline d-flex" style={{ width: "60%" }}>
                            <input
                                type="search"
                                ref={inputRef}
                                className="form-control mr-2"
                                placeholder="Search by keyword"
                            />
                            <button type="button" onClick={SearchBtn} className="btn btn-outline-dark">
                                Search
                            </button>
                        </form>
                    </nav>
                </div>

                <div className="card-body">
                    {Loading && (
                        <div className="text-left m-2">
                            <div className="spinner-border text-black" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
                    {!Loading && BankListData.length === 0 && (
                        <p className="text-center">No data found.</p>
                    )}





                    {BankListData.map((bank, index) => (


                        <div key={index} className="card mb-4" style={{ border: "1px solid black" }}>

                            <div className="card-header">


                                <div className="row">
                                    <div className="col-md-3">
                                        <img
                                            style={{ width: "auto", maxHeight: "100px", minHeight: "auto" }}
                                            src={bank.BankLogo}
                                            className="img-fluid rounded"
                                        />
                                    </div>

                                    <div className="col-md-9">

                                        <div className="row">
                                            <div className="col-md-9">
                                                <h5 className="card-title">{bank.BankName}</h5>
                                                <span className="card-text">{bank.BankAddress}</span> <br />
                                                <span className="card-text">{bank.OfficeNumberOne}</span> <br />
                                                <span className="card-text">{bank.OfficeEmailOne}</span>
                                            </div>


                                            <div className="col-md-3">

                                                <a href={`MyBank/${bank.BankURL}`} target='_blank' rel="noreferrer">
                                                    <button type="button" style={{ width: "100%", marginTop: "12px", backgroundColor: "#474F7A", color: "white", borderRadius: "5px", }}  > See <CiRead /> </button>
                                                </a>


                                                <NavLink to={`/UpdateBank/${bank.BankURL}`}>
                                                    <button type="button" style={{ width: "100%", marginTop: "12px", backgroundColor: "#474F7A", color: "white", borderRadius: "5px", }} > Edit <MdEditNote /> </button>
                                                </NavLink>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div className="row">
                                <div className="col-md-6">
                                    <Table striped bordered hover >
                                        <thead>
                                            <tr>
                                                <th>Bank Name</th>
                                                <th>{bank.BankName}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Status</td>
                                                <td> <b>

                                                    <span>{bank.StatusBank}</span>
                                                </b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Start Date</td>
                                                <td>
                                                    <b>
                                                        {new Date(bank.StartDate).toLocaleDateString('en-GB', {
                                                            day: '2-digit',
                                                            month: '2-digit',
                                                            year: 'numeric',
                                                        })}
                                                    </b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>End Date</td>
                                                <td>
                                                    <b>
                                                        {new Date(bank.EndDate).toLocaleDateString('en-GB', {
                                                            day: '2-digit',
                                                            month: '2-digit',
                                                            year: 'numeric',
                                                        })}
                                                    </b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Address</td>
                                                <td>{bank.BankAddress}</td>
                                            </tr>
                                            <tr>
                                                <td>Bank URL</td>
                                                <td>{bank.BankURL}</td>
                                            </tr>
                                            <tr>
                                                <td>Phone Number</td>
                                                <td>
                                                    <span>{bank.OfficeNumberOne}</span> <br />
                                                    <span>{bank.OfficeNumberTwo}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>
                                                    <span>{bank.OfficeEmailOne}</span> <br />
                                                    <span>{bank.OfficeEmailTwo}</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

                                <div className="col-md-6">
                                    <Table striped bordered hover >
                                        <thead>
                                            <tr>
                                                <th>Manager Name</th>
                                                <th>{bank.ManagerName}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Service Type</td>
                                                <td><b>{bank.ServiceType}</b></td>
                                            </tr>
                                            <tr>
                                                <td>Payment Status</td>
                                                <td><b>{bank.PaymentStatus}</b></td>
                                            </tr>
                                            <tr>
                                                <td>Payment Amount</td>
                                                <td><b>{bank.PaymentAmount}</b></td>
                                            </tr>
                                            <tr>
                                                <td>Template</td>
                                                <td>{bank.Template}</td>
                                            </tr>
                                            <tr>
                                                <td>Reference Name</td>
                                                <td>{bank.ReferenceName}</td>
                                            </tr>
                                            <tr>
                                                <td>Reference Number</td>
                                                <td>{bank.ReferenceNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Registration Date</td>
                                                <td>
                                                    {new Date(bank.CreateDate).toLocaleDateString('en-GB', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: 'numeric',
                                                    })}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>






                        </div>


                    ))}
                </div>

                <nav className="card-footer" aria-label="...">
                    <div className="selector mb-2">
                        <span>Data Show </span>
                        <select onChange={handlePerPageChange} value={perPage}>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                    <ul className="pagination">
                        <li
                            style={{ cursor: "pointer" }}
                            className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
                        >
                            <span
                                className="page-link"
                                onClick={() => currentPage > 1 && PaginationBtn(currentPage - 1)}
                            >
                                Previous
                            </span>
                        </li>
                        {Array.from(
                            { length: Math.ceil(BankListDataCount / perPage) },
                            (_, index) => (
                                <li
                                    style={{ cursor: "pointer" }}
                                    className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                                    key={index}
                                >
                                    <span
                                        className="page-link"
                                        onClick={() => PaginationBtn(index + 1)}
                                    >
                                        {index + 1}
                                    </span>
                                </li>
                            )
                        )}
                        <li
                            style={{ cursor: "pointer" }}
                            className={`page-item ${currentPage === Math.ceil(BankListDataCount / perPage) ? 'disabled' : ''
                                }`}
                        >
                            <span
                                className="page-link"
                                onClick={() =>
                                    currentPage < Math.ceil(BankListDataCount / perPage) &&
                                    PaginationBtn(currentPage + 1)
                                }
                            >
                                Next
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default ActiveBankPagination;
