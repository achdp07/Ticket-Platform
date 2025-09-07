import EventCard from '../components/events/EventCard'
import { Link } from 'react-router-dom'
import Searchbar from '../components/layout/Searchbar'
import EventList from '../components/events/EventList'
import Filters from '../components/layout/Filters'
import Navbar from '../components/layout/Navbar'
import { AnimatePresence } from 'framer-motion'
import PageAnimation from '../components/ui/PageAnimation'

const Home = () => {
  return (
    <PageAnimation>
    <div className= 'text-gray-900 h-full  px-6 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 h-full'>

        <div className='md:col-span-1 h-screen hide-scrollbar '>
          <div className="space-y-1">
            <Searchbar />

            <div>
              <Filters />
            </div>
          </div>
        </div>
      

      <div className="md:col-span-3 lg:mt-10 mt-1 md:mt-10 
        hide-scrollbar">
      <EventList />

      </div>
    </div>
  </div>      
  </PageAnimation>
  )
}

export default Home;