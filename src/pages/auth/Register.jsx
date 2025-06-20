import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='flex flex-col items-center p-4 uppercase bg-gray-200 border border-gray-100 w-100 h-[70%] rounded-2xl'>
      <h1 className='mb-8 mt-4 font-bold text-2xl tracking-[4px]'>Registrar<span className='text-[#00CC00] underline underline-offset-5'> Cuenta</span></h1>

      <div>
        <form className='flex flex-col gap-5'>

          <div>
            <label className='text-[12px]'>Nombre</label>
            <input className='w-full  text- rounded-md p-2 focus:border-[#00CC00] outline-none ring-2 ring-[#00CC00]' placeholder='Correo electronico' />
          </div>

          <div>
            <label className='text-[12px]'>Correo Electronico</label>
            <input className='w-full  text- rounded-md p-2 focus:border-[#00CC00] outline-none ring-2 ring-[#00CC00]' placeholder='Correo electronico' />
          </div>
          <div >
            <label className='text-[12px]'>Contraseña</label>
            <input className='w-full  text- rounded-md p-2 focus:border-[#00CC00] outline-none ring-2 ring-[#00CC00]' placeholder='Contraseña' />
          </div>

          <Link to='/' className='w-full bg-[#00CC00] p-3 rounded-xl cursor-pointer text-gray-100 hover:bg-[#00cc00e7] hover:rounded-full transition-colors duration-300 uppercase font-bold  text-center'>Iniciar Sesion</Link>
        </form>
      </div>
    </div>

  )
}

export default Register
