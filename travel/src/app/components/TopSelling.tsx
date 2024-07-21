import React from 'react'
import DestinationCard from './Card/DestinationCard'

function TopSelling() {

    const destinations = [
        {
          id: 0,
          imageUrl: "/images/rome.png",
          title: "Rome, Italy",
          amount: "$5.42k",
          duration: "10 Days Trip",
          highlighted: false,
        },
        {
          id: 1,
          imageUrl: "/images/london.jpg",
          title: "London, UK",
          amount: "$4.2k",
          duration: "12 Days Trip",
          highlighted: false,
        },
        {
          id: 2,
          imageUrl: "/images/europe.png",
          title: "Full Europe",
          amount: "$15k",
          duration: "28 Days Trip",
          highlighted: true,
        },
        
      ];
  return (
    <div>
        <p className='text-center text-lightGray text-[1.125rem] font-[600]'>Top Selling</p>

        <p className='volkhov text-[3.125rem] text-title font-[700] text-center'>Top Destinations</p>

        <div className="flex flex-col gap-4 md:flex-row items-center md:justify-between mt-16 w-full">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            imageUrl={destination.imageUrl}
            title={destination.title}
            duration={destination.duration}
            amount={destination.amount}
            highlighted={destination.highlighted}
          />
        ))}
      </div>
    </div>
  )
}

export default TopSelling