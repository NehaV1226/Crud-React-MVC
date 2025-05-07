const mongoose=require('mongoose');
const pSchema=new mongoose.Schema({
    Id:{
        type:Number,
        required:true
    },
    Product_name:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    }
})

const proModel=mongoose.model("react",pSchema);
module.exports=proModel;