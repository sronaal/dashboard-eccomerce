import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import ModalDeleteProduct from "./ModalDeleteProduct";
import ModalEditProduct from "./ModalEditProduct"
import { obtenerProductoId } from '../../services/ProductsService'



function RowTable({ _id, producto, stock, precio, estado }) {


    const [openEdit, setOpenEdit] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [productoFind, setProductoFind] = useState({})

    const openEditarProducto = (_id) => {

        setOpenEdit(true)

        obtenerProductoId(_id)
            .then(({ data }) => {
                setProductoFind(data)
            })
            .catch(() => console.error)
    }


    const openDeleteProducto = (_id) => {

        setOpenDelete(true)

        obtenerProductoId(_id)
            .then(({ data }) => {
                setProductoFind(data)
            })
            .catch((error) => console.log(error))
    }
    return (
        <>
            <tr className="text-gray-900 bg-white border border-gray-400">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                    {producto}

                </th>
                <td className="px-6 py-4">
                    {
                        estado === true && <span className='px-2 py-2 text-gray-100 bg-green-500 rounded-md'>Activo</span> ||
                        estado === false && <span className='px-2 py-2 text-gray-100 bg-red-500 rounded-md'>Inactivo</span>

                    }
                </td>

                <td className="px-6 py-4">$ {precio}</td>
                <td className="px-6 py-4">{stock}</td>

                <td className="flex items-center justify-center gap-4">

                    <a onClick={() => openEditarProducto(_id)} className="cursor-pointer">
                        <AiOutlineEdit className="w-6 h-6 text-blue-600  hover:text-[#067a06]" />
                    </a>
                    <a onClick={() => openDeleteProducto(_id)} className="cursor-pointer">
                        <AiOutlineDelete className="w-6 h-6 text-red-600 hover:text-[#067a06]" />
                    </a>

                </td>
            </tr>

            <ModalEditProduct open={openEdit} {...productoFind} close={() => setOpenEdit(false)} />
            <ModalDeleteProduct open={openDelete} {...productoFind} close={() => setOpenDelete(false)} />
        </>
    )
}

export default RowTable
