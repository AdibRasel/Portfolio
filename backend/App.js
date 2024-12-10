//Basic Lib Import
const express = require("express");
const Router = require("./Src/Router/Router");
const App = new express();
const BodyParser = require("body-parser");

const cron = require("node-cron");


//Env file config
const DoteEnv = require("dotenv")

DoteEnv.config({ path: "./Config.env" })
const MongoDBDatabaseUser = process.env.MongoDBDatabaseUser
const MongoDBDatabasePassword = process.env.MongoDBDatabasePassword




// Security Middleware Lib Import
const RateLimiter = require("express-rate-limit");
const Helmet = require("helmet")
const MongoSanitize = require("express-mongo-sanitize");
const Xss = require("xss-clean");
const Hpp = require("hpp");
const Cors = require("cors");


// Database Configuration
const Mongose = require("mongoose");
const BankModel = require("./Src/Model/BankModel/BankModel");


// Security Middleware Implement 
App.use(Cors())
App.use(Helmet())
App.use(MongoSanitize())
App.use(Xss())
App.use(Hpp())


App.use(express.json({ limit: '20mb' }));
App.use(express.urlencoded({ limit: '20mb' }))



// Body Parser Implement 
App.use(BodyParser.json())





// Request Rate Limite 
const Limiter = RateLimiter(
    {
        windowMs: 15 * 60 * 1000, // 15 Minute
        max: 3000 // 3000 request
    }
)


App.use(Limiter)



// Mongo DB Database Connection 
// const UriOne = "mongodb+srv://Rasal_Hossain:mrhthvgvbnv@cluster0.u9f9cje.mongodb.net/AdibRasel";
const UriOne = "mongodb+srv://" + MongoDBDatabaseUser + ":" + MongoDBDatabasePassword + "@portfolio.n4omp.mongodb.net/Portfolio";
const UriTwo = "mongodb://127.0.0.1:27017/Portfolio";
// mongodb+srv://Rasal_Hossain:<password>@cluster0.u9f9cje.mongodb.net/


// Mongose connection 1
//=====================
// Mongose.connect(UriOne, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log('Connected to MongoDB...'))
// .catch(err => console.error('Could not connect to MongoDB...', err));

// Mongose connection 2
//=====================
// Mongose.connect(UriOne, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

// Mongose connection 3
//=====================
Mongose.connect(UriOne) // Adjust the connection string as needed
    .then(() => {
        console.log("Successfuly Connected to MongoDB...");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });







// // ====================== start প্রতিদিন দুপুর ১২ টায় নিচের ফাংশন কল হবে। ========================
// সার্ভার স্টার্ট হলে বা যেকোনো সময় একবার চালানোর জন্য ফাংশন
// সার্ভিস যাচাই এবং নিষ্ক্রিয় করার ফাংশন
// সার্ভিস যাচাই এবং নিষ্ক্রিয় করার ফাংশন
async function checkAndDeactivateExpiredServices() {
    console.log("Running task to check expired services...");
    try {
        const today = new Date();

        // ১ মাসের সার্ভিস মেয়াদ শেষ হওয়া সার্ভিস খুঁজে বের করুন
        const expiredMonthlyServices = await BankModel.find({
            EndDate: { $lt: today }, // EndDate আজকের তারিখের আগে হলে
            ServiceType: "Free", // "Free" সার্ভিসের জন্য
        });

        if (expiredMonthlyServices.length > 0) {
            // মাসের সার্ভিস নিষ্ক্রিয় করে আপডেট করুন
            await BankModel.updateMany(
                { _id: { $in: expiredMonthlyServices.map(service => service._id) } },
                { $set: { ServiceType: "Expired", PaymentStatus: "Pending", StatusBank: "Pending" } }
            );
            console.log(`Deactivated ${expiredMonthlyServices.length} expired free services.`);
        }

        // ১ বছরের সার্ভিস মেয়াদ শেষ হওয়া সার্ভিস খুঁজে বের করুন
        const expiredYearlyServices = await BankModel.find({
            EndDate: { $lt: today }, // EndDate আজকের তারিখের আগে হলে
            ServiceType: { $in: ["Yearly", "One-time"] }, // "Yearly" অথবা "One-time" সার্ভিস
        });

        if (expiredYearlyServices.length > 0) {
            // ১ বছরের সার্ভিস নিষ্ক্রিয় করে আপডেট করুন
            await BankModel.updateMany(
                { _id: { $in: expiredYearlyServices.map(service => service._id) } },
                { $set: { ServiceType: "Expired", PaymentStatus: "Pending", StatusBank: "Pending" } }
            );
            console.log(`Deactivated ${expiredYearlyServices.length} expired yearly/one-time services.`);
        } else {
            console.log("No expired services found.");
        }
    } catch (error) {
        console.error("Error running task:", error);
    }
}

// প্রতি মিনিটে সময় চেক করা হবে
function startDailyCheck() {
    setInterval(async () => {
        const now = new Date();
        // সময় যদি দুপুর ১২:০০ হয়
        if (now.getHours() === 12 && now.getMinutes() === 0) {
            console.log("It's 12:00 PM. Running the task...");
            await checkAndDeactivateExpiredServices();
        }
    }, 60000); // প্রতি মিনিটে চেক করে
}

// সার্ভার শুরু হলে একবার ফাংশন চালু করুন
async function init() {
    console.log("Initializing service check...");
    await checkAndDeactivateExpiredServices(); // সার্ভার চালুর সময় একবার চালান
    startDailyCheck(); // দৈনিক চেক ফাংশন চালু করুন
}

