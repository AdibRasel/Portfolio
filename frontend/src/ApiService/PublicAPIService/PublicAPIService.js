import axios from "axios";
const BaseURL = "https://portfolio-pah5.onrender.com/api/v1"



// Public Allinfo API Call
export async function Allinfo() {
    try {


        let URL = BaseURL + "/Allinfo";



        let Res = await axios.get(URL)

        return { status: "Allinfo Show Success", Allinfo: Res }

       
    }
    catch (error) {
        return { status: "error", error: error }
    }
}





// Recent Ten (10) Category
export async function RecentTenCategory() {
    try {


        let URL = BaseURL + "/RecentTenCategory";



        let Res = await axios.get(URL)


        if (Res.data.status === "Success") {
            return { status: "Success", data: Res }
        } else {
            return { status: "faild" }
        }


    }
    catch (error) {
        return { status: "error", error: error }
    }
}



// Recent Ten (10) Post
export async function RecentTenPost() {
    try {


        let URL = BaseURL + "/RecentTenPost";



        let Res = await axios.get(URL)


        if (Res.data.status === "Success") {
            return { status: "Success", data: Res }
        } else {
            return { status: "faild" }
        }


    }
    catch (error) {
        return { status: "error", error: error }
    }
}




// post Pagination with searchKeyword
export async function PostPagination(pageNo, perPage, searchKeyword) {
    try {


        // let URL = BaseURL+"/PostPagination/:pageNo/:perPage/:searchKeyword";
        let URL = BaseURL + "/PostPagination/" + pageNo + "/" + perPage + "/" + searchKeyword;



        let Res = await axios.get(URL)



        if (Res.data.status === "Success") {
            return { status: "Success", data: Res }
        } else {
            return { status: "faild" }
        }


    }
    catch (error) {
        return { status: "error", error: error }
    }
}



// Read Post With ID
export async function ReadPostWithID(ID) {
    try {
        const URL = `${BaseURL}/PostIDWithDetails/${ID}`;
        // const URL = BaseURL + "/" + ID;

        const Res = await axios.get(URL);

        if (Res.data.status === "Success") {
            return { status: "Success", data: Res.data };
        } else {
            return { status: "failed" };
        }
    }
    catch (error) {
        return { status: "error", error: error.message };
    }
}




// Read Category With ID
export async function ReadCategoryWithID(ID) {
    try {
        const URL = `${BaseURL}/CategoryIDWithDetails/${ID}`;
        // const URL = BaseURL + "/" + ID;

        const Res = await axios.get(URL);

        if (Res.data.status === "Success") {
            return { status: "Success", data: Res.data };
        } else {
            return { status: "failed" };
        }
    }
    catch (error) {
        return { status: "error", error: error.message };
    }
}



// Category Under All Post
export async function CategoryUnderAllPost(ID) {
    try {
        const URL = `${BaseURL}/CategoryUnderAllPost/${ID}`;
        // const URL = BaseURL + "/" + ID;

        const Res = await axios.get(URL);

        if (Res.data.status === "Success") {
            return { status: "Success", data: Res.data };
        } else {
            return { status: "failed" };
        }
    }
    catch (error) {
        return { status: "error", error: error.message };
    }
}



// Post Under Category Details
export async function PostUnderCategoryDetails(ID) {
    try {
        const URL = `${BaseURL}/PostUnderCategoryDetails/${ID}`;
        // const URL = BaseURL + "/" + ID;

        const Res = await axios.get(URL);

        if (Res.data.status === "Success") {
            return { status: "Success", data: Res.data };
        } else {
            return { status: "failed" };
        }
    }
    catch (error) {
        return { status: "error", error: error.message };
    }
}
