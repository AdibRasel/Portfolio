import SuperAdminLayout from "SuperAdmin/SuperAdminLayout/SuperAdminLayout"
import ActiveBankPagination from "./ActiveBankPagination"

const ActiveBank = () => {
    return <>

        <SuperAdminLayout>



            <ActiveBankPagination ActiveBankList={10} />



        </SuperAdminLayout>


    </>
}
export default ActiveBank
