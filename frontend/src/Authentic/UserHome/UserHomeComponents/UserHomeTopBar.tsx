

import { useNavigate } from 'react-router-dom';





const UserHomeTopBar = () => {
    const navigate = useNavigate();


    const LogOut = () => {
        localStorage.clear();
        navigate('/Home');
        window.location.reload();
    }
    function formatDate() {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const currentDate = new Date();

        const monthName = months[currentDate.getMonth()];
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();

        return `${monthName} ${day}, ${year}`;
    }
    const formattedDate = formatDate();
    return (<>
        {/* TopBar start  */}
        <div className="TopBarBG p-1">



        </div>
        {/* TopBar End  */}
    </>)
}
export default UserHomeTopBar;