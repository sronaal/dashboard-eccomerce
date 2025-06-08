import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom';

import { loginFormSchema } from '../../libs/zod'
import { iniciarSesion } from '../../services/AuthService'

function Login() {

  const { register, handleSubmit, formState: { errors }, reset} = useForm({ resolver: zodResolver(loginFormSchema) })

  const navigate = useNavigate()

  const onSubmit = async (credenciales) => {

    iniciarSesion(credenciales)
    .then((data) => {
      localStorage.setItem('token',data.data.token)
      
      navigate('/')

    })
    .catch((error) => {
      if(error.status === 401){

        toast.error('Correo y/o contraseña invalidos')
        reset()
      }

      console.log(`Error ${error}`)
    })

  }

  return (
    <div className='flex flex-col items-center p-4 uppercase bg-gray-200 border min-h-[65%] border-gray-100 w-100 h-90 rounded-2xl'>
      <h1 className='mb-8 mt-4 font-bold text-2xl tracking-[4px]'>Iniciar <span className='text-[#00CC00] underline underline-offset-5 '>Sesión</span></h1>

      <div>
        <form onSubmit={ handleSubmit(onSubmit) } className='flex flex-col gap-5'>
          <div>
            <label className='text-[12px]'>Correo Electronico</label>
            <input 
            type='text'
            className='w-full   rounded-md p-2 focus:border-[#00CC00] outline-none ring-2 ring-[#00CC00]'
            placeholder='Correo electronico' 
            {...register('email')}
            />
            <p className='text-sm text-red-500'>{errors.email?.message}</p>
          </div>
          <div >
            <label className='text-[12px]'>Contraseña</label>
            <input 
            type='password'
            className='w-full   rounded-md p-2 focus:border-[#00CC00] outline-none ring-2 ring-[#00CC00]' 
            placeholder='********' 
            {...register('password')}
            />
            <p className='text-sm text-red-500'>{errors.password?.message}</p>
          </div>

          <button type='submit' className='w-full bg-[#00CC00] p-3 rounded-xl cursor-pointer text-gray-100 hover:bg-[#00cc00e7] hover:rounded-full transition-colors duration-300 uppercase font-bold  text-center'>Iniciar Sesion</button>
          <ToastContainer/>
        </form>
      </div>
    </div>
  )
}

export default Login