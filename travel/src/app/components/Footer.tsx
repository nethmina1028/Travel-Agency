import React from 'react'
import Link from 'next/link';
function Footer() {

    // FOOTER SECTION
   const FOOTER_LINKS = [
    {
      title: 'Company',
      links: [
        'About',
        'Careers',
        'Mobile',
      ],
    },
    {
      title: 'Contact',
      links: [
              'Help',
              'Press', 
              'Affiliates',
            ],
    },

    {
        title: 'More',
        links: [
                'Airline fees',
                'Airline', 
                'Low fare tips',
              ],
      },
  ];

  
  
  return (
    <div className='flex flex-col md:flex-row justify-around items-start pb-12'>   


        <div className=''>
        <img src="/images/logo-bottom.png" alt="footer logo" />
        <p className='text-lightGray text-[1rem] font-[700] mt-[1rem]'>Book your trip in minute, get full Control for much longer.</p>
        </div> 
       
          
          <div className='flex  gap-10 justify-between md:flex-row'>
          {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="text-lightGray text-[1.125rem] font-[500] flex flex-col gap-2 ">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

        </div>

        <div>
             <div className='flex flex-row'>
                   <img src="/images/facebook-icon.png" alt="social icon" />
                   <img src="/images/instagram-icon.png" alt="social icon" />
                   <img src="/images/x-icon.png" alt="social icon" />
             </div>

               <p className="text-lightGray font-[500] text-[1.25rem]">
                   Discover our app
               </p>

               
        </div>
         
    </div>
  );
}

        type FooterColumnProps = {
          title: string;
            children: React.ReactNode;
            }
  
  
  const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
      <div className="flex flex-col   gap-5 px-10">
        <h4 className="text-lightBlack font-[700] text-[1.3125rem] ">{title}</h4>
        {children}
      </div>
    )
  }
  

export default Footer