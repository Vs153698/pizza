const mongoose = require('mongoose')    
const Productchema = mongoose.Schema({
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
export default  mongoose.model( 'Productchema' , Productchema)