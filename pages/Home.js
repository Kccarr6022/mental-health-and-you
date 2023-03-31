import React from "react"
import Image from "next/image"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="bg-primary-green">
      <NavBar />
      {/* Here is the title section */}
      <section className="relative h-max">
        <div className="w-3/5 bg-gradient-to-r">
          <Image 
            src="/person.png"
            alt="Picture of person"
            width={800}
            height={800}
          />

        </div>
        <span className="absolute top-0 right-25 w-1/2 bottom-0 pointer-events-none"></span>
        <div className="absolute top-0 right-0 w-1/2 bottom-0 bg-primary-green text-primary-white text-center">
          <h1 className="ml-auto mt-48 text-6xl font-bold">Mental Health & You</h1>
          <p className="home-text w-1/2 mx-auto py-5 text-2xl">Online virtual counseling services from the comfort of your own home.</p>
          <hr className="w-1/3 mx-auto px-10" />
          <p className="p-5 text-2xl">Specializations in anxiety, trauma, depression, and more.</p>
          <button
            onClick={() => {
              console.log("clicked")
            }}
            className="z-50 rounded-full border-2 text-4xl font-semibold mt-5 p-4 px-8 hover:bg-primary-green hover:bg-primary-white"
          >
            <a href="/learnmore">Learn More</a>
          </button>
        </div>
      </section>
      <hr className="bg-secondary-green h-5 my-0 w-full border-0" />

      {/* Here is the overview section */}
      <section className="flex text-primary-white bg-primary-green p-32 h-2/3">
        <div className="w-1/2">
          <div className="w-4/5 block my-auto">
            <h2 className="text-5xl">Mental Health & You</h2>
            <p className="home-text leading-12 text-2xl mt-2 mb-10">
              <bold className="font-bold">Mental Health & You</bold> provides clients with <bold className="font-bold">passionate and certified</bold>{" "}
              mental health counseling. Our knowledge ensures that we understand the best ways to address a client’s needs effectively. If you’re
              looking feel happier, feel more fulfilled, or feel more connected and at peace with yourself and your relationships, then{" "}
              <bold className="font-bold">you’re in the right place!</bold>
            </p>
            <button className="rounded-full mx-auto border-2 text-2xl w-80 font-bold mt-5 p-4 group-hover:stroke-white block">
              <a href="/appointment">Book an Appointment</a>
            </button>
          </div>
        </div>
        <div className="w-1/2 border-0 rounded-2xl overflow-hidden h-full">
          <Image 
              src="/people.png"
              alt="Picture of person"
              width={700}
              height={700}
            />
        </div>
      </section>

      {/* Here is the team */}
      <section className="flex text-primary-white bg-primary-green p-10 h-2/3">
        <div className="w-1/2">
        <Image 
              src="/person2.png"
              alt="Picture of person"
              width={500}
              height={500}
            />
        </div>
        <div className="w-1/2">
          <h2 className="text-5xl">Our Team</h2>
          <p className="home-text leading-12 text-2xl mt-2 mb-24">
            As <bold className="font-bold">licensed</bold> mental health counselors, we strive to use our expertise in order to create a{" "}
            <bold className="font-bold">comfortable and safe environment for you.</bold> Counseling services have helped{" "}
            <bold className="font-bold">countless people</bold> get through stressful challenges in the past, and now with the right tools and a
            better approach to situations, we <bold className="font-bold">guarantee</bold> a better outlook on any issues that life brings your way.
          </p>
          <p className="home-text leading-12 text-2xl mt-2 mb-10">
            If you are interested, please contact us via our <bold className="font-bold">contact page</bold>, or through our{" "}
            <bold className="font-bold">chat tab function</bold> at the bottom right of the page!
          </p>
          <button className="rounded-full mx-auto border-2 text-2xl w-80 font-bold mt-5 p-4 group-hover:stroke-white block">
            <a href="/contact">Contact Us</a>
          </button>
        </div>
      </section>

      {/* Here is the about us section */}
      <section className="flex text-primary-white bg-primary-green p-10 h-2/3">
        <div className="w-1/2">
          <h2 className="text-5xl w-4/5">About Us</h2>
          <p className="home-text leading-12 text-2xl mt-2 mb-10 w-4/5">
            With a background in mental health, <bold className="font-bold">Mattheo Cagliano</bold> received and undergraduate degree at Florida Gulf
            Coast University in
            <bold className="font-bold"> psychology.</bold>
            <br /> From there, he trained to be a <bold>clinical mental health counselor</bold> for a year before pivoting into another program that
            gave him the opportunity to create Mental Health & You.
          </p>
          <button className="rounded-full mx-auto border-2 text-2xl w-80 font-bold mt-5 p-4 group-hover:stroke-white block">
            <a href="/about">Learn More</a>
          </button>
        </div>
        <div className="w-1/2">
        <Image 
              src="/person3.png"
              alt="Picture of person"
              width={500}
              height={500}
            />
        </div>
      </section>
      <hr className="bg-secondary-green h-5 my-0 w-full border-0"/>

      {/* Here is the quote section */}
      <section className="relative w-full text-primary-white text-center flex justify-center">
      <Image 
              src="/quote-background.jpg"
              alt="Picture of person"
              width={1200}
              height={700}
            />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-primary-green via-green-transparent to-primary-green"></div>
        <div className="absolute my-auto top-0 bottom-0 h-fit w-3/4 left-0 right-0 mx-auto">
          <h2 className="text-4xl">
            <bold>“One is not always happy when one is good; but one is always good when one is happy”</bold>
          </h2>
          <br />
          <h3 className="text-xl">- Oscar Wilde</h3>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default HomePage
