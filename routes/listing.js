const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressErrors.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");

const validateListing = (req, res, next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>{
            return el.message;
        }).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}

//INDEX ROUTE
router.get("/", wrapAsync( async (req, res)=>{
    let allListings = await Listing.find({});
    res.render("listings/index", {allListings});
}));

//NEW ROUTE
router.get("/new", (req, res)=>{
    res.render("listings/new");
})
//CREATE ROUTE
router.post("/",validateListing, wrapAsync(async (req, res, next)=>{
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
}));

//EDIT ROUTE
router.get("/:id/edit", wrapAsync(async (req, res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing requested does not exist.")
        return res.redirect("/listings");
    }
    res.render("listings/edit", {listing});
}));
//UPDATE ROUTE
router.put("/:id",validateListing, wrapAsync(async(req, res)=>{
    const {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`)
}));

//DELETE ROUTE
router.delete("/:id", wrapAsync(async(req, res)=>{
    const {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
}));


//SHOW ROUTE
router.get("/:id", wrapAsync(async (req, res)=>{
    let {id} = req.params;
    let oneListing = await Listing.findById(id).populate("reviews");
    if(!oneListing){
        req.flash("error", "Listing requested does not exist.")
        return res.redirect("/listings");
    }
    res.render("listings/show", {oneListing});
}));

module.exports = router;