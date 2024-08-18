import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="bg-primary-green text-primary-white min-h-[calc(100vh-80px)] py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex-col justify-center w-4/5 mx-auto">
            <h1 className="pb-4 mx-auto text-xl font-bold text-center sm:text-2xl md:text-3xl lg:text-4xl">
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
              <p className="text-xs text-center sm:text-base md:text-lg lg:text-xl">
                mentalhealthandyou6@gmail.com
              </p>
            </div>
            <div className="bg-blue">
              <p className="text-xs text-center sm:text-base md:text-lg lg:text-xl">
                772-634-5324
              </p>
            </div>
          </div>
          <div className="grid justify-center w-4/5 grid-cols-1 gap-2 mx-auto sm:grid-cols-2">
            <label className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl">
              Name
              <input className="w-full py-1 pl-2 mx-auto text-black rounded-md" />
            </label>
            <label className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl">
              Email
              <input className="w-full py-1 pl-2 mx-auto text-black rounded-md" />
            </label>
            <label className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl">
              Phone
              <input className="w-full py-1 pl-2 mx-auto text-black rounded-md" />
            </label>
            <label className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl">
              Address
              <input className="w-full py-1 pl-2 mx-auto text-black rounded-md" />
            </label>
            <label className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl sm:col-span-2">
              Subject
              <input className="w-full py-1 pl-2 mx-auto text-black rounded-md" />
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
