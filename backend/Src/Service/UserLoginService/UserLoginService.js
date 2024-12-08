const CreateToken = require("../../Utility/CreateToken/CreateToken");

const UserLoginService = async (Request, DataModel) => {
    try {
        let PostBody = Request.body;

        let FindEmail = { Email: Request.body.Email }
        let FindPassword = { Password: Request.body.Password }
        let FindUser = { Password: Request.body.UserRole }

        let User = await DataModel.findOne(FindEmail)

        const UserEmail = User.Email
        const UserPassword = User.Password
        const UserRole = User.UserRole


        if (FindEmail.Email == UserEmail && FindPassword.Password == UserPassword) {



            let Token = await CreateToken(UserEmail, UserPassword, UserRole)

            return { status: "Login Success", User:User, Token:Token }

        } else {
            return { status: "Login Faild" }
        }
        
    }
    catch (error) {
        return { status: "fail", data: error }
    }
}
module.exports = UserLoginService