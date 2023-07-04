import HoroAccentLine from '@/components/HoroAccentLine'
import Image from 'next/image'
import Navbar from '@/components/NavBar'
import person3 from '../public/person3.png'
import person4 from '../public/person4.png'
import React from 'react'
import Footer from '@/components/Footer'

function About() {
  return (
    <>
        <Navbar />
        <div className='bg-primary-green md:flex flex-col items-center text-slate-100 px-4'>
            <div className=''>
                <h1 className='text-5xl pt-10 pb-6 text-center'>About Us</h1>
                <HoroAccentLine />
                <div className='md:flex justify-evenly md:w-full py-[3rem] items-center px-[10%] text-left'>
                    <Image 
                        src={person3}
                        alt=''
                        height={800}
                        width={400}
                    />
                    <div className='md:w-[35%] md:flex flex-col items-center'>
                        <h2 className='text-4xl py-5 text-center'>Matteo Cagliano</h2>
                        <HoroAccentLine />
                        <div className='my-4 text-lg'>
                        <span className='font-bold'>I have a background in the mental health field</span> and obtained a undergraduate degree in Psychology at Florida Gulf Coast University. 
                        Then, I trained as a <span className='font-bold'>Clinical Mental Health counselor</span> for a year, also at FGCU. Soon after, I pivoted to another program that allowed 
                        me to create <span className='font-bold'>Mental health & You</span>.
                        </div>
                        <div className='mb-4 text-lg'>
                            <span className='font-bold'>I understand what it is like</span> to suffer from trauma, grief, and depression, which is why I, and my team, 
                            are <span className='font-bold'>passionate</span> about helping people through struggles like these. After seeing 17 different counselors and dealing with these feelings, 
                            <span className='font-bold'>I was inspired to create a more effective solution</span>. 
                        </div>
                        <div className='pb-4 text-lg'>
                            From my experience at FGCU, <span className='font-bold'>I developed knowledge that helped me understand trauma, 
                            grief, and depression.</span> Through this process, I learned how to utilize my knowledge and resources given to me and wanted to <span className='font-bold'>take it to the next step</span> 
                            by creating this platform.
                        </div>
                        </div>
                </div>
            </div>
            <div className='md:flex w-full justify-center mx-4'>
                <div className='md:w-[50%] flex flex-col md:place-items-end place-items-center'>
                    <h1 className='text-4xl md:mr-[20%]'>Mental Health & You</h1>
                    <span className="flex items-center w-[100%] md:justify-end md:translate-x-[20px]">
                        <div className="border rounded-full border-secondary-green w-5 h-5 bg-secondary-green"/>
                        <hr className="border-2 border-secondary-green min-w-[80%]"></hr>
                        <div className="border rounded-full border-secondary-green w-5 h-5 bg-secondary-green place-items-end"/>
                    </span>
                </div>
                <div className='w-[55%]'>
                    <span className="hidden md:flex items-center w-[full] flex-grow">
                        <div className="border rounded-full border-secondary-green w-5 h-5 bg-secondary-green"/>
                        <hr className="border-2 border-secondary-green min-w-[80%]"></hr>
                        <div className="border rounded-full border-secondary-green w-5 h-5 bg-secondary-green"/>
                    </span>
                    <div className="hidden md:inline-block h-[50%] min-h-[1em] min-w-[4px] self-stretch bg-secondary-green rounded-sm ml-[8px]"></div>
                </div>
            </div>
            <div className='md:flex justify-evenly items-center pt-10'>
                <div className='md:max-w-[30%] mx-10'>
                    <div className='my-4 text-lg'>
                            As <span className='font-bold'>licensed Mental Health Counselors</span>, 
                            we strive to use our expertise in order to create a comfortable and safe environment for you
                        </div>
                        <div className='mb-4 text-lg'>
                            Counseling services <span className='font-bold'>have helped countless people get through stressful challenges</span> 
                            by questioning negative throughts and understanding the source of specific behaviors and emotional patterns. 
                        </div>
                        <div className='pb-4 text-lg'>
                            With the right tools and a better approach to situations, we <span className='font-bold'>guarentee </span> 
                            a better outlook on any issue that life brings your way.
                        </div>
                    
                </div>
                <div className='w-[400px] h-[400px] border-0 bg-slate-100 rounded-xl'>

                </div>
            </div>
            <div className='md:flex w-full justify-center pt-10'>
                <div className='w-[45%] md:flex'>
                    <span className="hidden md:flex w-[full] flex-grow place-content-end translate-x-[2.5%]">
                        <div className="border rounded-full border-secondary-green w-5 h-5 bg-secondary-green"/>
                        <hr className="border-2 border-secondary-green min-w-[80%] mt-2"></hr>
                        <div className="border rounded-full border-secondary-green w-5 h-5 bg-secondary-green"/>
                    </span>
                    <div className="hidden md:inline-block h-[50%] min-h-[1em] min-w-[4px] bg-secondary-green rounded-sm translate-y-[50%] translate-x-[250%]"></div>
                </div>
                <div className='md:w-[50%] flex flex-col'>
                    <h1 className='text-4xl md:mr-[20%] text-center'>Starting Prices</h1>
                    <span className="flex items-center w-[100%]">
                        <div className="border rounded-full border-secondary-green w-5 h-5 bg-secondary-green"/>
                        <hr className="border-2 border-secondary-green min-w-[80%]"></hr>
                        <div className="border rounded-full border-secondary-green w-5 h-5 bg-secondary-green place-items-end"/>
                    </span>
                </div>
            </div>
            <div className='md:flex justify-evenly w-full my-10'>
                <Image 
                    src={person4}
                    alt=''
                    height={800}
                    width={400}
                />
                <div className='md:max-w-[30%] text-left'>
                    <div className='my-4 text-xl'>
                            Prices starting at <span className='font-bold'>$249.99 for a monthly subscription</span> to  
                           Mental & You that provides these monthly benefits:
                    </div>
                    <ul className='text-xl list-disc ml-8'>
                        <li className='mb-5'>Unlimited texting features</li>
                        <li className='my-5'>One virtual online couselting session a month (30 - 45 minutes)</li>
                        <li className='my-5'>A secure HIPPA comliant zoom that will guarentee that nobody will be able to access or hack the virtual sessions, and more.</li>
                    </ul>
                    <div className='text-xl'>
                        If you are interested or have any concerns, plase consult our contact page and we will get back with you as soon as possible.
                    </div>
                    <div className='mt-2'>
                        -Matteo Cagliano
                    </div>
                    <div className='flex justify-center'>
                        <button className='border-2 rounded-full p-4 text-2xl mt-4 px-8'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
    
  )
}

export default About