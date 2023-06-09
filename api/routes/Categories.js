const Category =require("../models/Category.js")
const express = require("express");
const router = express.Router();

// EXPRESS İÇİNDEki router özelliğini çağırdık. router içinde HTTB yazılacak.

router.get("/get-all", async(req,res)=>{
    try{
        const categories = await Category.find();
        res.status(200).json(categories);
    }catch(error){
        res.status(500).json(error);    }
})
// find ile bütün verileri çekiyoruz
// yeni bir categori oluşturma
router.post("/add-category", async(req, res)=>{   
try{
const newCategory= new Category(req.body);
await newCategory.save();
res.status(200).json("yeni categori oluştu.");
}catch(error){
    res.status(500).json(error);}
});
// update güncelleme işlemi
router.put("/update-category", async(req,res)=>{
    try{
        await Category.findOneAndUpdate({_id: req.body.categoryId},
             req.body);
        res.status(200).json("yeni günceleme oluştu.");
    }catch(error){
        res.status(500).json(error);    }
})
// delete silme işlemi
router.delete("/delete-category", async(req,res)=>{
    try{
        await Category.findByIdAndDelete({_id: req.body.categoryId},);
        res.status(200).json("silme işlemi gerçekleşti.");
    }catch(error){
        res.status(500).json(error);    }
})

module.exports = router;
// veri oluşturması yapıtoruz. post ile
// category kısmına bodyden yeni bir category alınıyor ve newCategory değişkineni
// await newCategory.save(); veri tabanına kaydını gerçekleştiridik
