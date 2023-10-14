import { DatePickerWithRange } from "../Calendar"
import { ComboboxComp } from "../Comobox"
import { SelectGroupComp } from "../SelectGroup"
import { Button } from "../ui/button"

export const SearchBar = () => {
  return (
    <div className="bg-white rounded-xl">
      <div className="divide-x p-4 items-center grid grid-cols-[1fr_1fr_1fr_0.5fr]">
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
  )
}

