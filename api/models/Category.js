const mongoose = require("mongoose");

const CategorySchema =mongoose.Schema(
    {
        title:{ type:String, require:true},
    },
    {timestamps:true}
);

const Category= mongoose.model("categories", CategorySchema );

module.exports= Category;


{/*  sayfanın şamasını oluşturuyoruz.
ilk yapmamız gereken mongooose yüklemiştik onu çağırdık
mongoose.Schema özelliklerini CategorySchema aktardık
categorinin için de ne bulunuyorsa onu yazıyoruz
  title olduğu için onu yazdık type strin olsuğu için onu yazıyoruz. ve zorunlu kıldık
timestamps:true ne zaman kurduğunu öğrenmek için yapıyoruz

veri tanında categories adında onun içinde olan CategorySchema bunu alıcam yani title ve 
 timestamps bunu daha sonra dışa aktardık.*/}