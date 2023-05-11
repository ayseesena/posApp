const Products =require("../models/Product.js")
const express = require("express");
const router = express.Router();

// EXPRESS İÇİNDEki router özelliğini çağırdık. router içinde HTTB yazılacak.

router.get("/get-all", async(req,res)=>{
    try{
        const products = await Products.find();
        res.status(200).json(products);
    }catch(error){
console.log(error)
    }
})
// find ile bütün verileri çekiyoruz
// yeni bir categori oluşturma
router.post("/add-products", async(req, res)=>{   
try{
const newProducts= new Products(req.body);
await newProducts.save();
res.status(200).json("yeni categori oluştu.");
}catch(error){
    res.status(400).json(error)
}
});
// update güncelleme işlemi
router.put("/update-products", async(req,res)=>{
    try{
        await Products.findOneAndUpdate({_id: req.body.productId},
             req.body);
        res.status(200).json("yeni günceleme oluştu.");
    }catch(error){
        res.status(500).json(error);
    }
})
// delete silme işlemi
router.delete("/delete-products", async(req,res)=>{
    try{
        await Products.findByIdAndDelete({_id: req.body.productId},);
        res.status(200).json("silme işlemi gerçekleşti.");
    }catch(error){
        res.status(500).json(error);
    }
})

module.exports = router;
// veri oluşturması yapıtoruz. post ile
// category kısmına bodyden yeni bir category alınıyor ve newProducts değişkineni
// await newProducts.save(); veri tabanına kaydını gerçekleştiridik
