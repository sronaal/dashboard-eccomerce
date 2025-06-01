import React from "react";

function ModalDeleteProduct({ open, close }) {

    


    if (!open) return null;
    
    const eliminarProducto = () => {





        window.location.reload()
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
                <h1 className="mb-10 text-xl font-bold">Eliminar Producto</h1>

               
                <div className="flex justify-end mt-4 space-x-2">
                    <button
                        type="button"
                        className="px-4 py-2 text-white bg-red-600 rounded hover:bg-blue-700"
                        onClick={eliminarProducto}
                    >
                        Aceptar
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

export default ModalDeleteProduct;
