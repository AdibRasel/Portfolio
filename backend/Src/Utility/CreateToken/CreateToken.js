const jwt = require("jsonwebtoken");
const CreateToken = async (Email, Password, UserRole)=>{
    // This token will have 1 day validity
    // let payload = {exp: Math.floor(Date.now()/1000)+ (24*60*60), Email:Email, Password:Password, UserRole:UserRole}
    
    // This token will have 30 day validity
    let payload = {
        exp: Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60),
        Email: Email,
        Password: Password,
        UserRole: UserRole
      };
    return await jwt.sign(payload, 'SecretKey$$(Portfolio)$$RasalHossain')
}
module.exports = CreateToken