const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    BankURL: { type: String, unique: true },
    StatusBank: { type: String },
    BankName: { type: String },
    BankLogo: { type: String },
    BankAddress: { type: String },
    BranchName: { type: String },
    BankAccountLength: { type: Number },
    RoutingNumber: { type: String },
    SwiftCode: { type: String },
    HotLineNumber: { type: String },
    Template: { type: String },
    ManagerName: { type: String },
    OfficeImage: { type: String },
    BorderColor: { type: String },
    OfficeNumberOne: { type: String },
    OfficeNumberOneWhatsApp: { type: Boolean },
    OfficeNumberOneImo: { type: Boolean },
    OfficeNumberTwo: { type: String },
    OfficeNumberTwoWhatsApp: { type: Boolean },
    OfficeNumberTwoImo: { type: Boolean },
    OfficeEmailOne: { type: String },
    OfficeEmailTwo: { type: String },
    ReferenceName: { type: String },
    ReferenceNumber: { type: String },
    CreateDate: { type: Date, default: Date.now() },
    ServiceType: { type: String, enum: ["Free", "Yearly", "One-time", "Full-Time"]}, 
    // উপরের লাইন- প্রথম মাসের জন্য প্রি থাকবে, ১ বছরের জন্য নিলে Yearly অথবা One-time থাকবে আর সব পেমেন্ট করে দিলে Full-Time থাকবে। 
    PaymentStatus: { type: String, enum: ["Pending", "Completed", "Failed"] },
    // উপরের লাইন- PaymentStatus এর উপর ভিত্তি করে সকল কাজ হবে। পেন্ডিং থাকলে পেন্ডিং পেইজে যাবে আর Completed থাকলে সকল এক্সেস পাবে।
    PaymentAmount: { type: Number, default: 0 }, 
    StartDate: { type: Date },
    // উপরের লাইন- যেদিন রেজিট্রেশন করবে সেই তারিখ 
    EndDate: { type: Date }, 
    // ১ মাসের জন্য প্রি হলে ১ মাস পরের তারিখ উল্যেখ করে দিতে হবে,
    // ১ বছরের জন্য হলে ১ বছর পরের তারিখ দিতে হবে
    // সারা বছরের জন্য নিলে যে কোন তারিখ দিলে হবে কিন্তু ServiceType - Full-Time করে দিতে হবে। 
}, { versionKey: false });

const BankModel = mongoose.model("BankModel", DataSchema);
module.exports = BankModel;


