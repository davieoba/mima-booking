import { useKeenSlider } from "keen-slider/react"
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { destinationTravel } from "@/globals/destination-data";
import { DestinationCard } from "../Card";
import 'keen-slider/keen-slider.min.css'

const styles = {
  navigation: {
    container: `border border-[#333] flex items-center justify-center rounded-lg h-8 w-8 delay-75 text-[#333] transition-all hover:cursor-pointer hover:bg-blue-950 hover:text-white`,
    icon: `h-4 w-4`
  }
}

export const SliderComp = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider){
      setCurrentSlide(slider.track.details.rel)
    },
    slides: {
      perView: 3,
      spacing: 12
    },
    created() {
      setLoaded(true)
    }
  })

  return (
    <div className="navigation-wrapper">
      {loaded && instanceRef.current && (
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-[2rem] font-medium'>Trending destinations</h2>
          <div className='flex items-center gap-x-4'>
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          </div>
        </div>
      )}

      <div ref={ref} className="keen-slider">
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
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys()
          ].map((idx) => {
            console.log({idx})
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  )
}

type ArrowProps = {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}

const Arrow = ({ disabled, left, onClick }: ArrowProps) => {
  return (
    <>
      {left && (
        <div className={styles.navigation.container} onClick={onClick}
        >
          <ChevronLeftIcon className={styles.navigation.icon} />
        </div>
      )}

      {!left && (
        <div className={styles.navigation.container} onClick={onClick}>
          <ChevronRightIcon className={styles.navigation.icon} />
        </div>
      )}
    </>
  )
}


