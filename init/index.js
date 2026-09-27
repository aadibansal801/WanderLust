const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const Review = require("../models/rewiew.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}


const initDB = async ()=>{
    await Review.deleteMany({});
    await Listing.deleteMany({});
    const listings = await Listing.insertMany(initData.data);
    for(let listing of listings){
        const owner = new mongoose.Types.ObjectId('6ab90e9f4200f403a6403f23');
        listing.owner = owner;
        await listing.save();
    }
    console.log("data initialized");
};

main()
    .then(initDB)
    .catch(err=>{
        console.log(err);
    });