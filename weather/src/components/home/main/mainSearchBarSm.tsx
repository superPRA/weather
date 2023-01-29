import React, {useState} from 'react'
import { FiSearch } from "react-icons/fi"
import { Link } from 'react-router-dom'

type Props = {}

export default function MainSearchBarSm({}: Props) {
  return (
    <div className="flex justify-end ">
          <Link
            className={`w-12 h-12 bg-neutral-focus bg-opacity-90 flex justify-center items-center relative rounded-full`}
            to="/setting"
          >
            <div className="absolute left-[10px] text-[26px]">
              <FiSearch />
            </div>
          </Link>
        </div>
  )
}