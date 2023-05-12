const User =require("../models/User.js");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// EXPRESS İÇİNDEki router özelliğini çağırdık. router içinde HTTB yazılacak.



// register
router.post("/register", async(req, res)=>{   
try{
const {username,email,password} = req.body;
const salt = await bcrypt.genSalt(10);
const hashedPassaword = await bcrypt.hash(password,salt);
const newUser = new User({
    username,
    email,
    password:hashedPassaword,

});
await newUser.save();
res.status(200).json("yeni kişi kaydedildi");
}catch(error){
    res.status(400).json(error)
}
});

// login
router.post("/login", async(req, res)=>{   
    try{
    
    const user = await User.findOne({email:req.body.email});
    if (!user) {
      return res.status(404).send({ error: "User not found!" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(403).json("parola yanlış!");
    } else {
      res.status(200).json(user);
    }
    
    
    }catch(error){
        res.status(500).json(error);    }
    });
    // login kısmında şifre ve mail karşılaştıması yaptık doğru olduğunda sayfaya giriş yapabiliyor

module.exports = router;

// şifreyi gizli yapdık