import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import Add from "./Add";
import { useNavigate } from "react-router-dom";


const Product = ({ categories, filtered, products, setProducts, search }) => {

 
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const navigate= useNavigate();
  

  useEffect(()=>{
    const getProducts= async()=>{
      try{
        const res =await fetch(process.env.REACT_APP_SERVER_URL+"/api/products/get-all");
        const data =await res.json();
        setProducts(data);

      }catch (error) {
        console.log(error);
      }
    };
    getProducts();
  },[] )

  return (
    <div className="product-wrapper grid grid-cols-card gap-4  ">
    
    {filtered
         .filter((product) => product.title.toLowerCase().includes(search))
         .map((item) => (
           <ProductItem item={item} key={item._id} />
         ))}

    <div className="product-item border  hover:shadow-lg cursor-pointer 
    transition-all select-none bg-yellow-500 flex justify-center items-center text-black
    hover:opacity-80 min-h-[180px] min-w-[180px]:">
          <PlusOutlined className="text-2xl" onClick={()=> setIsAddModalOpen(true) } />
        
           </div>

           <div className="product-item border  hover:shadow-lg cursor-pointer 
    transition-all select-none bg-yellow-500 flex justify-center items-center text-black
    hover:opacity-80 min-h-[180px]   min-w-[180px]:" onClick={()=> navigate("/products")}>
          <EditOutlined className="text-2xl"/>
        
           </div>
           <Add setIsAddModalOpen={setIsAddModalOpen} 
           isAddModalOpen={isAddModalOpen} 
           categories={categories} 
           products={products} 
           setProducts={setProducts} />
</div>

    
  )
 
}

export default Product