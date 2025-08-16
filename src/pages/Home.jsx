import EventCard from '../components/events/EventCard'
import { Link } from 'react-router-dom'
import { PiPlaceholder } from 'react-icons/pi'
import Searchbar from '../components/layout/Searchbar'

const Home = () => {
  return (
    
    <div>
      <Searchbar />
      <div className="min-h-screen bg-gray-900 text-gray-100 
      flex justify-center items-center">
      
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 
      sm:grid-cols-2 md:grid-cols-4 gap-2">
        <EventCard
        EventImg={"https://picsum.photos/id/237/400/300"}
        EventTitle={"Jololel Show"}
        EventDate={"03 March"}
        EventLoc={"Stade Olympique"}
        EventPrice={"From 3k"}
        />

        <EventCard
        EventImg={"https://picsum.photos/id/238/400/300"}
        EventTitle={"Jololel Show"}
        EventDate={"03 March"}
        EventLoc={"Stade Olympique"}
        EventPrice={"From 3k"}
        />

        <EventCard
        EventImg={"https://picsum.photos/id/279/400/300"}
        EventTitle={"Jololel Show"}
        EventDate={"03 March"}
        EventLoc={"Stade Olympique"}
        EventPrice={"From 3k"}
        />

        <EventCard
        EventImg={"https://picsum.photos/id/240/400/300"}
        EventTitle={"Jololel Show"}
        EventDate={"03 March"}
        EventLoc={"Stade Olympique"}
        EventPrice={"From 3k"}
        />

        <EventCard
        EventImg={"https://picsum.photos/id/241/400/300"}
        EventTitle={"Jololel Show"}
        EventDate={"03 March"}
        EventLoc={"Stade Olympique"}
        EventPrice={"From 3k"}
        />

        <EventCard
        EventImg={"https://picsum.photos/id/242/400/300"}
        EventTitle={"Jololel Show"}
        EventDate={"03 March"}
        EventLoc={"Stade Olympique"}
        EventPrice={"From 3k"}
        />

        <EventCard
        EventImg={"https://picsum.photos/id/243/400/300"}
        EventTitle={"Jololel Show"}
        EventDate={"03 March"}
        EventLoc={"Stade Olympique"}
        EventPrice={"From 3k"}
        />

        <EventCard
        EventImg={"https://picsum.photos/id/200/400/300"}
        EventTitle={"Jololel Show"}
        EventDate={"03 March"}
        EventLoc={"Stade Olympique"}
        EventPrice={"From 3k"}
        />

        <EventCard
        EventImg={"https://picsum.photos/id/401/400/300"}
        EventTitle={"Jololel Show"}
        EventDate={"03 March"}
        EventLoc={"Stade Olympique"}
        EventPrice={"From 3k"}
        />

        <EventCard
        EventImg={"https://picsum.photos/id/300/400/300"}
        EventTitle={"Jololel Show"}
        EventDate={"03 March"}
        EventLoc={"Stade Olympique"}
        EventPrice={"From 3k"}
        />

        <EventCard
        EventImg={"https://picsum.photos/id/209/400/300"}
        EventTitle={"Jololel Show"}
        EventDate={"03 March"}
        EventLoc={"Stade Olympique"}
        EventPrice={"From 3k"}
        />

        <EventCard
        EventImg={"https://picsum.photos/id/100/400/300"}
        EventTitle={"Jololel Show"}
        EventDate={"03 March"}
        EventLoc={"Stade Olympique"}
        EventPrice={"From 3k"}
        />
        </div>
      </div>      
    </div>
  )
}

export default Home