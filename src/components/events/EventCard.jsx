import { FaLocationArrow } from 'react-icons/fa'
import { MdCategory } from "react-icons/md";
import { MdDateRange } from 'react-icons/md';
import { MdPriceChange } from 'react-icons/md';


const EventCard = ( {EventTitle, EventLoc, EventDate, EventImg, EventPrice, EventCategory} ) => {
  return (
    <div className='bg-gray-800 rounded-xl shadow p-4 w-auto 
    sm:w-75 sm:text-sm
    md:w-85
        hover:scale-[0.98] duration-200 transition-opacity'>
      <img src={EventImg} alt="" 
      className='rounded mb-2'/>
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between items-center '>
          <h2 className='font-bold mb-1'>{EventTitle}</h2>
          <div className='flex'>
            <MdDateRange className='mr-1 text-blue-600' />
            <span className='text-gray-400 text-sm '>{EventDate}</span>
          </div>
        </div>
          
        <div>
          <FaLocationArrow className='inline mr-1 text-blue-600 ' />
          <span className='text-gray-400'>{EventLoc}</span>
        </div>

        <div className=''>
            <MdPriceChange className='inline mr-1 text-blue-600' />
            <span className='text-gray-400'>{EventPrice}</span>
        </div>

      </div>

    </div>
  )
}

export default EventCard