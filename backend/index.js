const App = require("./App");

const DoteEnv = require("dotenv")

DoteEnv.config({path:"./Config.env"})

const PORT= process.env.RunningPort || 5000;

App.listen(PORT, function(){
    console.log("App Run Success, server address https://portfolio-pah5.onrender.com")
})