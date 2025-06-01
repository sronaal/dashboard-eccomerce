import React from "react";

function ModalEditProduct({ open, close, _id, producto, stock, precio, estado }) {



    if (!open) return null;

    const editarProducto = () => {





        window.location.reload()
    }

    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
                <h1 className="mb-6 text-xl font-bold">Editar Producto</h1>

                <div className="text-black/65">
                    <form className='flex flex-col gap-5'>
                        <div>
                            <label className='text-[12px]'>Nombre del Producto</label>
                            <input value={producto} type="text" className='w-full   rounded-md p-2 focus:border-[#00CC00] outline-none ring-2 ring-[#00CC00]' placeholder='Nombre del producto' />
                        </div>
                        <div >
                            <label className='text-[12px]'>Precio</label>
                            <input value={precio} type="number" 
                            className='w-full   rounded-md p-2 focus:border-[#00CC00] outline-none ring-2 ring-[#00CC00]' placeholder='Precio' />
                        </div>

                        <div >
                            <label className='text-[12px]'>Cantidad</label>
                            <input value={stock} type="number" 
                            className='w-full   rounded-md p-2 focus:border-[#00CC00] outline-none ring-2 ring-[#00CC00]' placeholder='Cantidad' />
                        </div>

                        <div className="flex flex-col">
                            <label>Estado Producto:</label>
                            <select className="p-2 border-2  rounded-md border-[#00CC00]">
                                <option>Activo</option>
                                <option>Inactivo</option>|
                            </select>
                        </div>
                    </form>
                </div>
                <div className="flex justify-end mt-4 space-x-2">
                    <button
                        type="button"
                        className="px-4 py-2 bg-[#00CC00] text-white rounded hover:bg-blue-700"
                        onClick={editarProducto}
                    >
                        Editar Producto
                    </button>
                    <button
                        type="button"
                        onClick={close}
                        className="px-4 py-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalEditProduct;
