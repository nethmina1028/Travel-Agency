import React from 'react'

function Hero() {
  return (
    <div className='flex justify-between items-center md:pt-10 pt-20 ' >
        <div className='flex flex-col p-2 md:p-0 '>
           <div>
              <p className='uppercase text-[1.128rem] font-[700] text-primary '>best destinations around the world</p>
           </div>

            <div className='flex flex-col md:leading-tight leading-relaxed z-10  '>
               <p className='volkhov font-[700] text-[3rem] md:text-[4.73756rem] inline-flex text-lightBlue '>Travel,
                <span className='ml-4  '>
                    
                enjoy
                <img src="/images/stylish-underline.png"
                alt="stylish underline"
                className='-mt-4 z-20 hidden md:block' />
                
                </span> 
                </p>
               <p className='volkhov font-[700] text-[3rem] md:text-[4rem] inline-flex text-lightBlue'>and live a new and full life</p>
            </div>
          <div>
            <p className='my-[1.6rem] font-bold leading-[1.692rem] text-lightGray text-[1rem]'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
          </div>
      
             <div className='flex items-center '>
              <button className='bg-secondary text-white font-[600] shadow-md rounded-[0.564rem] border-none hover:bg-secondary  w-[9.58788rem] h-[3rem] '>Find out more</button>

              <div className='flex items-center mt-6 hover:cursor-pointer ml-4 '>
              <img src='/images/play-shadow.png' alt='play' className='hover:cursor-pointer' />
              <p className="text-lightGrayAlt -mt-6">Play Demo</p>
              </div>
             
             </div>
   
       </div>


       <div className='hidden md:block'>
           <img src='/images/lady-with-aircraft.png' alt='hero' />
       </div>
    </div>
  )
}

export default Hero