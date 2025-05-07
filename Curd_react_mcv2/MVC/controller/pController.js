const proModel=require('../model/model.js');
const getPro=async(req,resp)=>{
    try{
        const result=await proModel.find();
        resp.json(result);
    }catch(error){
        console.log(error);
    }
}
const addPro=async(req,resp)=>{
    try{
        const data=new proModel({
            Id:req.body.Id,
            Product_name:req.body.Product_name,
            Price:req.body.Price,
            Quantity:req.body.Quantity
        })
        const result=await data.save();
        resp.json(result);
    }catch(error){
        console.log(error);
    }
}
const deletePro=async(req,resp)=>{
    try{
        const result=await proModel.deleteOne({
            Id:req.body.Id,
            Product_name:req.body.Product_name,
            Price:req.body.Price,
            Quantity:req.body.Quantity
        })
        console.log(result);
        resp.json(result);
    }catch(error){
        console.log(error);
    }
    
}

const putPro=async(req,resp)=>{
    try{
        const result= await proModel.findByIdAndUpdate(req.params.Id,req.body,{new:true})
        console.log(result);
        resp.json(result);
    }catch(error){
        console.log(error);
    }

}


module.exports={getPro,addPro,putPro,deletePro};
