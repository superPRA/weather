import React, {useState} from 'react'
import { FiSearch } from "react-icons/fi"

type Props = {}

export default function MainSearchBarSm({}: Props) {
    const [searchBar, setSearchBar] = useState(false);
  return (
    <div className="flex justify-end ">
          <div
            className={` ${searchBar?"w-full":"w-12"} h-12 bg-neutral-focus bg-opacity-90 flex justify-center group hover:w-full transition-all duration-300 items-center relative rounded-full`}
            onClick={() => setSearchBar(true)}
            onBlur={() => setSearchBar(false)}
          >
            <label className="absolute left-[10px] text-[26px]">
              <FiSearch />
            </label>
            <input
              className="w-full text-xl mx-2 bg-black  bg-opacity-0 outline-none focus:px-8"
              onFocus={() => setSearchBar(true)}
              onClick={() => setSearchBar(true)}
              onBlur={() => setSearchBar(false)}
              placeholder={searchBar?"search your city and press enter":""}
            />
          </div>
        </div>
  )
}