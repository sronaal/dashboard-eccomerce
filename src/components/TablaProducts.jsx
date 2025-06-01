import React, { } from "react";
import RowTable from "./RowTable";

export function TablaProducts({ products = [], title }) {





  return (
    <div className="overflow-x-auto scrollbar scrollbar-thumb-blue-500 scrollbar-track-gray-300 max-h-80">
      {title}
      <table className="min-w-full text-sm text-left h-80 rtl:text-right">
        <thead className="text-xs text-green-600 uppercase bg-gray-100 rounded-md w-80 border-1">
          <tr>
            <th className="sticky top-0 px-6 py-3 bg-gray-100 rounded-s-lg border-1">Producto</th>
            <th className="sticky top-0 px-6 py-3 bg-gray-100 rounded-e-lg border-1">Estado</th>
            <th className="sticky top-0 px-6 py-3 bg-gray-100 rounded-e-lg border-1">Precio</th>
            <th className="sticky top-0 px-6 py-3 bg-gray-100 rounded-e-lg border-1">Inventario</th>
            <th className="sticky top-0 px-6 py-3 bg-gray-100 rounded-e-lg border-1"></th>
          </tr>
        </thead>
        <tbody>
          {!Array.isArray(products) || products.length === 0 ? (
            <tr>
              <td colSpan="4" className="py-4 text-center">No hay productos</td>
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
