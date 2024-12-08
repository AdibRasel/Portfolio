import axios from "axios";
const BaseURL = "https://portfolio-pah5.onrender.com/api/v1"



// Bank Registration API Call
export async function BankRegistration(PostBody){
    try {
        let URL = BaseURL+"/BankRegistration";


        let Res = await axios.post(URL,PostBody)
       
        console.log(Res)


        if(Res.data.status === "success"){
            return {status:"Bank Registration Success", BankInfo: Res}
        }else if(Res.data.status === "fail"){
            return {status:"Bank is already registered", existingBank: Res.data.existingBank}
        }else{
            return {status: "server error"}
        }

       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}


// Bank Registration Mail Send
export async function BankRegistrationMailSend(PostBody){
    try {
        let URL = BaseURL+"/BankMailSend";


        let Res = await axios.post(URL,PostBody)
       
        console.log(Res)


        if(Res.data.status === "success"){
            return {status:"Bank Registration Success", BankInfo: Res}
        }else if(Res.data.status === "fail"){
            return {status:"Bank is already registered", existingBank: Res.data.existingBank}
        }else{
            return {status: "server error"}
        }

       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}


// Active Bank Mail Send
export async function ActiveBankMailSend(PostBody){
    try {
        let URL = BaseURL+"/ActiveMailSend";


        let Res = await axios.post(URL,PostBody)
       
        console.log(Res)


        if(Res.data.status === "success"){
            return {status:"Bank Registration Success", BankInfo: Res}
        }else if(Res.data.status === "fail"){
            return {status:"Bank is already registered", existingBank: Res.data.existingBank}
        }else{
            return {status: "server error"}
        }

       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}






// Bank UpdateBank API Call
export async function UpdateBankinfo(PostBody, BankURL){
    try {
        let URL = BaseURL+"/UpdateBank/" + BankURL;

        const UserToken = localStorage.getItem("Token");

        const AxiosHeader = { headers: { token: UserToken } };


        let Res = await axios.post(URL,PostBody, AxiosHeader)
       
        console.log(Res)


        if(Res.data.status === "Update Success"){
            return {status:"Bank Update Success", BankInfo: Res}
        }{
            return {status: "server error"}
        }

       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}




// Bank Read With URL API Call
export async function ReadWithURL(URLs){
    try {
        let URL = BaseURL+"/ReadWithURL/" + URLs;


        let Res = await axios.get(URL)
       
        console.log(Res)


        if(Res.data.status === "Success"){
            return {status:"Bank Read With URL Success", BankInfo: Res}
        }{
            return {status: "server error"}
        }

       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}






// Bank Read With URL API Call
export async function DeleteBank(URLs){
    try {
        let URL = BaseURL+"/DeleteBank/" + URLs;

        
        const UserToken = localStorage.getItem("Token");

        const AxiosHeader = { headers: { token: UserToken } };
        
        let Res = await axios.get(URL, AxiosHeader);
       
        console.log(Res)


        if(Res.data.status === "Delete Success"){
            return {status:"DeleteSuccess", BankInfo: Res}
        }{
            return {status: "ServerError"}
        }

       
    }
    catch (error) {
       return { status: "error" , error : error }
    }
}