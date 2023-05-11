import { Button, Checkbox, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { Carousel } from 'antd';    
import AuthCarousel from "../../Components/auth/AuthCarousel";


const Login = () => {
  return (
    <div className="h-screen">
       <div className="flex justify-between h-full"> 
       <div className="xl:px-20 px-10  flex flex-col w-full h-full items-center justify-center relative">
         <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
         <Form layout="vertical" className="w-80">
            <Form.Item label="Kullanıcı Adı" name={"username"} 
            rules={[
                {
                    required:true,
                    message:"Zorunlu Alan"
                }
            ]} >
             {/*  bu kısım ınputların zorunlu olduğunu yapıyoruz. rules ile özellik kattık.  */}
              <Input/>  
            </Form.Item>

          

            <Form.Item label="Şifre" name={"password"} 
            rules={[
                {
                    required:true,
                    message:"Zorunlu Alan"
                }
            ]}>
             {/*  bu kısım ınputların zorunlu olduğunu yapıyoruz. rules ile özellik kattık.  */}
              <Input.Password/>  
            </Form.Item>

            <Form.Item>
                <div className="flex justify-betwen">
                <Link className="pb-1 pr-14">Forgor passaword?</Link>
                    <Checkbox>Remember me</Checkbox>
                    
                </div>
            </Form.Item>
           

            <Form.Item>
                <Button 
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
                >Kayıt ol</Button> 
            
            </Form.Item>
         </Form>
         <div className="flex justify-center absolute left-0 bottom-10 w-full
         ">
            Henüz bir hesabınız yok mu?&nbsp; <Link to={"/register"} className="text-blue-600">Şimdi Kaydol</Link>
         </div>
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
           <div className="w-full h-full flex items-center">
           <div className="w-full">
            <Carousel className="!h-full px-6" autoplay>
            <AuthCarousel
                  img="/images/responsive.svg"
                  title="Responsive"
                  desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                />
               <AuthCarousel
                  img="/images/statistic.svg"
                  title="İstatistikler"
                  desc="Geniş Tutulan İstatistikler"
                />
                <AuthCarousel
                  img="/images/customer.svg"
                  title="Müşteri Memnuniyeti"
                  desc="Deneyim Sonunda Üründen Memnun Müşteriler"
                />
                <AuthCarousel
                  img="/images/admin.svg"
                  title="Yönetici Paneli"
                  desc="Tek Yerden Yönetim"
                /> 
     
    </Carousel>
  
            </div>
           </div>
        </div>
       </div>
    </div>
  )
}

export default Login