'use client'

import Image from 'next/image'

import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import { SearchBar } from '@/components/SearchBar'
import { OfferCard } from '@/components/Card'
import { bestOffers } from '@/globals/offer-data'
import Hero from 'public/assets/img/hero-bg.webp'
import { SliderComp } from '@/components/Slider'


export default function Home() {

  const styles = {
    navigation: {
      container: `border border-[#333] flex items-center justify-center rounded-lg h-8 w-8 delay-75 text-[#333] transition-all hover:cursor-pointer hover:bg-blue-950 hover:text-white`,
      icon: `h-4 w-4`
    }
  }

  return (
    <main className="flex items-start relative">
      <section className='basis-[15%] p-2 bg-white sticky top-0 left-0'>
        <Sidebar />
      </section>
      <section className='basis-[85%] h-full min-h-screen grow py-4 px-8 bg-[#EEE] space-y-8'>
        <Navbar />
        <div className='h-full w-full space-y-12'>
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

          <section>
            <div className='overflow-hidden grid grid-cols-12'>
              <div className='col-span-full'>
                <SliderComp />
              </div>
            </div>
          </section>

          <section>
            <div className='flex items-center justify-between mb-8'>
              <h2 className='text-[2rem] font-medium'>Best Offers</h2>
              <div className='flex items-center gap-x-4'>
                View All
              </div>
            </div>

            <div className='grid grid-cols-5 gap-12'>
              {bestOffers.map((offer, index) => {
                return (
                  <OfferCard
                    key={index}
                    img={offer.img}
                    location={offer.location}
                    price={offer.price}
                    title={offer.title}
                  />
                )
              })}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}


