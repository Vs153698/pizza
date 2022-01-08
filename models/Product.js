const mongoose = require('mongoose')    
const Productschema = mongoose.Schema({
    title : {
        type : String,
        required:true,
        maxlength:60,
    },
    desc : {
        type : String,
        required:true,
        maxlength:60,
    },
    img:{
        type : String,
        required:true,
    },
    prices:{
        type : [Number],
        required:true,
    },
    extrasOptions:{
        type : [{text:{type:String,required:true},price:{type:Number,required:true}}],
        required:true,
    },
},{timestamps:true})
// we have to use below method because next js always try to create new model when page is loaded
module.exports= mongoose.models.pizza || mongoose.model('pizza' , Productschema)