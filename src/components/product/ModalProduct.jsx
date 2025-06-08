import React from "react";
import { useForm } from "react-hook-form";
import { crearProducto } from '../../services/ProductsService'
import toast from 'react-hot-toast';

function ModalProduct({ open, close }) {
    const { register, handleSubmit } = useForm();

    if (!open) return null;

    const crearProductos = (data) => {

        crearProducto(data)
            .then(({ data }) => {
                console.log(data)

                toast.success('Producto Creado', { duration: 3000 })
            })
            .catch(() => console.error)


        console.log(data);
        // window.location.reload(); // si quieres recargar, descomenta
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
                <h1 className="mb-4 text-xl font-bold">Crear Producto</h1>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit(crearProductos)}>
                    <div>
                        <label className="text-[12px]">Nombre del Producto</label>
                        <input
                            type="text"
                            className="w-full rounded-md p-2 focus:border-[#00CC00] outline-none ring-2 ring-[#00CC00]"
                            placeholder="Nombre del producto"
                            {...register("producto")}
                        />
                    </div>
                    <div>
                        <label className="text-[12px]">Precio</label>
                        <input
                            type="number"
                            className="w-full rounded-md p-2 focus:border-[#00CC00] outline-none ring-2 ring-[#00CC00]"
                            placeholder="Precio"
                            {...register("precio")}
                        />
                    </div>
                    <div>
                        <label className="text-[12px]">Cantidad</label>
                        <input
                            type="number"
                            className="w-full rounded-md p-2 focus:border-[#00CC00] outline-none ring-2 ring-[#00CC00]"
                            placeholder="Cantidad"
                            {...register("stock")}
                        />
                    </div>

                    <div className="flex justify-end mt-4 space-x-2">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#00CC00] text-white rounded hover:bg-blue-700"
                        >
                            Crear Producto
                        </button>
                        <button
                            type="button"
                            onClick={close}
                            className="px-4 py-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalProduct;
