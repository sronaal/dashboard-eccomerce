import React from "react";

function ModalEditProduct({ open, close }) {

    


    if (!open) return null;

    const editarProducto = () => {





        window.location.reload()
    }

    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
                <h1 className="mb-4 text-xl font-bold">Editar Producto</h1>

                <div>
                    <form className='flex flex-col gap-5'>
                        <div>
                            <label className='text-[12px]'>Nombre del Producto</label>
                            <input type="text" className='w-full   rounded-md p-2 focus:border-[#00CC00] outline-none ring-2 ring-[#00CC00]' placeholder='Nombre del producto' />
                        </div>
                        <div >
                            <label className='text-[12px]'>Precio</label>
                            <input type="number" className='w-full   rounded-md p-2 focus:border-[#00CC00] outline-none ring-2 ring-[#00CC00]' placeholder='Precio' />
                        </div>

                        <div >
                            <label className='text-[12px]'>Cantidad</label>
                            <input type="number" className='w-full   rounded-md p-2 focus:border-[#00CC00] outline-none ring-2 ring-[#00CC00]' placeholder='Contraseña' />
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
