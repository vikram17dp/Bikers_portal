import React from 'react'
import {specialityData} from '../../assets/assets.js'
import { Link } from 'react-router-dom'

const SpecailtiyMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
        <h1 className='text-4xl font-sans font-bold text-gray-500'>Explore by Category
        </h1>
        <p className='sm:w-1/3 text-center text-sm font-display text-wrap text-[14px]'>Discover the best selection of bikes, parts, and accessories. 
        Simply browse through our extensive categories and gear up for your next ride.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {specialityData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0,0)} key={index} to={`/all-bikes/${item.speciality}`} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
                   <div className='w-20 h-20 sm:w-28 sm:h-28 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <img src={item.image} alt={item.category} className='w-full h-full object-cover' />
            </div>
                    <p className='text-sm font-medium mt-3 text-center '>{item.speciality}</p>
                </Link>
            ))}
        </div>
      
    </div>
  )
}

export default SpecailtiyMenu
