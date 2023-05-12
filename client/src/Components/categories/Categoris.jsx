import  {useEffect,useState } from 'react';
import {PlusOutlined,EditOutlined } from "@ant-design/icons";
import Add from "./Add";
import Edit from "./Edit";
import "./style.css";


const Categoris = ({categories, setCategories, setFiltered, products}) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const [categoryTitle, setCategoryTitle] = useState("Tümü");

    useEffect(() => {
      if (categoryTitle === "Tümü") {
        setFiltered(products);
      } else {
        setFiltered(products.filter((item) => item.category === categoryTitle));
      }
    }, [products, setFiltered, categoryTitle]);

  return (
    <ul className='flex md:flex-col gap-4 text-lg'>
        {
            categories.map((item)=>(
                <li
                className={`category-item ${
                  item.title === categoryTitle && "!bg-black  !text-yellow-500"
                }`}
                key={item._id}
                onClick={() => setCategoryTitle(item.title)}
              >
                <span>{item.title}</span>
              </li>
            ))
        }


        <li className='category-item !bg-yellow-500 !hover:opacity-80'
        onClick={ ()=> setIsAddModalOpen(true)}>
            <PlusOutlined className="md:text-2xl"/>
        </li> 

        <li className='category-item !bg-yellow-500 !hover:opacity-80 ' 
        onClick={ ()=> setIsEditModalOpen(true)}>
            <EditOutlined className="md:text-2xl"/>
        </li> 
<Add 
isAddModalOpen={isAddModalOpen} 
setIsAddModalOpen={setIsAddModalOpen}
categories={categories}
setCategories={setCategories} />

<Edit isEditModalOpen={isEditModalOpen}
setIsEditModalOpen={setIsEditModalOpen} 
categories={categories}
setCategories={setCategories}  />
    </ul>
  )
}

export default Categoris