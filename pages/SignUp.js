import React from "react"
import NavBar from "../components/NavBar"

const SignUp = () => {
    return (
        <div className="relative">
            <NavBar />
            <section className="pt-36 font-lexend bg-primary-green text-primary-white">
                <h1 className="text-center text-6xl mt-24 mb-10">Account Creation</h1>
                <hr className="w-3/4 mx-auto" />
                <h2 className="text-center text-4xl mt-10 mb-2">A little more about you</h2>
                <div className="w-full md:w-1/2 py-5 bg-primary-green rounded-2xl border-[6px] border-secondary-green mx-auto text-[#A3A3A3]">
                    <h4 className="text-2xl ml-5">Full Name</h4>
                    <input className="w-4/5 md:w-2/5 my-5 h-10 rounded-lg border-2 pl-2 bg-textbox-white mx-5" placeholder="First" />
                    <input className="w-4/5 md:w-2/5 my-5 h-10 rounded-lg border-2 pl-2 bg-textbox-white mx-5" placeholder="Last" />
                    <h4 className="text-2xl ml-5">Contact</h4>
                    <input className="w-4/5 md:w-2/5 my-5 h-10 rounded-lg border-2 pl-2 bg-textbox-white mx-5" placeholder="Email" />
                    <input className="w-4/5 md:w-2/5 my-5 h-10 rounded-lg border-2 pl-2 bg-textbox-white mx-5" placeholder="Phone Number" />
                    {/* <label for="birthdate" className="text-2xl ml-5">
            Birthdate
          </label> */}
                    <input
                        id="birthdate"
                        className="w-4/5 md:w-1/5 my-5 h-10 rounded-lg border-2 pl-2 bg-textbox-white mx-5"
                        placeholder="MM/DD/YYYY"
                    />
                    <input id="gender" className="w-4/5 md:w-1/5 my-5 h-10 rounded-lg border-2 pl-2 bg-textbox-white mx-5" placeholder="Email" />
                    <input className="w-4/5 md:w-2/5 my-5 h-10 rounded-lg border-2 pl-2 bg-textbox-white mx-5" placeholder="Phone Number" />
                </div>
            </section>
        </div>
    )
}

export default SignUp
