
import Header from "../Components/header/Header";
import Statistic from "../Components/statistics/Statistic";

import { useEffect, useState } from "react";
import { Area, Pie } from "@ant-design/plots";
import { Spin } from "antd";
 const Statislic = () => {
   const [data, setData] = useState([]);
   const [products, setProducts] = useState([]);
   const user =JSON.parse( localStorage.getItem("posUser"))


   useEffect(() => {
     asyncFetch();
  }, []);
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
  const asyncFetch = () => {
    fetch(process.env.REACT_APP_SERVER_URL+"/api/bills/get-all")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    xField: "customerName",
    yField: "subTotal",
    xAxis: {
      range: [0, 1],
    },
  };
  const config2 = {
    appendPadding: 10,
    data,
    angleField: "subTotal",
    colorField: "customerName",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "Toplam\nDeğer",
      },
    },
  };
  const totalAmount = () => {
    const amount = data.reduce((total, item) => item.totalAmount + total, 0);
    return `${amount.toFixed(2)}₺`;
  };
  return (
    <>
      <Header />
      <h1 className="text-4xl font-bold text-center mb-6">İstatistiklerim</h1>
      {data ? (
      <div className="px-6 md:pb-0 pb-20">
     
         <div className="statistic-section">
           <h2 className="text-lg">
             Hoş geldin{" "}
             <span className="text-black font-bold text-xl">{user.username}</span>.
           </h2>
           <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
             <Statistic
              title={"Toplam Müşteri"}
              amount={data?.length}
              img={"images/user.png"}
            />
            <Statistic
              title={"Toplam Kazanç"}
              amount={totalAmount()}
              img={"images/money.png"}
            />
            <Statistic
              title={"Toplam Satış"}
              amount={data?.length}
              img={"images/sale.png"}
            />
            <Statistic
              title={"Toplam Ürün"}
              amount={products?.length}
              img={"images/product.png"}
             />
           </div>
           <div className="flex justify-between gap-10 lg:flex-row flex-col items-center">
             <div className="lg:w-1/2 lg:h-60 h8h-80">
               <Area {...config} />
             </div>
             <div className="lg:w-1/2 lg:h-60 h-72">
               <Pie {...config2} />
             </div>
           </div>
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

export default Statislic;
