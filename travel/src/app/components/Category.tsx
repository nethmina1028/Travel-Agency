import React from 'react'
import CategoryCard from './Card/CategoryCard';

function Category() {

    const features = [
        {
          id: 0,
          iconUrl: "/images/satellite.png",
          title: "Calculated Weather",
          description:
            "Built Wicket longer admire do barton vanity itself do in it.",
          highlighted: false,
        },
        {
          id: 1,
          iconUrl: "/images/aircraft.png",
          title: "Best Flights",
          description:
            "Engrossed listening. Park gate sell they west hard for the.",
          highlighted: true,
        },
        {
          id: 2,
          iconUrl: "/images/mic.png",
          title: "Local Events",
          description:
            "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
          highlighted: false,
        },
        {
          id: 3,
          iconUrl: "/images/cog.png",
          title: "Customization",
          description:
            "We deliver outsourced aviation services for military customers",
          highlighted: false,
        },
      ];

  return (
    <div className='' >
      
        <p className="text-center text-lightGray text-[1.125rem] font-[600]">Category</p>

        <p className='volkhov text-[3.125rem] text-title font-[700] text-center'>We Offer Best Services</p>
         
         <div className='flex flex-col md:flex-row justify-between w-full mt-16 '>
            {features.map((feature) => (
                <CategoryCard 
                key={feature.id}
                iconUrl={feature.iconUrl}
                title={feature.title}
                description={feature.description}
                highlighted={feature.highlighted}
                
                />
            ))}

         </div>
        
        
    </div>
  )
}

export default Category