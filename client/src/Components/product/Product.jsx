import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import Add from "./Add";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
>>>>>>> fa0e25031 (first commit)


const Product = ({categories} ) => {

  const [products, setProducts] = useState([]); 
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
<<<<<<< HEAD
  const navigate= useNavigate();
=======
>>>>>>> fa0e25031 (first commit)
  

  useEffect(()=>{
    const getProducts= async()=>{
      try{
        const res =await fetch("http://localhost:5002/api/products/get-all");
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
    {products.map((item)=>(

      
     <ProductItem item={item} key={item._id}/>

    ))
    }
    <div className="product-item border  hover:shadow-lg cursor-pointer 
    transition-all select-none bg-purple-800 flex justify-center items-center text-white
<<<<<<< HEAD
    hover:opacity-80 min-h-[180px]:">
=======
    hover:opacity-80">
>>>>>>> fa0e25031 (first commit)
          <PlusOutlined className="text-2xl" onClick={()=> setIsAddModalOpen(true) } />
        
           </div>

           <div className="product-item border  hover:shadow-lg cursor-pointer 
    transition-all select-none bg-orange-800 flex justify-center items-center text-white
<<<<<<< HEAD
    hover:opacity-80 min-h-[180px]:" onClick={()=> navigate("/products")}>
          <EditOutlined className="text-2xl"/>
        
           </div>
           <Add setIsAddModalOpen={setIsAddModalOpen} 
           isAddModalOpen={isAddModalOpen} 
           categories={categories} 
           products={products} 
           setProducts={setProducts} />
=======
    hover:opacity-80">
          <EditOutlined className="text-2xl"/>
        
           </div>
           <Add setIsAddModalOpen={setIsAddModalOpen} isAddModalOpen={isAddModalOpen} categories={categories} products={products} setProducts={setProducts} />
>>>>>>> fa0e25031 (first commit)
</div>

    
  )
 
}

export default Product