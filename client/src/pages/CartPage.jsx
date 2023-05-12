import { Table, Card, Button,message, Popconfirm, Input,Space } from "antd";
import{ PlusCircleOutlined,MinusCircleOutlined} from "@ant-design/icons";

import Header from "../Components/header/Header";
import {useRef, useState } from "react";
import CreateBill from "../Components/cart/CreateBill";
import { useDispatch, useSelector } from "react-redux";
import { increase,decrease,deleteCart } from "../redux/cartSlice";
import Highlighter from "react-highlight-words";
 import { SearchOutlined } from "@ant-design/icons";


const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });


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
      ...getColumnSearchProps("title")
    
    },
    {
      title: "Kategori",
      dataIndex: "category",
      key: "category",
      ...getColumnSearchProps("category")
    
    },

    {
      title: "Ürün Fiyatı",
      dataIndex: "price",
      key: "price",
      render: (text)=>{
        return <span> {text.toFixed(2)}₺  </span>
      },
      sorter: (a, b) => a.price - b.price,
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

  

  return (
    <>
      <Header />
      <div className="px-6">
        <Table
          dataSource={cart.cartItems}
          columns={columns}
          bordered
          pagination={false}
          scroll={{
            x:1200,
            y:300,
          } }
          />
        <div className="cart-total flex justify-end">
          <Card className="w-72 my-4">
            <div className="flex justify-between">
              <span>Ara toplam</span>
              <span>{(cart.total). toFixed(2)} ₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV  %{cart.tax}</span>
              <span className="text-red-600">+{(cart.total * cart.tax)/100} ₺</span>
            </div>
            <div className="flex justify-between">
              <b className="t">Toplam</b>
              <b className="">{(cart.total+(cart.total * cart.tax)/100).toFixed(2)} ₺</b>
            </div>
            <Button
              className="mt-2 w-full "
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}            >
              Sipariş Oluştur
            </Button>
          </Card>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {/* biz burada burdaki değerleri aldık componentine gönderdik  */}
    </>
  );
};

export default CartPage;
