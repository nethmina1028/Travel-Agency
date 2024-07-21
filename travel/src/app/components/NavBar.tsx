'use client'
import React from 'react'
import { Menu,X } from "lucide-react";
import { useState } from "react";

function Navbar() {

    const[mobileDrawerOpen,setMobileDrawerOpen]=useState(false);

    const toggleNavbar=() =>{
     setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const navItems = [
        { label: "Destinations", href: "#" },
        { label: "Hotels", href: "#" },
        { label: "Flights", href: "#" },
        { label: "Booking", href: "#" },
        { label: "Login", href: "#" },
        
      ];

  return (
    <div className='flex justify-between items-center md:top-0  p-4 md:sticky z-20  '>
        <div className=''>
        <img src="/images/logo.png" alt="logo" />
        </div>

         <div>
            <ul className='hidden xl:flex gap-14 font-bold text-md'>
                    {navItems.map((item,index) =>(
                       <li key={index}>
                        <a href={item.href} className='hover:text-primary  '>{item.label}</a>
                       </li> 
                    ))}

                    <li> <a href="" className='rounded-md border-black border px-6 py-2 font-semibold hover:bg-primary hover:text-white '>Sign up</a></li>
            </ul>
           

            </div>
          
            {/*nAVBAR toggle */}
         <div className="flex-col justify-end lg:hidden md:flex">
                <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X/>:<Menu/>}
                </button>
         </div>

 
         {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 flex flex-col items-start justify-center w-full p-12 mt-10 bg-green-200 lg-hidden">
                    <ul>
                    {navItems.map((item,index) =>(
                       <li key={index} className='p-1'>
                        <a href={item.href}>{item.label}</a>
                       </li> 
                    ))}
                    </ul>
                    
            <div className=" ">
                
                <a href='#' className=''>SignIn</a>
            </div>


                </div>
            )}

    </div>
  )
}

export default Navbar