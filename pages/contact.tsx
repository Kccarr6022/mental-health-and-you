import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="bg-primary-green text-primary-white min-h-[calc(100vh-80px)] py-10">
        <div className="grid-cols-1 grid sm:grid-cols-2">
          <div className="flex-col justify-center w-4/5 mx-auto">
            <h1 className="pb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mx-auto text-center">
              Get in touch with us
            </h1>
            {[
              "Contact us if you if you are looking for mental health services, or if you have any questions or concerns regarding Mental Health & You. We have a direct email and phone number for you to use.",
              "You can also leave a message directly through our contact page, and we will get back to you as soon as we can.",
              "Our live chat feature is also open to any visitors if they want to speak to someone through our website.",
            ].map((key, value) => {
              return (
                <>
                  <p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl"
                    key={key}
                  >
                    {key}
                  </p>
                  <br />
                </>
              );
            })}
            <div className="bg-blue">
              <p className="text-xs sm:text-base md:text-lg lg:text-xl text-center">
                mentalhealthandyou6@gmail.com
              </p>
            </div>
            <div className="bg-blue">
              <p className="text-xs sm:text-base md:text-lg lg:text-xl text-center">
                772-634-5324
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center mx-auto gap-2  w-4/5">
            <label className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl">
              Name
              <input className="text-black rounded-md mx-auto py-1 w-full pl-2" />
            </label>
            <label className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl">
              Email
              <input className="text-black rounded-md mx-auto py-1 w-full pl-2" />
            </label>
            <label className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl">
              Phone
              <input className="text-black rounded-md mx-auto py-1 w-full pl-2" />
            </label>
            <label className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl">
              Address
              <input className="text-black rounded-md mx-auto py-1 w-full pl-2" />
            </label>
            <label className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl sm:col-span-2">
              Subject
              <input className="text-black rounded-md mx-auto py-1 w-full pl-2" />
            </label>
            <label className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl sm:col-span-2">
              Message
              <textarea className="rounded-md mx-auto h-[20rem] w-full text-black text-base pl-2" />
            </label>
            <button>Submit</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
