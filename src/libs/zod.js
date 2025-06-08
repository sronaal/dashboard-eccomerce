import { z } from 'zod'

export const loginFormSchema = z.object({
    email: z.string().email('Ingrese un correo valido'),
    password: z.string().min(6,'La contraseña debe tener al menos 6 caracteres')
})