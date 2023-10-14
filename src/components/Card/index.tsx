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
    <div className="py-4 px-2 rounded-xl flex">
      <Image src={img} alt={title} className="shrink-0 h-14 w-14 rounded-lg object-contain" />
      <article className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-xl">{title}</h3>
          <div className="flex text-base items-center">
            <Star className="" />
            <p>{rating}/5</p>
          </div>
        </div>
        <p className="text-base text-slate-300 font-normal text-ellipsis">{description}
        </p>
        <p className="text-black font-medium">{price}</p>
      </article>
    </div>
  )
}

export const OfferCard = ({ img, title, location, price }: OfferProps) => {
  return (
    <div className="w-full pt-2 py-4 px-2 shadow-sm rounded-xl">
      <Image src={img} alt={title} className="object-cover h-28 w-28" />

      <article className="space-y-4">
        <h3 className="font-medium text-xl">{title}</h3>
        <div className="flex items-center gap-x-2 text-slate-300">
          <MapPinIcon className="" />
          <p className="text-base">{location}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-lg text-black">{price}</p>
            <span className="text-slate-300 text-base">/night</span>
          </div>

          <div className="border rounded-xl h-10 w-10 flex items-center justify-center">
            <HeartIcon className="h-6 w-6 text-slate-300" />
          </div>
        </div>
      </article>
    </div>
  )
}