import React from 'react';
import { FaRegEye, FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { BsBank2 } from "react-icons/bs";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { MdMarkEmailRead } from "react-icons/md";
import { PiReadCvLogoDuotone } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const SuperAdminCard = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card DashBoardcard shadow-lg border-light">
              <div className="card-body text-center">
                <h2 className="card-title text-dark">Public Home</h2>
                <h1 className="card-icon text-primary">
                  <FaHome />
                </h1>
                <NavLink to="/UserHome">
                  <button className="btn btn-primary mt-3">
                    See <FaRegEye />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card DashBoardcard shadow-lg border-light">
              <div className="card-body text-center">
                <h2 className="card-title text-dark">My Category</h2>
                <h1 className="card-icon text-info">
                  <BiCategory />
                </h1>
                <NavLink to="/AuthenticCategory">
                  <button className="btn btn-info mt-3">
                    See <FaRegEye />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card DashBoardcard shadow-lg border-light">
              <div className="card-body text-center">
                <h2 className="card-title text-dark">Bank Project</h2>
                <h1 className="card-icon text-success">
                  <BsBank2 />
                </h1>
                <NavLink to="/BankHome">
                  <button className="btn btn-success mt-3">
                    See <FaRegEye />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card DashBoardcard shadow-lg border-light">
              <div className="card-body text-center">
                <h2 className="card-title text-dark">Email Project</h2>
                <h1 className="card-icon text-danger">
                  <SiAmazonsimpleemailservice />
                </h1>
                <NavLink to="/MultipleEmailSend">
                  <button className="btn btn-danger mt-3">
                    See <FaRegEye />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card DashBoardcard shadow-lg border-light">
              <div className="card-body text-center">
                <h2 className="card-title text-dark">Email List</h2>
                <h1 className="card-icon text-warning">
                  <MdMarkEmailRead />
                </h1>
                <NavLink to="/ThousendEmailList">
                  <button className="btn btn-warning mt-3">
                    See <FaRegEye />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card DashBoardcard shadow-lg border-light">
              <div className="card-body text-center">
                <h2 className="card-title text-dark">CV Project</h2>
                <h1 className="card-icon text-muted">
                  <PiReadCvLogoDuotone />
                </h1>
                <NavLink to="/ActivePending">
                  <button className="btn btn-secondary mt-3">
                    See <FaRegEye />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card DashBoardcard shadow-lg border-light">
              <div className="card-body text-center">
                <h4 className="card-title text-dark">Portfolio Project</h4>
                <h1 className="card-icon text-primary">
                  <CgWebsite className="ActiveColor" />
                </h1>
                <NavLink to="/ActivePending">
                  <button className="btn btn-primary mt-3">
                    See <FaRegEye />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card DashBoardcard shadow-lg border-light">
              <div className="card-body text-center">
                <h2 className="card-title text-dark">Settings</h2>
                <h1 className="card-icon text-dark">
                  <IoSettings />
                </h1>
                <NavLink to="/SoftwareSettings">
                  <button className="btn btn-dark mt-3">
                    See <FaRegEye />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminCard;















// import React from 'react'
// import { FaRegEye } from "react-icons/fa";
// import { HiMiniUserGroup } from "react-icons/hi2";
// import { BiCategory } from "react-icons/bi";
// import { BsFillPostcardFill } from "react-icons/bs";
// import { FaRegCommentDots } from "react-icons/fa6";
// import { BsFillStopCircleFill } from "react-icons/bs";
// import { NavLink } from 'react-router-dom';
// import { FaHome } from "react-icons/fa";
// import { BsBank2 } from "react-icons/bs";
// import { SiAmazonsimpleemailservice } from "react-icons/si";
// import { MdMarkEmailRead } from "react-icons/md";
// import { PiReadCvLogoDuotone } from "react-icons/pi";
// import { CgWebsite } from "react-icons/cg";
// import { IoSettings } from "react-icons/io5";





// const SuperAdminCard = () => {
//     return (<>


//         <div className="container mt-4">

//             <div className="row">
//                 <div className="col-md-3">
//                     <div className="DashboardCardBox">
//                         <h2>Public Home</h2>
//                         <h1><FaHome  /></h1>

//                         <NavLink to="/UserHome">

//                             <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
//                         </NavLink>
//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="DashboardCardBox">
//                         <h2>My Category</h2>
//                         <h1><BiCategory /></h1>

//                         <NavLink to="/AuthenticCategory">

//                             <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
//                         </NavLink>

//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="DashboardCardBox">
//                         <h2>Bank Project</h2>
//                         <h1><BsBank2  /></h1>

//                         <NavLink to="/BankHome">

//                             <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
//                         </NavLink>

//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="DashboardCardBox">
//                         <h2>Email Project</h2>
//                         <h1><SiAmazonsimpleemailservice  /></h1>

//                         <NavLink to="/MultipleEmailSend">

//                             <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
//                         </NavLink>

//                     </div>
//                 </div>


//             </div>



//             <div className="row">
//                 <div className="col-md-3">
//                     <div className="DashboardCardBox">
//                         <h2>Email List</h2>
//                         <h1><MdMarkEmailRead  /></h1>

//                         <NavLink to="/ThousendEmailList">

//                             <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
//                         </NavLink>

//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="DashboardCardBox">
//                         <h2>CV Project</h2>
//                         <h1><PiReadCvLogoDuotone  /></h1>

//                         <NavLink to="/ActivePending">

//                             <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
//                         </NavLink>

//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="DashboardCardBox">
//                         <h4>Portfolio Project</h4>
//                         <h1><CgWebsite  className='ActiveColor' /></h1>

//                         <NavLink to="/ActivePending">

//                             <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
//                         </NavLink>

//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="DashboardCardBox">
//                         <h2>Software Settings</h2>
//                         <h1><IoSettings  /></h1>
//                         <NavLink to="/SoftwareSettings">

//                             <button className='btn btn-outline-dark'><span className='text-white'>See <FaRegEye /></span></button>
//                         </NavLink>

//                     </div>
//                 </div>
//             </div>




//         </div>




//     </>)
// }

// export default SuperAdminCard
