'use client'

import { DatePickerWithRange } from "@/components/Calendar"
import { ComboboxComp } from "@/components/Comobox"
import { SelectGroupComp } from "@/components/SelectGroup"
import { Button } from "@/components/ui/button"

import Slider from "react-slick";
import Image from "next/image";
import { SliderComp } from "@/components/Slider"

const Demo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true
  }
  return (
    <div className="p-8 bg-slate-400 space-y-24">
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12 divide-x rounded-xl flex p-4 items-center bg-white">
          <div className="px-8">
            <ComboboxComp />
          </div>

          <div className="px-8">
            <DatePickerWithRange />
          </div>

          <div className="px-8">
            <SelectGroupComp />
          </div>
          <Button className="rounded-lg">Search</Button>
        </div>
      </div>

      <SliderComp />

      {/* <Slider {...settings} className='slide_container overflow-hidden'>
        <div className='h-[200px] w-[200px]'>
          <Image src='https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2104&q=80' alt="some" width={1000} height={1000} className='object-contain' />
        </div>
        <div className='h-[200px] w-[200px]'>
          <Image src='https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2104&q=80' alt="" width={1000} height={1000} className='object-contain' />
        </div>
        <div className='h-[200px] w-[200px]'>
          <Image src='https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2104&q=80' alt="" width={1000} height={1000} className='object-contain' />
        </div>
        <div className='h-[200px] w-[200px]'>
          <Image src='https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2104&q=80' alt="" width={1000} height={1000} className='object-contain' />
        </div>
        <div className='h-[200px] w-[200px]'>
          <Image src='https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2104&q=80' alt="" width={1000} height={1000} className='object-contain' />
        </div>
      </Slider> */}
    </div>
  )
}

export default Demo