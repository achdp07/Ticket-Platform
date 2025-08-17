import EventCard from '../components/events/EventCard'
import { Link } from 'react-router-dom'
import { PiPlaceholder } from 'react-icons/pi'
import Searchbar from '../components/layout/Searchbar'
import EventList from '../components/events/EventList'
import Filters from '../components/layout/Filters'

const Home = () => {
  return (
    
    <div className='bg-gray-900 text-gray-100 h-full overflow-hidden px-6 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 h-full'>

        <div className='md:col-span-1 ml-5 h-screen overflow-y-scroll hide-scrollbar '>
          <div className="space-y-1">
            <Searchbar />
            <div className='border-b border-gray-500'>
              <p className='text-sm text-gray-600'>Results are displayed based on status</p>
            </div>

            <div>
              <Filters />
            </div>
          </div>
        </div>
      

      <div className="md:col-span-3 lg:mt-10 mt-1 md:mt-10 h-screen overflow-y-auto hide-scrollbar">
      <EventList />
      </div>
    </div>
  </div>      
   
  )
}

export default Home;