import axios from "axios";
const BaseURL = "http://localhost:5000/api/v1"



// User Allinfo API Call
export async function UserHomeAllInfo(){
    try {

        // let URL = BaseURL+"/HomePageInfoSeeAllDetails";

        let URL = BaseURL+"/UserSeeUserHomePageInfo";


        const UserToken = localStorage.getItem("Token");
        const UserEmail = localStorage.getItem("Email");
        console.log("user token = " + UserToken);
        console.log("user email = " + UserEmail);
        const PostBody = {
            Email: UserEmail
        };

        const AxiosHeader = { headers: { token: UserToken } };

        let Res = await axios.post(URL, PostBody, AxiosHeader)



        // let Res = await axios.get(URL)

        return {status:"Success", UserHomeinfo: Res}

       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}




// User Allinfo API Call
export async function SuperAdminCretedHomeAllInfo(){
    try {

        let URL = BaseURL+"/HomePageInfoSeeAllDetails";

        let Res = await axios.get(URL)

        return {status:"Success", UserHomeinfo: Res}

       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}



// Update User Home Page Info
export async function UserHomePageInfoCreate(PostBody){
    try {
        let URL = BaseURL+"/UserHomePageInfoCreate";

        const UserToken = localStorage.getItem("Token");

        const AxiosHeader = { headers: { token: UserToken } };

        let Res = await axios.post(URL, PostBody, AxiosHeader)
        console.log(Res.data.status);

        if(Res.data.status === "success"){
            return {status:"CreateSuccess", Data: Res}
        }else if(Res.data.status === "ExistData"){
            return {status:"ExistData", Data: Res}
        }else{
            return {status:"Faild"}
        }
       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
    
}



// Update User Home Page Info
export async function UpdateUserHomePageInfo(PostBody, HomeInfoID){
    try {
        let URL = BaseURL+"/HomePageInfoUpdate/" + HomeInfoID;

        const UserToken = localStorage.getItem("Token");

        const AxiosHeader = { headers: { token: UserToken } };

        let Res = await axios.post(URL, PostBody, AxiosHeader)
        console.log(Res.data.status);

        if(Res.data.status === "Update Success"){
            return {status:"Update Success", Data: Res}
        }else{
            return {status:"Update Faild"}
        }
       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
    
}