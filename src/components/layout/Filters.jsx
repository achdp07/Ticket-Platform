const Category = [
    {
      id: 1,
      name: "Sport",
      icon: "🏀"
    },
    {
      id: 2,
      name: "Conference",
      icon: "🎤"
    },
    {
      id: 3,
      name: "Meetup",
      icon: "👥"
    },
    {
      id: 4,
      name: "Party",
      icon: "🎉"
      },
    {
      id: 5,
      name: "Art & Culture",
      icon: "🎭"
    },
    {
      id: 6,
      name: "Technologies",
      icon: "💻"
    }
]

const Date = [
    "Today",
    "Tomorrow",
    "This Weekend",
    "This Week",
    "This Month",
    "Next Month"
]

const Organizer = [
    {
        name: "Organizer 1",
        img: 'https://fastly.picsum.photos/id/680/200/200.jpg?hmac=jlYrp1rK5RIQZTIaHkTW2llzrRXtuYJLeprOC8i40os',
        id: 1
    },
    {
        name: "Organizer 2",
        img: "https://picsum.photos/200",
        id: 2
    },
    {
        name: "Organizer 3",
        img: "https://picsum.photos/200",
        id: 3
    },
    {
        name: "Organizer 4",
        img: "https://picsum.photos/200",
        id: 4   
    }
        
]

const Filters =() => {
    return (
        <div className='mt-4'> 
              <h4 className='text-gray-900 font-medium mt-4 mb-4'>Category</h4>

              <div className='grid grid-cols-2 sm:grid-cols-2 
              md:grid-cols-1 lg:grid-cols-2 gap-2 mb-6' >
                
                {Category.map((cat) => (
                    <span key={cat.id} className='bg-slate-200 px-2 py-2 rounded-full 
                    items-center text-center text-sm hover:bg-blue-600 hover:text-white'>
                        {cat.icon} {cat.name}
                    </span>
                ))}


              </div>
            

            {/* Separator */}
            <div className='border-t border-slate-200 '>
              {" "}
            </div>

            <div className='mt-4'> 
              <h4 className='text-black font-medium mt-4 mb-4'>Organizer</h4>

              <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 mb-6' >
                {Organizer.map((org) => (
                    <div key={org.id} className='flex items-center space-x-2
                    hover:bg-blue-600 hover:text-white p-2 rounded-lg'>
                        <img src={`${org.img}`} alt={org.name} className='w-8 h-8 rounded-full'/>
                        <span className='text-sm'>{org.name}</span>
                    </div>
                ))}


              </div>
            
              {/* Separator */}
              <div className='border-t border-slate-200 '>
                {" "}
              </div>
            </div>

            <div className='mt-4'> 
              <h4 className='text-gray-300 font-medium mt-4 mb-4'>Date</h4>

              <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 mb-6' >
                <span className='bg-white px-4 py-1 rounded-full text-center text-sm'>Sport</span>
                <span className='bg-white px-4 py-1 rounded-full text-center text-sm'>Conference</span>
                <span className='bg-white px-4 py-1 rounded-full text-center text-sm'>Meetup</span>
                <span className='bg-white px-4 py-1 rounded-full text-center text-sm'>Party</span>
                <span className='bg-white px-4 py-1 rounded-full text-center text-sm'>Art & Culture</span>
                <span className='bg-white px-4 py-1 rounded-full text-center text-sm'>Technologies</span>

              </div>
            
              {/* Separator */}
              <div className='border-t border-gray-500 '>
                {" "}
              </div>
            </div>
        </div>
    )
}

export default Filters;