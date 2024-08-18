import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import BenefitsCheckList from "@/components/BenefitsCheckList";
import HoroAccentLine from "@/components/HoroAccentLine";

const HomePage = () => {
  return (
    <div className="w-full bg-primary-green md:overflow-hidden">
      <NavBar />
      {/* Here is the title section */}
      <section className="relative w-full my-8 h-fit md:overflow-hidden md:my-0">
        <div className="hidden w-4/5 md:block">
          <Image src="/person.png" width={1250} height={1250} alt="" />
        </div>
        <span className="top-0 bottom-0 w-1/2 pointer-events-none md:absolute bg-gradient-to-r from-transparent via-transparent to-primary-green"></span>
        <div className="top-0 bottom-0 right-0 items-center justify-center my-auto text-center md:absolute md:flex sm:w-full md:w-1/2 bg-primary-green text-primary-white">
          <div className="">
            <h1 className="text-6xl font-bold">Mental Health & You</h1>
            <p className="home-text max-w-[50%] mx-auto py-5 text-2xl">
              Online counseling services from the comfort of your own home.
            </p>
            <hr className="w-1/3 px-10 mx-auto" />
            <p className="mt-6 text-2xl">
              Specializations in anxiety, trauma, depression, and more.
            </p>
            <div className="grid w-1/2 grid-cols-1 gap-2 mx-auto mt-6 sm:grid-cols-2">
              <button className="p-6 font-semibold transition-all duration-200 border-2 rounded-3xl hover:bg-secondary-green hover:border-primary-green">
                <Link href="/about">Learn More</Link>
              </button>
              <button className="p-6 font-semibold transition-all duration-200 border-2 rounded-3xl hover:bg-secondary-green hover:border-primary-green">
                <Link href="/preassessment">Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr className="w-full h-5 my-0 border-0 bg-secondary-green" />

      {/* Here is the overview section */}
      <section className="md:flex text-primary-white bg-primary-green md:p-32 h-2/3">
        <div className="md:w-1/2">
          <div className="block p-8 my-auto md:w-4/5">
            <h2 className="text-5xl">Mental Health & You</h2>
            <p className="mt-2 mb-10 text-2xl home-text leading-12">
              <span className="font-bold">Mental Health & You</span> provides
              clients with{" "}
              <span className="font-bold">passionate and certified</span> mental
              health counseling. Our knowledge ensures that we understand the
              best ways to address a client’s needs effectively. If you’re
              looking feel happier, feel more fulfilled, or feel more connected
              and at peace with yourself and your relationships, then{" "}
              <span className="font-bold">you’re in the right place!</span>
            </p>
            <button className="block p-4 mx-auto mt-5 text-2xl font-bold border-2 rounded-full md:w-80 group-hover:stroke-white">
              <Link href="/booking">Book an Appointment</Link>
            </button>
          </div>
        </div>
        <div className="m-8 overflow-hidden border-0 rounded-xl md:m-0">
          <Image
            src="/people.png"
            width={550}
            height={550}
            alt=""
            className="mx-auto md:mx-0"
          />
        </div>
      </section>
      <HoroAccentLine />

      {/* Here is the team */}
      <section className="p-10 overflow-hidden md:flex text-primary-white bg-primary-green justify-evenly">
        <div className="m-8 overflow-hidden border-0 rounded-xl md:m-0">
          <Image
            src="/person2.png"
            width={550}
            height={550}
            alt=""
            className="mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="flex justify-center my-8 text-5xl md:justify-start ">
            Our Team
          </h2>
          <p className="mt-2 mb-24 text-2xl home-text leading-12">
            As <span className="font-bold">licensed</span> mental health
            counselors, we strive to use our expertise in order to create a{" "}
            <span className="font-bold">
              comfortable and safe environment for you.
            </span>{" "}
            Counseling services have helped{" "}
            <span className="font-bold">countless people</span> get through
            stressful challenges in the past, and now with the right tools and a
            better approach to situations, we{" "}
            <span className="font-bold">guarantee</span> a better outlook on any
            issues that life brings your way.
          </p>
          <p className="mt-2 mb-10 text-2xl home-text leading-12">
            If you are interested, please contact us via our{" "}
            <span className="font-bold">contact page</span>, or through our{" "}
            <span className="font-bold">chat tab function</span> at the bottom
            right of the page!
          </p>
          <button className="block p-4 mx-auto mt-5 text-2xl font-bold border-2 rounded-full w-80 group-hover:stroke-white">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </section>

      <HoroAccentLine />

      {/* Here is the benefits section */}
      <section className="my-12">
        <h2 className="flex justify-center w-4/5 mx-auto my-2 mb-12 text-5xl text-center text-primary-white">
          Mental Health & You vs Traditional
        </h2>
        {/* <div className="relative mb-8 sm:w-[75%] mx-auto">
          <div className="circle-left w-4 h-4 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 left-[5%] rounded-full"></div>
          <hr className="border-2 border-[#5EC7B6] w-[90%] mx-auto" />
          <div className="circle-right w-4 h-4 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 right-[5%] rounded-full"></div>
        </div> */}
        <BenefitsCheckList />
      </section>

      <HoroAccentLine />

      {/* Here is the about us section */}
      <section className="p-10 overflow-hidden md:flex text-primary-white bg-primary-green justify-evenly">
        <div className="md:w-1/2">
          <h2 className="flex justify-center my-6 text-5xl md:justify-start">
            About Us
          </h2>
          <p className="mt-2 mb-10 text-2xl home-text leading-12">
            With a background in mental health,{" "}
            <span className="font-bold">Mattheo Cagliano</span> received and
            undergraduate degree at Florida Gulf Coast University in
            <span className="font-bold"> psychology.</span>
            <br /> From there, he trained to be a{" "}
            <span>clinical mental health counselor</span> for a year before
            pivoting into another program that gave him the opportunity to
            create Mental Health & You.
          </p>
          <button className="block p-4 mx-auto mt-5 text-2xl font-bold border-2 rounded-full w-80 group-hover:stroke-white">
            <Link href="/about">Learn More</Link>
          </button>
        </div>
        <Image
          src="/person3.png"
          width={550}
          height={550}
          alt=""
          className="pl-0 mx-auto mt-10 border-0 md:mx-0 md:pl-20 md:mt-0 rounded-xl"
        />
      </section>
      <hr className="w-full h-5 my-0 border-0 bg-secondary-green" />

      {/* Here is the quote section */}
      <section className="relative w-full max-h-[75vh] text-primary-white text-center overflow-hidden">
        <img
          src="/quote-background.jpg"
          alt=""
          className="w-full h-full mx-auto md:mx-0"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-primary-green via-green-transparent to-primary-green"></div>
        <div className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto h-fit">
          <div className="w-3/4 mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              <span className="font-bold">
                “One is not always happy when one is good; but one is always
                good when one is happy”
              </span>
            </h2>
            <br />
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              - Oscar Wilde
            </h3>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
