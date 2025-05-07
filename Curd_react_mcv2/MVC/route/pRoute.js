const express=require('express')
const product=require('../controller/pController.js');
const router=express.Router();
router.get("/",product.getPro);
router.post("/add",product.addPro);
router.delete("/delete",product.deletePro);
router.put("/update",product.putPro);

module.exports=router;