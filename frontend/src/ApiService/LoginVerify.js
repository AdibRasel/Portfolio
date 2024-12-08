import axios from "axios";

const BaseURL = "https://portfolio-pah5.onrender.com/api/v1"



export async function LoginVerify(token) {
    try {
        const URL = BaseURL + "/LoginVerify";
        const response = await axios.post(URL, null, { headers: { token } });
        return { status: "Login Success", data: response.data };
    } catch (error) {
        return { status: "error", error: error };
    }
}
  