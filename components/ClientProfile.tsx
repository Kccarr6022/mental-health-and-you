import React from 'react'
import Image from 'next/image'
import person3 from '../public/person3.png'

function ClientProfile() {
  return (
    <>
        <div className="flex flex-col mt-8 items-center">
            <div className="md:flex mx-16 items-center">
                <Image 
                    src={person3}
                    alt=''
                    height={700}
                    width={350}
                />
                <div className='text-slate-100 md:pl-14 mt-8 flex flex-col mb-10'>
                    <h1 className='text-4xl'>John Smith</h1>
                    <h2 className='text-2xl mt-4'>Preferred Name: John Smith</h2>
                    <h2 className='text-2xl mt-4'>Gender: (Gender) </h2>
                    <h2 className='text-2xl mt-4'>Phone Number: 111-111-1111 </h2>
                    <h2 className='text-2xl mt-4'>Email: loremipsum@gmail.com </h2>
                    <h2 className='text-2xl mt-4 max-w-md'>
                        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h2>

                </div>
            </div>
            <div className='flex justify-evenly w-full mt-8'>
                <div className='flex flex-col items-center max-w-[30%]'>
                    <div className=" bg-secondary-green text-slate-100 py-2 px-4 rounded-t-lg max-w-[50%] text-center">NOTES ON PATIENT</div>
                    <div className='bg-slate-100 border-0 rounded-xl p-8 pt-0 overflow-scroll'>
                        <ul className='list-disc list-inside'>
                            <li className='m-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </li>
                            <li className='m-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </li>                            
                            <li className='m-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </li>                            
                            <li className='m-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </li>                        
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='bg-secondary-green text-slate-100 py-2 px-4 rounded-t-lg max-w-[30%] text-center'>AVERAGE MOOD</div>
                    <div className='border rounded-xl h-[550px] w-[750px] bg-slate-200'></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ClientProfile