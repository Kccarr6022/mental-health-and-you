import Footer from "@/components/Footer"
import HoroAccentLine from "@/components/HoroAccentLine"
import Navbar from "@/components/NavBar"
import Image from "next/image"
import {FaArrowUp} from 'react-icons/fa'
import {FaArrowDown} from 'react-icons/fa'

const Counselors = (props) => {

    return(
        <>
            <div className="flex justify-center my-5">
                <Image 
                    src={props.src}
                    alt=''
                    height={500}
                    width={250}
                />
                <div className="text-slate-100 text-xl ml-5 max-w-[35%]">
                    <div>Name: <span className="text-lg mt-[2px] ml-3">John Smith</span></div>
                    <div className="text-xl">Specialties:</div>
                    <div className=" text-lg mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.                        
                    </div>
                    <span className="text-lg bg-secondary-green text-center px-5 py-1 border-0 rounded-md">
                        PROFILE
                    </span>
                </div>
                <div className="flex flex-col justify-center ml-8">
                    <div className="text-slate-400 text-4xl">
                        <FaArrowUp />
                    </div>
                    <div className="text-secondary-green text-4xl mt-4">
                        <FaArrowDown />
                    </div>
                </div>
            </div>
            <HoroAccentLine />
            <span className="text-lg bg-secondary-green text-center py-1 border-0 rounded-md min-w-[7rem] text-slate-100 translate-y-[-.7rem] mb-[5%]">
                BOOK
            </span>            
        </>
    )
} 

export default Counselors
