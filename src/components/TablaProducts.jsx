import React from 'react'

export function TablaProducts({ products, title }) {
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
          <tr class="bg-white text-gray-900 border-1 border-gray-400 ">
            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">
              1
            </td>
            <td class="px-6 py-4">
              $2999
            </td>
            <td class="px-6 py-4">
              3
            </td>
          </tr>
          <tr class="bg-white text-gray-900 border-1 border-gray-400 ">
            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">
              1
            </td>
            <td class="px-6 py-4">
              $2999
            </td>
            <td class="px-6 py-4">
              3
            </td>
          </tr>
          <tr class="bg-white text-gray-900 border-1 border-gray-400 ">
            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">
              1
            </td>
            <td class="px-6 py-4">
              $2999
            </td>
            <td class="px-6 py-4">
              3
            </td>
          </tr>


        </tbody>
      </table>
    </div>
  )
}

export default TablaProducts