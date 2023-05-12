import { Spin } from "antd";
import { useEffect, useState } from "react";
import CartTotals from "../Components/cart/CartTotals";
import Categoris from "../Components/categories/Categoris";
import Header from "../Components/header/Header";
import Product from "../Components/product/Product";

const HomePage = () => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    const getCategoris= async()=>{
      try{
        const res =await fetch(process.env.REACT_APP_SERVER_URL+"/api/categories/get-all");
        const data =await res.json();
        data &&
           setCategories(
             data.map((item) => {
               return { ...item, value: item.title };
             })
           );
        

      }catch (error) {
        console.log(error);
      }
    };
    getCategoris();
  },[] )

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(process.env.REACT_APP_SERVER_URL+"/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);
  return (
    <>
      <Header setSearch={setSearch} />
      {products && categories ? (
      <div className="home  px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24 ">
        <div class="categories  overflow-auto  max-h-[calc(100vh-112px)]  md:pb-10 ">
          <Categoris categories={categories} setCategories={setCategories} setFiltered={setFiltered} products={products} />
        </div>
        <div className="product flex-[8] max-h-[calc(100vh-112px)] overflow-y-auto pb-10 ">
          <Product categories={categories} filtered={filtered} products={products} setProducts={setProducts} search={search} />
        </div>
        <div className=" cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
      ) : (
        <Spin
          size="large"
          className="flex justify-center ml-10"
        />
      )}
    </>
  );
};

export default HomePage;
