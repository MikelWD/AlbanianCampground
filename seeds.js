var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

 function seedDB(){
//     Campground.find({}, function(err, allCampgrounds){
//         if(err){
//             console.log(err);
//         } else{
//             Comment.create(
//                 {
//                     text: "This place is great, but I wish there was internet",
//                     author: "M.Lleshi"
//                 }, function(err, comment){
//                     if(err){
//                         console.log(err);
//                     } else{
//                         allCampgrounds.comments.push(comment); 
//                         allCampgrounds.save();
//                         console.log("Created new comment");
//                     }
//                 }
//             )
//         }
//     });
    console.log("SeedDB");
 }

module.exports = seedDB;