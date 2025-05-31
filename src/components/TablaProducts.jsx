import React, { } from "react";
import RowTable from "./RowTable";

export function TablaProducts({ products = [], title }) {





  return (
    <div className="scrollbar scrollbar-thumb-blue-500 scrollbar-track-gray-300 overflow-x-auto max-h-80">
      {title}
      <table className="min-w-full text-sm text-left rtl:text-right">
        <thead className="text-xs text-green-600 uppercase border-1 rounded-md bg-gray-100">
          <tr>
            <th className="px-6 py-3 rounded-s-lg border-1">Producto</th>
            <th className="px-6 py-3 border-1">Estado</th>
            <th className="px-6 py-3 border-1">Precio</th>
            <th className="px-6 py-3 rounded-e-lg border-1">Inventario</th>
          </tr>
        </thead>
        <tbody>
          {!Array.isArray(products) || products.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4">No hay productos</td>
            </tr>
          ) : (
            products.map((product, index) => (
              <RowTable key={index} {...product} />
            ))
          )}
        </tbody>
      </table>
    </div>

  );
}

export default TablaProducts;
