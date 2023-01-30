import React from 'react'
import { useAppSelector } from '../../redux/hooks'

type Props = {}

export default function Headlines({}: Props) {
    // const {news} = useAppSelector(state=>state.apiResoponse)
    // console.log(news?.articles[0].url)
  return (
    <div className='bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 rounded-2xl'>
        <div>
            {/* <img src={news?.articles[0].urlToImage} className='h-20 w-40' /> */}
        </div>
    </div>
  )
}