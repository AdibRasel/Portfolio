import axios from "axios";
const BaseURL = "https://portfolio-pah5.onrender.com/api/v1"



// Recover Verify Email setp 1 প্রথমে ইমেইল যাচাই করবে আছে কি না, থাকলে ইমেলে একটি ৬ ডিজিটের কোড পাঠাবে।
// otp মডেলে status কোড 0 করবে। 
export async function RecoverVerifyEmail(email) {
    try {

        let URL = BaseURL + "/RecoverVerifyEmail/" + email;

        let Res = await axios.get(URL)

        console.log(Res.data.status);

        if (Res.data.status == "Success") {
            return { status: "Success", data: Res }
        } else {
            return { status: "faild", data: Res }
        }


    }
    catch (error) {
        return { status: "error", error: error }
    }
}




// Recover Verify OTP setp 2। otp মডেলে গিয়ে ইমেল আর otp যাচাই করবে। 
// otp মডেলে status কোড 1 করবে। 
export async function RecoverVerifyOTP(email, otp) {
    try {

        let URL = BaseURL + "/RecoverVerifyOTP/" + email + "/" + otp;

        let Res = await axios.get(URL)

        console.log(Res);

        if (Res.data.status == "Success") {
            return { status: "Success", data: Res }
        } else {
            return { status: "faild", data: Res }
        }


    }
    catch (error) {
        return { status: "error", error: error }
    }
}



// Recover Verify OTP & Change Password setp 3
// otp মডেলে গিয়ে খুজবে ইমেল আর otp কোড, সাথে status code 1 আছে কি না, 
// ঠিক থাকলে পাসওয়ার্ড চ্যঞ্জ করবে সাথে otp মডেলে status কোড আবার 0 করে দিবে। 
export async function RecoverResetPass(PostBody) {
    try {

        let URL = BaseURL + "/RecoverResetPass";


        let Res = await axios.post(URL, PostBody)

        console.log(Res);

        if (Res.data.status == "Success") {
            return { status: "Success", data: Res }
        } else {
            return { status: "faild", data: Res }
        }


    }
    catch (error) {
        return { status: "error", error: error }
    }
}




