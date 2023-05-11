import { Badge, Input } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((state) => state.cart);

  console.log(cart.cartItems.length);
  return (
    <div className="border-b mb-6 ">
      <header className="header py-6 px-6 flex justify-between items-center gap-10 ">
        <div className="logo">
          <a href="/">
            <h2 className="text-3xl font-bold md:text-4xl">LOGO</h2>
          </a>
        </div>
        <div className="header-search flex-1">
          <Input
            className="rounded-full max-w-[800px] flex justify-center"
            size="large"
            placeholder="arama.. "
            prefix={<SearchOutlined />}
          />
        </div>

        <div
          className="menu-links flex justify-between items-center gap-8  md:static fixed z-50 bottom-0  md:w-auto w-screen
          md:bg-transparent  bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1 "
        >
          <Link
            to={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff]  transition-all "
          >
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className=" md:text-xs text-[12px]">Anasayfa</span>
          </Link>

          <Badge count={cart.cartItems.length} offset={[0, 0]} className="md:flex hidden">
            <Link
              to={"/cart"}
              className="menu-link flex flex-col hover:text-[#40a9ff] transition-all "
            >
              <ShoppingCartOutlined className="md:text-2xl text-xl" />
              <span className=" md:text-xs text-[12px]">Sepet</span>
            </Link>
          </Badge>

          <Link
            to={"/bill"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all "
          >
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className=" md:text-xs text-[12px]">Fatura</span>
          </Link>

          <Link
            to={"/customers"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all "
          >
            <UserOutlined className="md:text-2xl text-xl" />
            <span className=" md:text-xs text-[12px]">Müşteriler</span>
          </Link>

          <Link
            to={"/statislic"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all "
          >
            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className=" md:text-xs text-[12px]">İstatislik</span>
          </Link>

          <Link
            to={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all "
          >
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className=" md:text-xs text-[12px]">Çıkış</span>
          </Link>
        </div>
        <Badge count={cart.cartItems.length} offset={[0, 0]} className="md:hidden flex">
          <Link
            to={"/cart"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all "
          >
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
