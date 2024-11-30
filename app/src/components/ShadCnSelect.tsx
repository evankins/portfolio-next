import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function FilterSelect() {
  return (
    <Select defaultValue="all">
      <SelectTrigger className="w-[180px]">
        <SelectValue defaultValue="all"/>
      </SelectTrigger>
      <SelectContent className="bg-slate-50">
        <SelectGroup>
          <SelectItem value="all" className="hover:bg-slate-200 transition duration-300 rounded-md"><p>All</p></SelectItem>
          <SelectItem value="language" className="hover:bg-slate-200 transition duration-300 rounded-md"><p>Language</p></SelectItem>
          <SelectItem value="framework" className="hover:bg-slate-200 transition duration-300 rounded-md"><p>Framework</p></SelectItem>
          <SelectItem value="other" className="hover:bg-slate-200 transition duration-300 rounded-md"><p>Other</p></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
