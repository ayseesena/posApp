const Bill =require("../models/Bill.js");
const express = require("express");
const router = express.Router();

// EXPRESS İÇİNDEki router özelliğini çağırdık. router içinde HTTB yazılacak.

router.get("/get-all", async(req,res)=>{
    try{
        const bills = await Bill.find();
        res.status(200).json(bills);
    }catch(error){
        res.status(500).json(error);    }
})
// find ile bütün verileri çekiyoruz
// yeni bir categori oluşturma
router.post("/add-bill", async(req, res)=>{   
try{
const newBill= new Bill   (req.body);
await newBill.save();
res.status(200).json("yeni categori oluştu.");
}catch(error){
    res.status(500).json(error);}
});

module.exports = router;
// veri oluşturması yapıtoruz. post ile
// category kısmına bodyden yeni bir category alınıyor ve newBills değişkineni
// await newBills.save(); veri tabanına kaydını gerçekleştiridik
