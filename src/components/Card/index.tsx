import { HeartIcon, MapPinIcon, Star } from "lucide-react"
import Image from "next/image"

type DestinationProps = {
  img: string
  title: string
  price: string
  rating: string
  description: string
}

type OfferProps = {
  img: string
  title: string
  location: string
  price: string
}

export const DestinationCard = ({ img, title, price, rating, description }: DestinationProps) => {
  return (
    <div className="py-4 min-w-[300px] px-4 h-[200px] rounded-2xl border flex items-stretch shadow-sm bg-white gap-x-8 keen-slider__slide">
      <Image src={img} alt={title} className="shrink-0 w-[200px] rounded-2xl object-cover" width={1000} height={1000}/>
      <article className="space-y-4 w-full">
        <div className="flex w-full items-center justify-between">
          <h3 className="font-semibold text-xl">{title}</h3>
          <div className="flex text-sm gap-x-2 items-center">
            <Star className="h-4 w-4" fill="#edab56" stroke="none" />
            <p>{rating}/5</p>
          </div>
        </div>
        <p className="text-base text-[#686868] font-normal text-clip truncate max-w-[10rem]">
          {description}
        </p>
        <p className="text-black font-medium">{price}</p>
      </article>
    </div>
  )
}

export const OfferCard = ({ img, title, location, price }: OfferProps) => {
  return (
    <div className="w-full pt-2 py-4 px-3 rounded-3xl border shadow-sm bg-white">
      <Image src={img} alt={title} className="object-cover h-28 w-full rounded-3xl" width={1000} height={1000}/>

      <article className="space-y-4 py-4 w-full">
        <h3 className="font-medium text-xl">{title}</h3>
        <div className="flex items-center gap-x-2 text-[#686868]">
          <MapPinIcon className="" />
          <p className="text-base">{location}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-lg text-black">{price}</p>
            <span className="text-[#686868] text-base">/night</span>
          </div>

          <div className="border rounded-xl h-10 w-10 flex items-center justify-center">
            <HeartIcon className="h-6 w-6 text-[#686868]" />
          </div>
        </div>
      </article>
    </div>
  )
}