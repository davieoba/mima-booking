import { DatePickerWithRange } from "@/components/Calendar"
import { ComboboxComp } from "@/components/Comobox"
import { SelectGroupComp } from "@/components/SelectGroup"
import { Button } from "@/components/ui/button"

const Demo = () => {
  return (
    <div className="p-8 bg-slate-400">
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
    </div>
  )
}

export default Demo