import { FaLocationArrow } from 'react-icons/fa'
import { MdCategory } from "react-icons/md";
import { MdDateRange } from 'react-icons/md';
import { MdPriceChange } from 'react-icons/md';


const EventCard = ( {EventTitle, EventLoc, EventDate, EventImg, EventPrice, id, EventCategory} ) => {
  return (
    <div className='bg-gray-800 rounded-xl shadow p-4
        w-full max-w-sm
        sm:max-w-md
        md:max-w-lg
        lg:max-w-xl 
        hover:bg-gray-950 
        duration-200 transition' >
      <img src={EventImg} alt="" 
      className='rounded mb-2'/>
      <div className='flex flex-col gap-1'>
        {id}
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