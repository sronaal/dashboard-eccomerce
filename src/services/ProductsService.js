import axios from "axios"

export const obtenerProducts = () => {


    return axios.get('http://192.168.101.4:4001/api/product')
}


export const crearProducto = ({producto, precio, stock}) => {

    return axios.post('http://192.168.101.4:4001/api/product', {producto, precio, stock} )
}

export const obtenerProductoId = (id) => {

    return axios.get(`http://192.168.101.4:4001/api/product/producto/${id}`)
}

export const eliminarProducto = (id) => {

    return axios.delete(`http://192.168.101.4:4001/api/product/${id}`)
}