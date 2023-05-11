const mongooose =require("mongoose");

const ProductShema = mongooose.Schema(
    {
        title: {type: String, require:true},
        img: {type: String, require:true},
        price: {type:Number, require:true},
        category:{type:String, require:true},
    },
   
    {timestamps: true}
);

const Product =mongooose.model("products", ProductShema);

module.exports=Product;

{/*product şamasını oluşturduk. */}