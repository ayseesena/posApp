import { Button, message } from "antd";
import{ClearOutlined, PlusCircleOutlined,MinusCircleOutlined} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//useDispatch ile reducers içindekileri kullanıyoruz. bunu muhakkak import etmemiz gerekiyor. deletecart kullanmak için
import { deleteCart,increase ,decrease, reset} from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";





const CartTotals = () => {
    const cart = useSelector((state)=> state.cart)
    const dispatch = useDispatch();
    const navigate= useNavigate();

  return (
    <div className="cart h-full max-h-[calc(100vh-90px)] flex flex-col">
<h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide"> Sepetteki Ürünler</h2>
   <ul className="cart-items px-2 flex flex-col gap-y-3  py-2 overflow-y-auto">
    {cart.cartItems.length > 0 
    ?   cart.cartItems.map((item)=> (
        <li className="cart-item flex justify-between" key={item._id}> 
        <div className="flex items-center">
           <img src={item.img}
           alt="" className="w-16 h-16 object-cover pt-2 cursor-pointer"  onClick={()=> {dispatch(deleteCart(item)); message.success("Ürün Silindi:(")} } />
           <div className="flex flex-col ml-2">
               <b>{item.title} </b>
               <span> {item.price} ₺ +{item.quantity} </span>
           </div>
        </div>
        <div className="flex items-center gap-x-1 ">
        <Button  type="primary" 
               size="small" 
               className=" w-full  items-center  flex justify-center !rounded-full "
               icon={<PlusCircleOutlined/>} onClick={()=> dispatch(increase(item))}></Button>
               <span className="font-bold " >{item.quantity}  </span>
   
               <Button  type="primary" 
               size="small" 
               className=" w-full  items-center  flex justify-center !rounded-full "
               icon={<MinusCircleOutlined/>} onClick={()=> {
                if (item.quantity === 1){
                    if(window.confirm("Ürün Silinecek Emin Misiniz?")){
                        dispatch(decrease(item))
                        message.success("Ürün Silindi:(")
                    }
                }
                if (item.quantity >1){
                    dispatch(decrease(item));
                }
               }} ></Button>
              
        </div>
       </li>
    )).reverse()
    :"Sepette Ürün Yok.."}

   
   
   </ul>
   <div className="cart-totals   mt-auto">
    <div className="border-t border-b">
        <div className="flex justify-between p-2">
            <b> Ara Toplam </b>
            <span>{(cart.total). toFixed(2)}</span>
        </div>
        <div className="flex justify-between p-2">
            <b>KDV%{cart.tax} </b>
            <span className="text-red-700"> +  {(cart.total * cart.tax)/100}
             ₺ </span>

           

        </div>
    </div>

    <div className=" border-b">
        <div className="flex justify-between p-2">
            <b className="text-lg text-green-500">Genel Toplam</b>
            <span className="text-xl">{(cart.total+(cart.total * cart.tax)/100).toFixed(2)} ₺</span>
           
        </div>
        
    </div>
    <div className=" flex flex-col py-4 px-2">
            <Button  
            type="primary" 
            size="large" 
            disabled= {cart.cartItems.length === 0 } 
            onClick={()=> navigate("/cart")}
            className=" w-full"
            >Sipariş oluştur</Button>
            <Button  type="primary" 
            size="large" 
            disabled= {cart.cartItems.length === 0 }
            className=" w-full mt-2 items-center  flex justify-center "
            icon={<ClearOutlined />} danger onClick={()=> {
                if(window.confirm("Emin Misiniz?")){
                    dispatch(reset())
                    message.success("Sepet Temizlendi :'(")
                }

            }}>Temizle</Button>
        </div>
   </div>
    </div>
  )
}

export default CartTotals