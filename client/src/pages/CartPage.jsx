<<<<<<< HEAD
import { Table, Card, Button,message, Popconfirm } from "antd";
import{ PlusCircleOutlined,MinusCircleOutlined} from "@ant-design/icons";

import Header from "../Components/header/Header";
import { useState } from "react";
import CreateBill from "../Components/cart/CreateBill";
import { useDispatch, useSelector } from "react-redux";
import { increase,decrease,deleteCart } from "../redux/cartSlice";


const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const columns = [
    {
      title: "Ürün Görseli",
      dataIndex: "img",
      key: "img",
      width: "125px",
      render: (text)=>{
        return (<img src= {text} alt="" className="w-full h-20 object-cover" /> )
      }
    },
    {
      title: "Ürün Adı",
      dataIndex: "title",
      key: "title",
      
    
    },
    {
      title: "Kategori",
      dataIndex: "category",
      key: "category",
      
    
    },

    {
      title: "Ürün Fiyatı",
      dataIndex: "price",
      key: "price",
      render: (text)=>{
        return <span> {text.toFixed(2)}₺  </span>
      }
    },
    {
      title: "Ürün Adeti",
      dataIndex: "quantity",
      key: "quantity",
      render: (text,record)=>{
        return (
          <div className="flex items-center gap-x-1 ">
        <Button  type="primary" 
               size="small" 
               className=" w-full  items-center  flex justify-center !rounded-full "
               icon={<PlusCircleOutlined/>} onClick={()=> dispatch(increase(record))}></Button>
               <span className="font-bold " >{record.quantity}  </span>
   
               <Button  type="primary" 
               size="small" 
               className=" w-full  items-center  flex justify-center !rounded-full "
               icon={<MinusCircleOutlined/>} onClick={()=> {
                if (record.quantity === 1){
                    if(window.confirm("Ürün Silinecek Emin Misiniz?")){
                        dispatch(decrease(record))
                        message.success("Ürün Silindi:(")
                    }
                }
                if (record.quantity >1){
                    dispatch(decrease(record));
                }
               }} ></Button>
              
        </div>
        )
      }
      
    },
    {
      title: "Ürün Fiyatı",
     
      render: (text,record)=>{
        return <span> {(record.quantity * record.price).toFixed(2)}₺  </span>
      }
    },

    {
      title: "Actions",
     
      render: (_,record)=>{
        return (
          <Popconfirm
          title= "Silmek için emin misiniz?" 
          onConfirm={()=> {dispatch(deleteCart(record)); message.success("Ürün Silindi:(")} }>
            <Button type="link" danger
        >Sil</Button>
          </Popconfirm>
        )
      }
    },
   
  ];

  
=======
import { Table, Card, Button } from "antd";
import Header from "../Components/header/Header";
import { useState } from "react";
import CreateBill from "../Components/cart/CreateBill";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
>>>>>>> fa0e25031 (first commit)

  return (
    <>
      <Header />
      <div className="px-6">
        <Table
<<<<<<< HEAD
          dataSource={cart.cartItems}
          columns={columns}
          bordered
          pagination={false}
          scroll={{
            x:1200,
            y:300,
          } }
          />
=======
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
>>>>>>> fa0e25031 (first commit)
        <div className="cart-total flex justify-end">
          <Card className="w-72 my-4">
            <div className="flex justify-between">
              <span>Ara toplam</span>
<<<<<<< HEAD
              <span>{(cart.total). toFixed(2)} ₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV  %{cart.tax}</span>
              <span className="text-red-600">+{(cart.total * cart.tax)/100} ₺</span>
            </div>
            <div className="flex justify-between">
              <b className="t">Toplam</b>
              <b className="">{(cart.total+(cart.total * cart.tax)/100).toFixed(2)} ₺</b>
=======
              <span>125 ₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam %8</span>
              <span className="text-red-600">+3.35 ₺</span>
            </div>
            <div className="flex justify-between">
              <b className="t">Toplam</b>
              <b className="">125 ₺</b>
>>>>>>> fa0e25031 (first commit)
            </div>
            <Button
              className="mt-2 w-full "
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
<<<<<<< HEAD
              disabled= {cart.cartItems.length === 0}
=======
>>>>>>> fa0e25031 (first commit)
            >
              Sipariş Oluştur
            </Button>
          </Card>
        </div>
      </div>
<<<<<<< HEAD
      
=======
>>>>>>> fa0e25031 (first commit)
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {/* biz burada burdaki değerleri aldık componentine gönderdik  */}
    </>
  );
};

export default CartPage;
