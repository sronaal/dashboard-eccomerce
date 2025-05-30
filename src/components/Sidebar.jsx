import { Link } from "react-router-dom"

import { BiHomeAlt } from "react-icons/bi";
import { BiListUl } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiBarChartSquare } from "react-icons/bi";
import { BiExit } from "react-icons/bi";




function Sidebar() {
    return (
        <div className='xl:h-[100vh] overflow-y-scroll scroll-hidden  fixed xl:static w-[80%] xl:w-full md:w-[40%] h-full  top-0  p-4 flex flex-col justify-baseline z-50 bg-gray-100 '>

            <h1 className='uppercase font-bold tracking-[4px] text-center mb-10'>Admin<span className='text-4xl text-[#00CC00]'>.</span></h1>

            <ul className="mb-70">
                <li>
                    <Link to='/' className="flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#aed3ae] font-semibold transition-colors">
                        <BiHomeAlt className="text-[#00CC00] w-5 h-5" />
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to='/ordenes' className="flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#aed3ae] font-semibold  transition-colors">
                        <BiListUl className="text-[#00CC00] w-5 h-5" />
                        Ordenes
                    </Link>
                </li>
                <li>
                    <Link to='/' className="flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#aed3ae] font-semibold  transition-colors">
                        <BiGridAlt className="text-[#00CC00] w-5 h-5" />
                        Productos
                    </Link>
                </li>
                <li>
                    <Link to='/clientes' className="flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#aed3ae] font-semibold  transition-colors">
                        <BiUser className="text-[#00CC00] w-5 h-5" />
                        Clientes
                    </Link>
                </li>
                <li>
                    <Link to='/analisis' className="flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#aed3ae] font-semibold  transition-colors">
                        <BiBarChartSquare className="text-[#00CC00] w-5 h-5" />
                        Analitica
                    </Link>
                </li>
            </ul>
            <nav>
                <Link  className="flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#aed3ae] transition-colors">
                    <BiExit className="text-[#00CC00] w-5 h-5" />
                    Cerrar sesión
                </Link>
            </nav>


        </div>
    )
}

export default Sidebar
