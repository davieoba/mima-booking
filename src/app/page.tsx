'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import { SearchBar } from '@/components/SearchBar'
import { DestinationCard, OfferCard } from '@/components/Card'
import { destinationTravel } from '@/globals/destination-data'
import { bestOffers } from '@/globals/offer-data'
import Hero from 'public/assets/img/hero-bg.webp'

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }

  const styles = {
    navigation: {
      container: `border border-[#333] flex items-center justify-center rounded-lg h-8 w-8 delay-75 text-[#333] transition-all hover:bg-blue-950 hover:text-white`,
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
            <div className='flex items-center justify-between mb-8'>
              <h2 className='text-[2rem] font-medium'>Trending destinations</h2>
              <div className='flex items-center gap-x-4'>
                <div className={styles.navigation.container}>
                  <ChevronLeftIcon className={styles.navigation.icon} />
                </div>
                <div className={styles.navigation.container}>
                  <ChevronRightIcon className={styles.navigation.icon} />
                </div>
              </div>
            </div>

            <div className='overflow-hidden grid grid-cols-3 gap-12'>
              {/* <Slider {...settings}> */}
              {destinationTravel.map((destination, index) => {
                return (
                  <DestinationCard
                    key={index}
                    img={destination.img}
                    title={destination.title}
                    description={destination.description}
                    price={destination.price}
                    rating={destination.rating}
                  />
                )
              })}
              {/* </Slider> */}
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


