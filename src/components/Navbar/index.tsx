import { Bell, Search } from 'lucide-react'

export const Navbar = () => {
    return (
      <nav className='p-4 rounded-xl w-full bg-white flex items-center justify-between'>
        <div className='border h-[3rem] w-[18rem] rounded-lg flex items-center px-4 gap-x-4 shadow-sm ring-offset-2 focus:ring-2 focus:outline-none focus:ring-offset-2 ring-offset-white'>
          <Search className='h-8 w-8 text-[#eee]' />
          <input className='h-full w-full basis-[90%] text-[#686868] font-medium outline-0 border-none outline-none' placeholder='Search anything'/>
        </div>
  
        <div className='flex items-center gap-x-12'>
          <p className='text-black'>Saturday, May 3, 2023</p>
          <div className='relative'>
            <div className='bg-red-500 absolute top-0 shadow-sm text-white left-[-15px] h-6 w-6 flex items-center justify-center rounded-full'>
              <span className='text-[12px]'>2</span>
            </div>
            <div className='border rounded-xl p-2'>
              <Bell className='h-6 w-6 text-[#222]' />
            </div>
          </div>
        </div>
      </nav>
    )
  }