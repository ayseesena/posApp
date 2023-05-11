import { Table,} from "antd";
import Header from "../Components/header/Header";




const Customers = () => {
 

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
     
    },
  ];

  const columns = [
    {
      title: "Müşteri adı",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Telefon Numarası",
      dataIndex: "tel",
      key: "tel",
    },
    {
      title: "İşlem Tarih",
      dataIndex: "tarih",
      key: "tarih",
    },
   
      
  ];

  return (
    <>
      <Header />
     
      <div className="px-6">
      <h1 className="text-4xl text-center font-bold pb-5">Müşterilerim</h1>

        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
        <div className="cart-total flex justify-end">
       
        </div>
      </div>
     
    </>
  );
};

export default Customers;
