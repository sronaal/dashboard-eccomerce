import axios from "axios"

export const obtenerProducts = () => {


    return axios.get('http://localhost:4001/api/product')
}