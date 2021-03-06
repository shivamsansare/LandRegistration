var mongoose = require("mongoose");
mongoose.connect("mongodb://"+process.env.IP+"/Aadhar",{useNewUrlParser:true},function(err){
    if(err) throw err;
});

var AadharSchema = new mongoose.Schema({
    UID: String,
    name:String,
    address: String,
    mobile: String,
    photo: String
});



module.exports= mongoose.model("Aadhar",AadharSchema);