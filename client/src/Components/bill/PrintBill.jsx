import {  Button, Modal } from "antd";


const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Fatura Yazdır"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      width={800}
    >
     <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto bg-white px-6">
        <article className="overflow-hidden">
          <div className="logo my-6">
            <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
          </div>
          <div className="bill-details">
            <div className="grid sm:grid-cols-4 grid-cols-3 gap-12 ">
              <div className="text-md text-slate-500 ">
                <p className="font-bold  text-slate-700">Fatura Detayı:</p>
                <p>Unwrapped</p>
                <p>Fake srteet</p>
                <p>Fatura</p>
              </div>

              <div className="text-md text-slate-500">
                <p className="font-bold  text-slate-700">Fatura :</p>
                <p>Unwrapped</p>
                <p>Frisco</p>
                <p>CA 00000</p>
              </div>

              <div className="text-md sm:block  hidden text-slate-500">
                <div>
                <p className="font-bold  text-slate-700">Şartlar:</p>
                <p>10 gün</p>
                
                </div>
                <div>
                <p className="font-bold  text-slate-700">Vade:</p>
                <p>31.03.2023</p>
                
                </div>

              </div>

              
              <div className="text-md text-slate-500">
                <div>
                <p className="font-bold  text-slate-700">Fatura Numarası:</p>
                <p>00052</p>
                
                </div>
                <div>
                <p className="font-bold  text-slate-700">Veriliş tarihi:</p>
                <p>31.03.2023</p>
                
                </div>

              </div>
            </div>
          </div>
         <div className="bill-table-area">
          <table className="min-w-full divide-y divide-slate-500 overflow-hidden mt-8">
            <thead>
              <tr className="border-b border-slate-200">
                <th scope="col" className="py-3.5  text-left text-sm font-normal
                 text-slate-700
                 md:pl-0 sm:table-cell hidden">Görsel</th> 
              {/* burada css ile görsel kısmın küçültüğünde kaybolmasını sağladık*/}
             
              <th scope="col" className="py-3.5  text-left text-sm font-normal
               text-slate-700
                md:pl-0  sm:table-cell hidden">Başlık</th> 
                 <th colSpan={4} scope="col" className="py-3.5  text-left 
                 text-sm font-normal
                text-slate-700
                 md:pl-0  sm:hidden">Başlık</th> 
               
                <th scope="col" className="py-3.5   text-sm 
                font-normal text-slate-700
               md:pl-0 sm:table-cell hidden">Fiyat</th> 
                
                <th scope="col" className="py-3.5  text-center text-sm font-normal text-slate-700
                sm:pl-6 md:pl-0 sm:table-cell hidden">Adet</th> 
                
                <th scope="col" className="py-3.5 text-end text-sm 
                font-normal text-slate-700
                md:pl-0 ">Toplam</th> 

              </tr>
            </thead>
            <tbody >
              <tr className="border-b border-slate-200">
                <td className="py-4 sm:table-cell hidden">
                  <img className="w-20 object-cover sm:table-cell hidden" src="data:image/jpeg;base64,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" 
                  alt="" />
                </td>
                <td className="py-4 sm:table-cell hidden">
                      <div className="flex flex-col">
                        <span className="font-medium">ÇİLEK</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 5₺
                        </span>
                      </div>
                    </td>
                    <td className="py-4 sm:hidden" colSpan={4}>
                      <div className="flex flex-col">
                        <span className="font-medium">Çilek</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 5₺
                        </span>
                      </div>
                    </td>

               

                <td className="py-4 text-center sm:table-cell hidden">
                      <span>5₺</span>
                    </td>

                <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                      <span>1</span>
                    </td>

                <td className="py-4 text-end ">
                  <span className="font-mdium">18₺</span>
                </td>
              </tr>
            </tbody>


            <tfoot >
              <tr >
              <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">
                        Ara Toplam
                      </span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">Ara Toplam</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">61₺</span>
                    </th>
                
              
              </tr>
              <tr >
              <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">KDV</span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">KDV</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-red-600">+4.88₺</span>
                    </th>
                
              
              </tr>
             
              <tr >
              <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">Genel Toplam</span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">Genel Toplam</p>
                    </th>
                
                
                <th className="text-right pt-6 "  scope="row">
                <span className="font-normal" >22.60₺</span>
                </th>
                
              
              </tr>
            </tfoot>
          </table>

          <div className="py-9"> 
          <div className="border-t pt-9 border-slate-200 pb-4">
            <p className="text-sm  font-light text-slate-700">    Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                    Ödenmesi Yasası 0000'e göre, serbest çalışanların bu süreden
                    sonra borçların ödenmemesi durumunda 00.00 gecikme ücreti
                    talep etme hakkına sahip olduklarını ve bu noktada bu ücrete
                    ek olarak yeni bir fatura sunulacağını lütfen unutmayın.
                    Revize faturanın 14 gün içinde ödenmemesi durumunda, vadesi
                    geçmiş hesaba ek faiz ve %8 yasal oran artı %0,5 Bank of
                    England tabanı olmak üzere toplam %8,5 uygulanacaktır.
                    Taraflar Kanun hükümleri dışında sözleşme yapamazlar.</p>
          </div>
          </div>
          </div> 
        </article>
      </div>
     </section>
     <div className="flex justify-end mt-4">
      <Button type="primary">Yazdır</Button>
     </div>
    </Modal>
  );
};

export default PrintBill;
