import React, { useState, useEffect, } from "react";
import { Link } from "react-router-dom";
import TablaProducts from "../../components/TablaProducts";
import { obtenerProducts } from "../../services/ProductsService";
import ModalProduct from "../../components/ModalProduct";

function Productos() {

  const [activeTab, setActiveTab] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [products, setProducts] = useState([])
  const [inputSearch, setInputSearch] = useState('')

  useEffect(() => {

    obtenerProducts()
      .then(({ data }) => {
        setProducts(data)
      })
      .catch(() => console.log)
  }, [])


  const cambiarTab = (pestaña) => {

    setActiveTab(pestaña)
  }

  const onInputSearch = ({target}) => {

    
    setInputSearch(target.value)
  }
  
  const onSubmit = () => {

  }


  return (
    <>
      <div className="flex justify-between px-4 py-6 mx-auto mb-8 bg-white shadow-sm rounded-2xl max-w-7xl sm:px-6 lg:px-8">
        <h1 class="text-3xl  font-bold tracking-tight text-gray-900">
          Productos
        </h1>
        <button onClick={() => setOpenModal(true)} className="w-39 bg-green-500 p-3 text-center text-[15px] rounded-lg hover:bg-[#00CC00] cursor-pointer text-white">
          Crear Producto
        </button>
      </div>
      <form onSubmit={onSubmit}>
        <input className="w-full focus:border-[#00CC00] outline-none ring-1 ring-[#00CC00] bg-[#F0F2F4] p-3 rounded-md" 
        placeholder="Buscar Productos" 
        value={inputSearch}
        onChange={onInputSearch}
        />
      </form>
      <div class="mt-4 bg-white shadow-sm mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">


        <div className="mb-4 text-sm font-medium text-center text-green-500 border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <a href="#" onClick={() => cambiarTab(0)} className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg  hover:border-gray-300  ${activeTab === 0 ? "dark:text-green-500 dark:border-green-500" : ''}  `}>Todos</a>
            </li>
            <li className="me-2">
              <a href="#" onClick={() => cambiarTab(1)} className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg  hover:border-gray-300  ${activeTab === 1 ? "dark:text-green-500 dark:border-green-500" : ''}  `} aria-current="page">Activos</a>
            </li>
            <li className="me-2">
              <a href="#" onClick={() => cambiarTab(2)} className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg  hover:border-gray-300  ${activeTab === 2 ? "dark:text-green-500 dark:border-green-500" : ''}  `}>Inactivos</a>
            </li>

          </ul>
          {
            activeTab === 0 && <TablaProducts products={products} title="Todos los productos" /> ||
            activeTab === 1 && <TablaProducts products={products} title="Productos activos" /> ||
            activeTab === 2 && <TablaProducts products={products} title="Productos Inactivos" />
          }





        </div>

        <ModalProduct open={openModal} close={() => setOpenModal(false)} />


      </div>
    </>
  );
}

export default Productos;
