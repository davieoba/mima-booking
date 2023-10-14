'use client'
import { ChevronDown, MinusCircleIcon, PlusCircleIcon, User } from "lucide-react"
import { useState } from "react"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button"

export const SelectGroupComp = () => {
  const [adult, setAdult] = useState<number>(0)
  const [children, setChildren] = useState<number>(0)

  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <Button className="flex w-full gap-x-2 items-center justify-between text-lg bg-white hover:bg-white">
          <div className="flex items-center gap-x-4">
            <User className="h-4 w-4 opacity-50 text-black" />
            {adult > 0 ? (
              <div className="flex items-center gap-2 text-black">
                <span>Adult {adult}</span>
                {children > 0 ? (
                  <span>,Children {children}</span>
                ) : null
                }
              </div>
            ) : (
              <span className="text-black">
                Select Group
              </span>
            )}
          </div>
          <ChevronDown className="h-4 w-4 opacity-50 text-black" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="space-y-4 w-[300px]">
        <div className="flex justify-between w-full items-center">
          <h4>Adult</h4>
          <div className="flex gap-x-2 items-center">
            <span onClick={() => setAdult(prev => prev + 1)}>
              <PlusCircleIcon className="opacity-50 h-4 w-4" />
            </span>
            <span>{adult}</span>
            <span onClick={() => {
              if (adult === 0) return

              setAdult(prev => prev - 1)
            }}>
              <MinusCircleIcon className="opacity-50 h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="flex justify-between w-full items-center">
          <h4>Children</h4>
          <div className="flex gap-x-2 items-center">
            <span onClick={() => setChildren(prev => prev + 1)}>
              <PlusCircleIcon className="opacity-50 h-4 w-4" />
            </span>
            <span>{children}</span>
            <span onClick={() => {
              if (children === 0) return
              setChildren(prev => prev - 1)
            }}
            >
              <MinusCircleIcon className="opacity-50 h-4 w-4" />
            </span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}