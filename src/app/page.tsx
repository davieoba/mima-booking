import Image from 'next/image'

import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import Hero from 'public/assets/img/hero-bg.webp'
import { SearchBar } from '@/components/SearchBar'

export default function Home() {
  return (
    <main className="flex items-start relative">
      <section className='basis-[15%] p-2 bg-white sticky top-0 left-0'>
        <Sidebar />
      </section>
      <section className='basis-[85%] h-full min-h-screen grow py-4 px-8 bg-[#EEE] space-y-8'>
        <Navbar />
        <div className='h-full w-full'>
          <header className='grid grid-cols-12'>
            <div className='h-[15rem] w-full rounded-xl col-span-full'>
              <Image src={Hero} alt='Header' className='object-cover w-full h-full rounded-xl' />
            </div>
            <div className='col-span-full mt-[-24px]'>
              <div className='px-12'>
                <SearchBar />
              </div>
            </div>
          </header>
        </div>
      </section>
    </main>
  )
}


