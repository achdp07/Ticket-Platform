import React from 'react'
import { Link } from 'react-router-dom';
import EventCard from './EventCard';
import Navbar from '../layout/Navbar';
import EventDetail from './EventDetails';
import SignupForm from '../auth/SignupForm';

const EventList = () => {
return (
<div className="grid grid-cols-2 items-center justify-center
    sm:grid-cols-2 lg:grid-cols-3 gap-6 pr-2 mx-auto my-auto"> 
          
          <Link to="/EventDetail">
          <EventCard 
            EventImg={"https://picsum.photos/id/237/700/400"}
            EventTitle={"Jololel Show"}
            EventDate={"03 March"}
            EventLoc={"Stade Olympique"}
            EventPrice={"From 10k"}
          /></Link>

          <EventCard
            EventImg={"https://picsum.photos/id/238/700/400"}
            EventTitle={"Jololel Show"}
            EventDate={"10th May"}
            EventLoc={"Stade Olympique"}
            EventPrice={"From 3k"}
          />

          <EventCard
          EventImg={"https://picsum.photos/id/279/700/400"}
          EventTitle={"Jololel Show"}
          EventDate={"03 March"}
          EventLoc={"Stade Olympique"}
          EventPrice={"From 3k"}
          />

          <EventCard
          EventImg={"https://picsum.photos/id/240/700/400"}
          EventTitle={"Jololel Show"}
          EventDate={"03 March"}
          EventLoc={"Stade Olympique"}
          EventPrice={"From 3k"}
          />

          <EventCard
          EventImg={"https://picsum.photos/id/241/700/400"}
          EventTitle={"Jololel Show"}
          EventDate={"03 March"}
          EventLoc={"Stade Olympique"}
          EventPrice={"From 3k"}
          />

          <EventCard
          EventImg={"https://picsum.photos/id/242/700/400"}
          EventTitle={"Jololel Show"}
          EventDate={"03 March"}
          EventLoc={"Stade Olympique"}
          EventPrice={"From 3k"}
          />

          <EventCard
          EventImg={"https://picsum.photos/id/243/700/400"}
          EventTitle={"Jololel Show"}
          EventDate={"03 March"}
          EventLoc={"Stade Olympique"}
          EventPrice={"From 3k"}
          />

          <EventCard
          EventImg={"https://picsum.photos/id/200/700/400"}
          EventTitle={"Jololel Show"}
          EventDate={"03 March"}
          EventLoc={"Stade Olympique"}
          EventPrice={"From 3k"}
          />

          <EventCard
          EventImg={"https://picsum.photos/id/401/700/400"}
          EventTitle={"Jololel Show"}
          EventDate={"03 March"}
          EventLoc={"Stade Olympique"}
          EventPrice={"From 3k"}
          />

          <EventCard
          EventImg={"https://picsum.photos/id/300/700/400"}
          EventTitle={"Jololel Show"}
          EventDate={"03 March"}
          EventLoc={"Stade Olympique"}
          EventPrice={"From 3k"}
          />

          <EventCard
          EventImg={"https://picsum.photos/id/209/700/400"}
          EventTitle={"Jololel Show"}
          EventDate={"03 March"}
          EventLoc={"Stade Olympique"}
          EventPrice={"From 3k"}
          />

          <EventCard
          EventImg={"https://picsum.photos/id/100/700/400"}
          EventTitle={"Jololel Show"}
          EventDate={"03 March"}
          EventLoc={"Stade Olympique"}
          EventPrice={"From 3k"}
          />

          <Navbar />
        </div>
)
};

export default EventList;