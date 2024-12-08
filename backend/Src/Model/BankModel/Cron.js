// const cron = require("node-cron");
// const BankModel = require("./BankModel"); // আপনার মডেলের পথ

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



const cron = require("node-cron");
const BankModel = require("./BankModel"); // আপনার মডেলের পথ

// প্রতি ২ মিনিট পর পর ১ মাস বা ১ বছরের মেয়াদ শেষ হওয়া সার্ভিস নিষ্ক্রিয় করুন
cron.schedule("*/1 * * * *", async () => {  // প্রতি ২ মিনিট পর পর
    console.log("Running scheduled task to check expired services...");
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
                { $set: { ServiceType: "Expired", PaymentStatus: "Pending" } }
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
                { $set: { ServiceType: "Expired", PaymentStatus: "Pending" } }
            );
            console.log(`Deactivated ${expiredYearlyServices.length} expired yearly/one-time services.`);
        } else {
            console.log("No expired services found.");
        }
    } catch (error) {
        console.error("Error running scheduled task:", error);
    }
});
