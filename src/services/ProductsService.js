import axios from "axios"

export const obtenerProducts = () => {


    return axios.get('http://192.168.101.4:4001/api/product')
}


export const crearProducto = ({producto, precio, cantidad}) => {

    return axios.post('http://192.168.101.4:4001/api/product', {producto, precio, cantidad} )
}