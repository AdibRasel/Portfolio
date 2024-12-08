import axios from "axios";
const BaseURL = "https://portfolio-pah5.onrender.com/api/v1"



// Home Page See All API Call
export async function HomePageInfoSeeAllDetails(){
    try {
        let URL = BaseURL+"/HomePageInfoSeeAllDetails";

        

        let Res = await axios.get(URL)


        if(Res.data.data.status === "success"){
            return {status:"Home Page Data Show Create Faild"}
        }else{
            return {status:"Home Page All Setting Data show Success", Data: Res}
        }

       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}


// export async function updateHomePageInfo(formData){
//     try {
//         let URL = BaseURL+"/HomePageInfoSeeAllDetails";

        

//         // let URL = BaseURL+"/CategoryUpdate/" + HomeInfoID;

//         //         const UserToken = localStorage.getItem("Token");
        
//         //         const AxiosHeader = { headers: { token: UserToken } };
        
//         //         let Res = await axios.post(URL, PostBody, AxiosHeader)


//         if(Res.data.data.status === "success"){
//             return {status:"Home Page Data Show Create Faild"}
//         }else{
//             return {status:"Home Page All Setting Data show Success", Data: Res}
//         }

       
//     }
//     catch (error) {
//        return { status: "error" , error : error }
//     }
// }



export async function updateHomePageInfo(PostBody, HomeInfoID){
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