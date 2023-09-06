import {AiOutlineShoppingCart, AiOutlineClose, AiOutlineSetting} from 'react-icons/ai'
import {BiSolidDashboard, BiLogoProductHunt, BiCategory} from 'react-icons/bi'
import {MdOutlineInventory} from 'react-icons/md'
import {BsPeopleFill} from 'react-icons/bs'

const Sidebar = ({ open, openSideBar }) => {
  return (
        <div className={`text-white md:h-screen w-[250px] top-0 left-0 absolute  md:relative  bg-gray-800 ${open ? 'block'  : 'hidden'}  p-5  md:block`}>
            <div className='top-0 absolute right-0 p-2 font-bold cursor-pointer md:hidden text-red-700'>
                <AiOutlineClose size={20} onClick={openSideBar}/>
            </div>
            <div className='flex mt-5 mb-7'>
                <a className='hover:scale-105 duration-300' href="#">
                    <h2 className='flex items-center hover:scale-105 duration-300gap-2 font-bold font-mono text-xl'><AiOutlineShoppingCart size={25}/>Shop</h2>
                </a>
            </div>
            <div className='flex font-semibold mb-7'>
                <a className='hover:scale-105 duration-300' href="#">
                <h2 className='flex items-center gap-2'><BiSolidDashboard size={20}/>Dashboard</h2>
                </a>
            </div>
            <div className='flex font-semibold mb-7'>
                <a className='hover:scale-105 duration-300' href="#">
                <h2 className='flex items-center gap-2'><BiLogoProductHunt size={20}/>Products</h2>
                </a>
            </div>
            <div className='flex font-semibold mb-7'>
                <a className='hover:scale-105 duration-300' href="#">
                <h2 className='flex items-center gap-2'><BiCategory size={20}/>Category</h2>
                </a>
            </div>
            <div className='flex font-semibold mb-7'>
                <a className='hover:scale-105 duration-300' href="#">
                <h2 className='flex items-center gap-2'><BsPeopleFill size={20}/>Customers</h2>
                </a>
            </div>
            <div className='flex font-semibold mb-7'>
                <a className='hover:scale-105 duration-300' href="#">
                <h2 className='flex items-center gap-2'><MdOutlineInventory size={20}/>Inventory</h2>
                </a>
            </div>
            <div className='flex font-semibold mb-7'>
                <a className='hover:scale-105 duration-300' href="#">
                <h2 className='flex items-center gap-2'><AiOutlineSetting size={20}/>Setting</h2>
                </a>
            </div>
        </div>
  )
}

export default Sidebar
