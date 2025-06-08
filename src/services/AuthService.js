import axios from "axios"

export const iniciarSesion = (credenciales) => {

    return axios.post('http://192.168.101.4:4001/api/auth/login', credenciales)
}