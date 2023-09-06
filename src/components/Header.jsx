import {AiOutlineSearch, AiOutlineMail, AiOutlineBars} from 'react-icons/ai'
import {MdSupervisorAccount, MdOutlineNotificationsActive} from 'react-icons/md'

const Header = ({openSideBar}) => {
  return (
    <div className='w-[100%]'>
        <div className='text-gray-200 w-full flex justify-between items-center border-b-[3px] p-6 border-gray-800'>
            <div className='mr-4 md:hidden cursor-pointer'>
                <AiOutlineBars size={25} onClick={openSideBar}/>
            </div>
            <div className='w-full'>
                <AiOutlineSearch size={20} className='font-bold cursor-pointer'/>
            </div>
            <div className='flex items-center gap-3'>
                <MdOutlineNotificationsActive size={25}/>
                <AiOutlineMail size={25}/>
                <MdSupervisorAccount size={25}/>
            </div>
        </div>
    </div>
  )
}

export default Header
