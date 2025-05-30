import React from "react";
import RowTable from "./RowTable";

export function TablaProducts({ products = [], title }) {
  console.log(products);

  return (
    <div class="overflow-x-auto overflow-y-auto max-h-80">
      {title}

      <table class="w-full text-sm text-left rtl:text-right ">
        <thead class="text-xs text-green-600 uppercase border-1 rounded-md  bg-gray-100 ">
          <tr>
            <th scope="col" class="px-6 py-3 rounded-s-lg border-1">
              Producto
            </th>
            <th scope="col" class="px-6 py-3 border-1">
              Estado
            </th>
            <th scope="col" class="px-6 py-3 rounded-e-lg border-1">
              Precio
            </th>
            <th scope="col" class="px-6 py-3 rounded-e-lg border-1">
              Inventario
            </th>
          </tr>
        </thead>
        <tbody>
          {!Array.isArray(products) ? (
            <tr>
              <td colSpan="4">No hay productos</td>
            </tr>
          ) : (
            products.map((product,index) => (
              <RowTable key={index} {...product} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TablaProducts;
