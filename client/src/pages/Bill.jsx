import { Table, Card, Button } from "antd";
import Header from "../Components/header/Header";
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useState } from "react";
>>>>>>> fa0e25031 (first commit)
import CreateBill from "../Components/cart/CreateBill";
import PrintBill from "../Components/bill/PrintBill";

const Bill = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
<<<<<<< HEAD
const [billItems,setBillItems] =useState()
  useEffect(()=> {
const getBills= async ()=>{
  try {
    const res =await   fetch("http://localhost:5002/api/bills/get-all");
    const data = await res.json();
    setBillItems(data);
;  } catch (error) {
    console.log(error);
  }
 
}

getBills();
  },[])

 

  const columns = [
    {
      title: "Müşteri adı",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Tel",
      dataIndex: "customerPhoneNumber",
      key: "customerPhoneNumber",
    },
    {
      title: " Oluşturma Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
       render: (text)=>{
        return <span>  {text.substring(0,10)} </span>
       }
    },
    {
        title: "Ödeme",
        dataIndex: "paymentMode",
        key: "paymentMode",
      },
      {
        title: "Toplam",
        dataIndex: "totalAmount",
        key: "totalAmount",
        render: (text)=>{
          return <span> {text}₺ </span>
        }
      },
      {
        title: "Action",
        dataIndex: "Action",
        key: "Action",
        render: (text)=>{
          return <Button type="link" danger  className="pl-0" onClick={() => setIsModalOpen(true)}>  yazdır</Button>
        }
=======

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      tel: 5350501956,
      tarih: "31.03.2023",
      ödeme: "nakit",
      toplam:"85.50₺",
      fatura: "yazdır",
    },
    {
      key: "2",
      name: "John",
      tel: 5314566232,
      tarih: "12.10.2022",
      ödeme: "nakit",
      toplam:"85.50₺",
      fatura: "yazdır",
    },
  ];

  const columns = [
    {
      title: "İsim",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tel",
      dataIndex: "tel",
      key: "tel",
    },
    {
      title: "Tarih",
      dataIndex: "tarih",
      key: "tarih",
    },
    {
        title: "ödeme",
        dataIndex: "ödeme",
        key: "ödeme",
      },
      {
        title: "Toplam",
        dataIndex: "toplam",
        key: "toplam",
      },
      {
        title: "Fatura",
        dataIndex: "fatura",
        key: "fatura",
>>>>>>> fa0e25031 (first commit)
      },
  ];

  return (
    <>
      <Header />
      
      <div className="px-6">
      <h1 className="text-4xl text-center font-bold pb-5">Faturalar</h1>
        <Table
<<<<<<< HEAD
          dataSource={billItems}
=======
          dataSource={dataSource}
>>>>>>> fa0e25031 (first commit)
          columns={columns}
          bordered
          pagination={false}
        />
<<<<<<< HEAD
        
=======
        <div className="cart-total flex justify-end">
        <Button
              className="mt-2  "
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
            >
              Sipariş Oluştur
            </Button>
        </div>
>>>>>>> fa0e25031 (first commit)
      </div>
      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {/* biz burada burdaki değerleri aldık componentine gönderdik  */}
    </>
  );
};

export default Bill;
