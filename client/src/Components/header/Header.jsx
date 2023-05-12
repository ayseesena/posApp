import { Badge, Input , message} from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css";
import resim1 from "../img1/logo.png"

const Header = ({ setSearch }) =>{
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();
   const logOut = () => {
     if (window.confirm("Çıkış yapmak istediğinize emin misiniz?")) {
       localStorage.removeItem("posUser");
       navigate("/login");
       message.success("Çıkış işlemi başarılı.");
     }
   };

  const { pathname } = useLocation();
  console.log(cart.cartItems.length);
  return (
    <div className="border-b mb-6 ">
      <header className="header py-3 px-6 flex justify-between items-center gap-10 ">
        <div className="logo w-20 ml-4">
          <a href="/">
           <img src= {resim1} ></img>
          </a>
        </div>
        <div className="header-search flex-1 justify-center"
        
         onClick={() => {
           pathname !== "/" && navigate("/");
         }}
        >
          <Input
            className="rounded-full max-w-[800px] flex justify-center"
            size="large"
            placeholder="arama.. "
            prefix={<SearchOutlined />}
            onChange={(e)=> setSearch(e.target.value.toLowerCase())}
          
          />
        </div>

        <div
          className="menu-links  "
        >
         <Link to={"/"} className={`menu-link ${
             pathname === "/" && "active"
           }`}>

            <HomeOutlined className="md:text-2xl text-xl" />
            <span className=" md:text-xs text-[12px]">Anasayfa</span>
          </Link>

          <Badge count={cart.cartItems.length} offset={[0, 0]} className="md:flex hidden">
          
           <Link to={"/cart"} className={`menu-link ${
               pathname === "/cart" && "active"
             }`}>

              <ShoppingCartOutlined className="md:text-2xl text-xl" />
              <span className=" md:text-xs text-[12px]">Sepet</span>
            </Link>
          </Badge>

          <Link to={"/bill"} className={`menu-link ${
             pathname === "/bill" && "active"
           }`}>

            <CopyOutlined className="md:text-2xl text-xl" />
            <span className=" md:text-xs text-[12px]">Fatura</span>
          </Link>

          <Link to={"/customers"} className={`menu-link ${
             pathname === "/customers" && "active"
           }`}>

            <UserOutlined className="md:text-2xl text-xl" />
            <span className=" md:text-xs text-[12px]">Müşteriler</span>
          </Link>

           <Link to={"/StatislicPage"} className={`menu-link ${
             pathname === "/StatislicPage" && "active"
           }`}>

            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className=" md:text-xs text-[12px]">İstatislik</span>
          </Link>

          <div onClick={logOut}>
             <Link className="menu-link">
               <LogoutOutlined className="md:text-2xl text-xl" />
               <span className="md:text-xs text-[10px]">Çıkış</span>
             </Link>
           </div>
           
        </div>
        <Badge count={cart.cartItems.length} offset={[0, 0]} className="md:hidden flex">
           <Link to={"/"} className={`menu-link ${
             pathname === "/cart" && "active"
           }`}>

            <ShoppingCartOutlined className="md:text-2xl text-2xl" />
            <span className=" md:text-xs  text-[15px] ">Sepet</span>
          </Link>
        </Badge>
        {/* kuçüldüğnde üst kısımda görünmesi yaptık */}
      </header>
    </div>
  );
}

export default Header;