// সার্ভার শুরু হলে init() কল করুন
init();

// // ====================== end প্রতিদিন দুপুর ১২ টায় নিচের ফাংশন কল হবে। ========================
// সার্ভার স্টার্ট হলে বা যেকোনো সময় একবার চালানোর জন্য ফাংশন












// // প্রতিদিন দুপুর ১২ টায় ১ মাস বা ১ বছরের মেয়াদ শেষ হওয়া সার্ভিস নিষ্ক্রিয় করুন
// cron.schedule("0 6 * * *", { timezone: "Asia/Dhaka" }, async () => { // প্রতিদিন দুপুর ১২ টায়
//     console.log("Running scheduled task to check expired services...");
//     try {
//         const today = new Date();

//         // ১ মাসের সার্ভিস মেয়াদ শেষ হওয়া সার্ভিস খুঁজে বের করুন
//         const expiredMonthlyServices = await BankModel.find({
//             EndDate: { $lt: today }, // EndDate আজকের তারিখের আগে হলে
//             ServiceType: "Free", // "Free" সার্ভিসের জন্য
//         });

//         if (expiredMonthlyServices.length > 0) {
//             // মাসের সার্ভিস নিষ্ক্রিয় করে আপডেট করুন
//             await BankModel.updateMany(
//                 { _id: { $in: expiredMonthlyServices.map(service => service._id) } },
//                 { $set: { ServiceType: "Expired", PaymentStatus: "Pending", StatusBank: "Pending" } }
//             );
//             console.log(`Deactivated ${expiredMonthlyServices.length} expired free services.`);
//         }

//         // ১ বছরের সার্ভিস মেয়াদ শেষ হওয়া সার্ভিস খুঁজে বের করুন
//         const expiredYearlyServices = await BankModel.find({
//             EndDate: { $lt: today }, // EndDate আজকের তারিখের আগে হলে
//             ServiceType: { $in: ["Yearly", "One-time"] }, // "Yearly" অথবা "One-time" সার্ভিস
//         });

//         if (expiredYearlyServices.length > 0) {
//             // ১ বছরের সার্ভিস নিষ্ক্রিয় করে আপডেট করুন
//             await BankModel.updateMany(
//                 { _id: { $in: expiredYearlyServices.map(service => service._id) } },
//                 { $set: { ServiceType: "Expired", PaymentStatus: "Pending", StatusBank: "Pending" } }
//             );
//             console.log(`Deactivated ${expiredYearlyServices.length} expired yearly/one-time services.`);
//         } else {
//             console.log("No expired services found.");
//         }
//     } catch (error) {
//         console.error("Error running scheduled task:", error);
//     }
// });

 // ====================== end প্রতিদিন দুপুর ১২ টায় নিচের ফাংশন কল হবে। ========================



// // ====================== start প্রতি ১ মাস পর পর নিচের ফাংশন কল হবে। ========================
// // প্রতিদিন রাত ১২টায় ১ মাস বা ১ বছরের মেয়াদ শেষ হওয়া সার্ভিস নিষ্ক্রিয় করুন
// cron.schedule("0 0 * * *", async () => {
//     console.log("Running scheduled task to check expired services...");
//     try {
//         const today = new Date();

//         // ১ মাসের সার্ভিস মেয়াদ শেষ হওয়া সার্ভিস খুঁজে বের করুন
//         const expiredMonthlyServices = await BankModel.find({
//             EndDate: { $lt: today }, // EndDate আজকের তারিখের আগে হলে
//             ServiceType: "Free", // "Free" সার্ভিসের জন্য
//         });

//         if (expiredMonthlyServices.length > 0) {
//             // মাসের সার্ভিস নিষ্ক্রিয় করে আপডেট করুন
//             await BankModel.updateMany(
//                 { _id: { $in: expiredMonthlyServices.map(service => service._id) } },
//                 { $set: { ServiceType: "Expired", PaymentStatus: "Pending" } }
//             );
//             console.log(`Deactivated ${expiredMonthlyServices.length} expired free services.`);
//         }

//         // ১ বছরের সার্ভিস মেয়াদ শেষ হওয়া সার্ভিস খুঁজে বের করুন
//         const expiredYearlyServices = await BankModel.find({
//             EndDate: { $lt: today }, // EndDate আজকের তারিখের আগে হলে
//             ServiceType: { $in: ["Yearly", "One-time"] }, // "Yearly" অথবা "One-time" সার্ভিস
//         });

//         if (expiredYearlyServices.length > 0) {
//             // ১ বছরের সার্ভিস নিষ্ক্রিয় করে আপডেট করুন
//             await BankModel.updateMany(
//                 { _id: { $in: expiredYearlyServices.map(service => service._id) } },
//                 { $set: { ServiceType: "Expired", PaymentStatus: "Pending" } }
//             );
//             console.log(`Deactivated ${expiredYearlyServices.length} expired yearly/one-time services.`);
//         } else {
//             console.log("No expired services found.");
//         }
//     } catch (error) {
//         console.error("Error running scheduled task:", error);
//     }
// });
// // ====================== end প্রতি ১ মাস পর পর নিচের ফাংশন কল হবে। ========================







// API Create, Or Routing Implement
App.use("/api/v1", Router)


// Undefine Route Or Undefine API 
App.use("*", (req, res) => {
    res.status(404)
    res.json(
        {
            Status: "Not Found",
            Data: "Undefine Route Or Rong API"
        }
    )
})



module.exports = App;