import { Form, Input, Modal, Select, Button, Card,message } from "antd";
import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "../../redux/cartSlice";



const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate= useNavigate();


  const onFinish = async (values) => {
    try {
      const res = await fetch(process.env.REACT_APP_SERVER_URL+"/api/bills/add-bill", {
        method: "POST",
        body: JSON.stringify({
          ...values,
          subTotal: cart.total,
          tax: ((cart.total * cart.tax) / 100).toFixed(2),
          totalAmount: (cart.total + (cart.total * cart.tax) / 100).toFixed(2),
          cartItems: cart.cartItems,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      if (res.status === 200) {
        message.success("Fatura başarıyla oluşturuldu.");
        dispatch(reset());
        navigate("/Bill");
      }
    } catch (error) {
      message.danger("Bir şeyler yanlış gitti.");
      console.log(error);
    }
  };
  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout={"vertical"} onFinish={onFinish}>
       
        <Form.Item 
        label="Müşteri Adı" 
        name={"customerName"}
        rules={[{ required: true , message: "zorunlu alan",},]}
        >
          <Input placeholder="bir müşteri adı giriniz"></Input>
        </Form.Item>

        <Form.Item 
        label="Tel No" 
        rules={[{ required: true , message: "zorunlu alan",},]}
        name={"customerPhoneNumber"} >
          <Input placeholder="bir telefon numarası giriniz" maxLength={11}></Input>
        </Form.Item>
        
        <Form.Item 
        label="Ödeme Yöntemi" 
             rules={[{ required: true , message: "zorunlu alan",},]}
             name={"paymentMode"}>
          <Select placeholder="bir ödeme yöntemi seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Kart">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>

        <Card>
          <div className="flex justify-between">
            <span>Ara toplam</span>
            <span> {(cart.total). toFixed(2)}₺</span>
          </div>
          <div className="flex justify-between my-2">
            <span>KDV  %{cart.tax}</span>
            <span className="text-red-600">+{(cart.total * cart.tax)/100} ₺</span>
          </div>
          <div className="flex justify-between">
            <b className="t">Toplam</b>
            <b className="">{(cart.total+(cart.total * cart.tax)/100).toFixed(2)} ₺</b>
          </div>
<div className="flex justify-end">
          <Button
            className="mt-2 "
            type="primary"
            size="large"
            onClick={() => setIsModalOpen(true)}
            htmlType="submit"
            disabled= {cart.cartItems.length === 0}
          >
            Sipariş Oluştur
          </Button>
          </div>
        </Card>
      </Form>
    </Modal>
  );
};

export default CreateBill;
