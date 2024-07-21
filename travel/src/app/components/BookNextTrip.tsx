import React from 'react'
import TripStepCard from './Card/TripStepCard';

function BookNextTrip() {

    const steps = [
        {
          id: 0,
          iconUrl: "/images/destination-icon.png",
          title: "Choose Destination",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
        },
        {
          id: 1,
          iconUrl: "/images/payment-icon.png",
          title: "Make Payment",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
        },
        {
          id: 2,
          iconUrl: "/images/airport-icon.png",
          title: "Reach Airport on Selected Date",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
        },
      ];
  return (
    <div className='flex flex-col justify-between md:flex-row items-center '>

        <div>
            <p className='text-lightGray text-[1.125rem] font-[600] text-left'>Easy and Fast</p>
            <p className='volkhov text-[3.125rem] text-title font-[700] text-left'>Book your next trip in 3 easy steps</p>

            <div className='flex flex-col gap-[3rem] mt-[1.94rem]'>
            {steps.map((step) => (
          <TripStepCard
            key={step.id}
            iconUrl={step.iconUrl}
            title={step.title}
            description={step.description}
           
          />
        ))}
                 
            </div>

        </div>

        <div className='md:-mt-20'>
        <img src="/images/next-trip.png" alt="card with a girl on a wall" />
      </div>


    </div>
  )
}

export default BookNextTrip