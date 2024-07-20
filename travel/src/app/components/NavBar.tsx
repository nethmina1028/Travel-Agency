import React from 'react'


function Navbar() {

    const navItems = [
        { label: "Destinations", href: "#" },
        { label: "Hotels", href: "#" },
        { label: "Flights", href: "#" },
        { label: "Booking", href: "#" },
        { label: "Login", href: "#" },
        
      ];

  return (
    <div className='flex justify-between items-center top-0  p-4 '>
        <div>
        <img src="/images/logo.png" alt="logo" />
        </div>

         <div>
            <ul className='flex gap-14 font-bold text-md'>
                    {navItems.map((item,index) =>(
                       <li key={index}>
                        <a href={item.href} className='hover:text-primary  '>{item.label}</a>
                       </li> 
                    ))}

                    <li> <a href="" className='rounded-md border-black border px-6 py-2 font-semibold hover:bg-primary hover:text-white '>Sign up</a></li>
            </ul>
           

            </div>

    </div>
  )
}

export default Navbar