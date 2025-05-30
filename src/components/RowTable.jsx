import React from 'react'

function RowTable({ producto, stock, precio, estado }) {
    return (
        <tr className="bg-white text-gray-900 border border-gray-400">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                {producto}
            </th>
            <td className="px-6 py-4">{estado}</td>
            <td className="px-6 py-4">{precio}</td>
            <td className="px-6 py-4">{stock}</td>
        </tr>
    )
}

export default RowTable
