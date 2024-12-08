import SuperAdminLayout from "SuperAdmin/SuperAdminLayout/SuperAdminLayout"
import PendingBankPagination from "./PendingBankPagination"

const PendingBank = () => {
    return <>

        <SuperAdminLayout>



            <PendingBankPagination PendingBankList={10} />



        </SuperAdminLayout>


    </>
}
export default PendingBank
