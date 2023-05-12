import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Link from 'next/link'

const HomePage = () => {
    return (
        <div className="bg-primary-green w-full overflow-hidden">
            <NavBar />
            {/* Here is the title section */}
            <section className="relative h-full w-full overflow-hidden">
                <div className="w-4/5">
                    <img src="person.png" />
                </div>
                <span className="absolute top-0 w-1/2 bottom-0 bg-gradient-to-r from-transparent via-transparent to-primary-green pointer-events-none"></span>
                <div className="absolute flex top-0 right-0 sm:w-full md:w-1/2 bottom-0 text-center justify-center items-center bg-primary-green text-primary-white my-auto">
                    <div className="h-1/2">
                        <h1 className="pt-1/2 sm:text-md md:text-lg lg:text-xl font-bold">Mental Health & You</h1>
                        <p className="home-text w-1/2 mx-auto py-5 sm:text-sm md:text-md lg:text-lg">
                            Online virtual counseling services from the comfort of your own home.
                        </p>
                        <hr className="w-1/3 mx-auto px-10" />
                        <p className="text-2xl">Specializations in anxiety, trauma, depression, and more.</p>
                        <button
                            onClick={() => {
                                console.log("clicked")
                            }}
                            className="z-50 rounded-3xl border-2 sm:text-2xl md:text-3xl lg:text-4xl font-semibold sm:mt-1 md:mt-3 lg:mt-5  sm:p-4 md:p-6 lg:p-8 hover:bg-primary-green hover:bg-primary-white"
                        >
                            <Link href='/learnmore'>Learn More</Link>
                        </button>
                    </div>
                </div>
            </section>
            <hr className="bg-secondary-green h-5 my-0 w-full" />

            {/* Here is the overview section */}
            <section className="flex text-primary-white bg-primary-green p-32 h-2/3">
                <div className="w-1/2">
                    <div className="w-4/5 block my-auto">
                        <h2 className="text-5xl">Mental Health & You</h2>
                        <p className="home-text leading-12 text-2xl mt-2 mb-10">
                            <span className="font-bold">Mental Health & You</span> provides clients with{" "}
                            <span className="font-bold">passionate and certified</span> mental health counseling. Our knowledge ensures that we
                            understand the best ways to address a client’s needs effectively. If you’re looking feel happier, feel more fulfilled, or
                            feel more connected and at peace with yourself and your relationships, then{" "}
                            <span className="font-bold">you’re in the right place!</span>
                        </p>
                        <button className="rounded-full mx-auto border-2 text-2xl w-80 font-bold mt-5 p-4 group-hover:stroke-white block">
                            <Link href="/appointment">Book an Appointment</Link>
                        </button>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src="people.png" className="w-3/5 rounded-xl mx-auto my-auto" />
                </div>
            </section>

            {/* Here is the team */}
            <section className="flex text-primary-white bg-primary-green p-10 h-2/3">
                <div className="w-1/2">
                    <img src="person2.png" className="w-3/5 rounded-xl mx-auto my-auto" />
                </div>
                <div className="w-1/2">
                    <h2 className="text-5xl">Our Team</h2>
                    <p className="home-text leading-12 text-2xl mt-2 mb-24">
                        As <span className="font-bold">licensed</span> mental health counselors, we strive to use our expertise in order to create a{" "}
                        <span className="font-bold">comfortable and safe environment for you.</span> Counseling services have helped{" "}
                        <span className="font-bold">countless people</span> get through stressful challenges in the past, and now with the right tools
                        and a better approach to situations, we <span className="font-bold">guarantee</span> a better outlook on any issues that life
                        brings your way.
                    </p>
                    <p className="home-text leading-12 text-2xl mt-2 mb-10">
                        If you are interested, please contact us via our <span className="font-bold">contact page</span>, or through our{" "}
                        <span className="font-bold">chat tab function</span> at the bottom right of the page!
                    </p>
                    <button className="rounded-full mx-auto border-2 text-2xl w-80 font-bold mt-5 p-4 group-hover:stroke-white block">
                        <Link href="/contact">Contact Us</Link>
                    </button>
                </div>
            </section>

            {/* Here is the about us section */}
            <section className="flex text-primary-white bg-primary-green p-10 h-2/3">
                <div className="w-1/2">
                    <h2 className="text-5xl w-4/5">About Us</h2>
                    <p className="home-text leading-12 text-2xl mt-2 mb-10 w-4/5">
                        With a background in mental health, <span className="font-bold">Mattheo Cagliano</span> received and undergraduate degree at
                        Florida Gulf Coast University in
                        <span className="font-bold"> psychology.</span>
                        <br /> From there, he trained to be a <span>clinical mental health counselor</span> for a year before pivoting into another
                        program that gave him the opportunity to create Mental Health & You.
                    </p>
                    <button className="rounded-full mx-auto border-2 text-2xl w-80 font-bold mt-5 p-4 group-hover:stroke-white block">
                        <Link href="/about">Learn More</Link>
                    </button>
                </div>
                <div className="w-1/2">
                    <img src="person3.png" className="w-3/5 rounded-xl mx-auto my-auto" />
                </div>
            </section>
            <hr className="bg-secondary-green h-5 my-0 w-full" />

            {/* Here is the quote section */}
            <section className="relative w-full text-primary-white text-center">
                <img src="quote-background.jpg" className="" />
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-primary-green via-green-transparent to-primary-green"></div>
                <div className="absolute my-auto top-0 bottom-0 h-fit w-3/4 left-0 right-0 mx-auto">
                    <h2 className="text-4xl">
                        <span>“One is not always happy when one is good; but one is always good when one is happy”</span>
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
