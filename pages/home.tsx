import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import BenefitsCheckList from "@/components/BenefitsCheckList";
import HoroAccentLine from "@/components/HoroAccentLine";

const HomePage = () => {
  return (
    <div className="bg-primary-green w-full md:overflow-hidden">
      <NavBar />
      {/* Here is the title section */}
      <section className="relative h-fit w-full md:overflow-hidden my-8 md:my-0">
        <div className="w-4/5 hidden md:block">
          <Image src="/person.png" width={1250} height={1250} alt="" />
        </div>
        <span className="md:absolute top-0 w-1/2 bottom-0 bg-gradient-to-r from-transparent via-transparent to-primary-green pointer-events-none"></span>
        <div className="md:absolute md:flex top-0 right-0 sm:w-full md:w-1/2 bottom-0 text-center justify-center items-center bg-primary-green text-primary-white my-auto">
          <div className="">
            <h1 className="text-6xl font-bold">Mental Health & You</h1>
            <p className="home-text max-w-[50%] mx-auto py-5 text-2xl">
              Online counseling services from the comfort of your own home.
            </p>
            <hr className="w-1/3 mx-auto px-10" />
            <p className="text-2xl mt-6">
              Specializations in anxiety, trauma, depression, and more.
            </p>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 mt-6 w-1/2 mx-auto">
              <button className="rounded-3xl border-2 font-semibold p-6 hover:bg-secondary-green hover:border-primary-green transition-all duration-200">
                <Link href="/about">Learn More</Link>
              </button>
              <button className="rounded-3xl border-2 font-semibold p-6 hover:bg-secondary-green hover:border-primary-green transition-all duration-200">
                <Link href="/preassessment">Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr className="bg-secondary-green h-5 my-0 w-full border-0" />

      {/* Here is the overview section */}
      <section className="md:flex text-primary-white bg-primary-green md:p-32 h-2/3">
        <div className="md:w-1/2">
          <div className="p-8 md:w-4/5 block my-auto">
            <h2 className="text-5xl">Mental Health & You</h2>
            <p className="home-text leading-12 text-2xl mt-2 mb-10">
              <span className="font-bold">Mental Health & You</span> provides
              clients with{" "}
              <span className="font-bold">passionate and certified</span> mental
              health counseling. Our knowledge ensures that we understand the
              best ways to address a client’s needs effectively. If you’re
              looking feel happier, feel more fulfilled, or feel more connected
              and at peace with yourself and your relationships, then{" "}
              <span className="font-bold">you’re in the right place!</span>
            </p>
            <button className="rounded-full mx-auto border-2 text-2xl md:w-80 font-bold mt-5 p-4 group-hover:stroke-white block">
              <Link href="/booking">Book an Appointment</Link>
            </button>
          </div>
        </div>
        <div className="rounded-xl border-0 overflow-hidden m-8 md:m-0">
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
      <section className="md:flex text-primary-white bg-primary-green p-10 justify-evenly overflow-hidden">
        <div className="rounded-xl border-0 overflow-hidden m-8 md:m-0">
          <Image
            src="/person2.png"
            width={550}
            height={550}
            alt=""
            className="mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-5xl my-8 flex justify-center md:justify-start ">
            Our Team
          </h2>
          <p className="home-text leading-12 text-2xl mt-2 mb-24">
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
          <p className="home-text leading-12 text-2xl mt-2 mb-10">
            If you are interested, please contact us via our{" "}
            <span className="font-bold">contact page</span>, or through our{" "}
            <span className="font-bold">chat tab function</span> at the bottom
            right of the page!
          </p>
          <button className="rounded-full mx-auto border-2 text-2xl w-80 font-bold mt-5 p-4 group-hover:stroke-white block">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </section>

      <HoroAccentLine />

      {/* Here is the benefits section */}
      <section className="my-12">
        <h2 className="text-5xl mb-12 my-2 flex justify-center text-center text-primary-white w-4/5 mx-auto">
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
      <section className="md:flex text-primary-white bg-primary-green p-10 justify-evenly overflow-hidden">
        <div className="md:w-1/2">
          <h2 className="text-5xl flex justify-center md:justify-start my-6">
            About Us
          </h2>
          <p className="home-text leading-12 text-2xl mt-2 mb-10">
            With a background in mental health,{" "}
            <span className="font-bold">Mattheo Cagliano</span> received and
            undergraduate degree at Florida Gulf Coast University in
            <span className="font-bold"> psychology.</span>
            <br /> From there, he trained to be a{" "}
            <span>clinical mental health counselor</span> for a year before
            pivoting into another program that gave him the opportunity to
            create Mental Health & You.
          </p>
          <button className="rounded-full mx-auto border-2 text-2xl w-80 font-bold mt-5 p-4 group-hover:stroke-white block">
            <Link href="/about">Learn More</Link>
          </button>
        </div>
        <Image
          src="/person3.png"
          width={550}
          height={550}
          alt=""
          className="mx-auto md:mx-0 md:pl-20 md:mt-0 pl-0 mt-10 rounded-xl border-0"
        />
      </section>
      <hr className="bg-secondary-green h-5 my-0 w-full border-0" />

      {/* Here is the quote section */}
      <section className="relative w-full min-h-[75vh] text-primary-white text-center overflow-hidden">
        <img
          src="/quote-background.jpg"
          alt=""
          className="mx-auto md:mx-0 w-full h-full"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-primary-green via-green-transparent to-primary-green"></div>
        <div className="absolute my-auto top-0 bottom-0 h-fit left-0 right-0 mx-auto">
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
