import { Table, Card, Button } from "antd";
import Header from "../Components/header/Header";
import { useEffect, useState } from "react";
import PrintBill from "../Components/bill/PrintBill";

const Bill = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      title: " Oluşturma Tarihi test",
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
      },
  ];

  return (
    <>
      <Header />
      
      <div className="px-6">
      <h1 className="text-4xl text-center font-bold pb-5">Faturalar</h1>
        <Table
          dataSource={billItems}
          columns={columns}
          bordered
          pagination={false}
        />
        
      </div>
      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {/* biz burada burdaki değerleri aldık componentine gönderdik  */}
    </>
  );
};

export default Bill;
