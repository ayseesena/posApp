import { Table, Card, Button } from "antd";
import Header from "../Components/header/Header";
import { useEffect, useState } from "react";
import PrintBill from "../Components/bill/PrintBill";

const Bill = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
const [billItems,setBillItems] =useState();
const [customer, setCustomer] = useState();
  useEffect(()=> {
const getBills= async ()=>{
  try {
    const res =await   fetch(process.env.REACT_APP_SERVER_URL+"/api/bills/get-all");
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
      title: " Oluşturma Tarihi ",
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
        title: "Actions",
        dataIndex: "action",
        key: "action",
        render: (_, record) => {
          return (
            <Button
              type="link"
              className="pl-0"
              onClick={() => {
                setIsModalOpen(true);
                setCustomer(record);
              }}
            >
              Yazdır
            </Button>
          );
        },
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
      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} customer={customer}/>
      {/* biz burada burdaki değerleri aldık componentine gönderdik  */}
    </>
  );
};

export default Bill;
