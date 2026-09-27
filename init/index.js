const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const Review = require("../models/rewiew.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const reviewData = [
    {
        comment: "Amazing place! The location was perfect and the stay was very comfortable.",
        rating: 5
    },
    {
        comment: "Really enjoyed our stay. Everything was clean and exactly as described.",
        rating: 4
    },
    {
        comment: "Beautiful property with a great atmosphere. Would definitely visit again.",
        rating: 5
    },
    {
        comment: "The place was nice and the overall experience was good.",
        rating: 4
    },
    {
        comment: "Had a wonderful experience. Great location and very comfortable stay.",
        rating: 5
    }
];

const initDB = async ()=>{
    await Review.deleteMany({});
    await Listing.deleteMany({});
    const listings = await Listing.insertMany(initData.data);
    for(let listing of listings){
        const reviews = await Review.insertMany(reviewData);
        listing.reviews = reviews.map(review => review._id);
        await listing.save();
    }
    console.log("data initialized");
};

main()
    .then(initDB)
    .catch(err=>{
        console.log(err);
    });