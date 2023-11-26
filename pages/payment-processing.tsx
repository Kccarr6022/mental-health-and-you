import BenefitsCheckList from "@/components/BenefitsCheckList";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

const paymentProcessing = () => {
  return (
    <>
      <Navbar />
      <section className="bg-primary-green min-h-[100vh] h-fit py-8 text-primary-white text-center">
        <div className=" lg:w-5/6 mx-auto">
          <h1 className="pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-[75%] mx-auto">
            Welcome to Mental Health and You!
          </h1>
          <div className="relative">
            <div className="circle-left w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 left-[10%] rounded-full"></div>
            <hr className="border-2 md:border-4 lg:border-8 border-[#5EC7B6] w-[80%] mx-auto" />
            <div className="circle-right w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 right-[10%] rounded-full"></div>
          </div>
        </div>
        <small className="text-xs mt-4 mb-6 text-left leading-7 font-semibold">
          *Payment Processing located at the bottom
        </small>
        <div className="w-5/6 mx-auto sm:w-4/6 lg:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-[1.5em]">
            What is next?
          </h2>
          <ul className="text-base font-semibold text-left list-disc list-inside leading-7 mb-[1.5em]">
            <li>You will be matched with a qualified and licensed therapist</li>
            <li>
              Your therapist will review what you have shared with them and
              reach out to you
            </li>
            <li>From there, you can begin communicating with your therapist</li>
          </ul>
        </div>
        <div className="w-5/6 mx-auto sm:w-4/6 lg:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl my-2 font-bold mb-[1.5em]">
            What is the therapy process?
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-left leading-7 mb-[1.5em]">
            If you have never been to therapy before, we have some information
            that may be helpful to you as you prepare.
          </p>
        </div>
        <div className="w-5/6 mx-auto sm:w-4/6 lg:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl my-2 font-bold mb-[1.5em]">
            Who will be my therapist?
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-left leading-7 mb-[1.5em]">
            We will look for a therapist that best fits your previously
            submitted information
          </p>
        </div>
        <div className="w-5/6 mx-auto sm:w-4/6 lg:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl my-2 font-bold mb-[1.5em]">
            How to I get in contact with my therapist?
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-left leading-7 mb-[1.5em]">
            You will have multiple options to communicate with your therapist,
            from phone calls to video meetings. You also have control over
            scheduling your monthly live meeting with your therapist.
          </p>
        </div>
        <div className="w-5/6 mx-auto sm:w-4/6 lg:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl my-2 font-bold mb-[1.5em]">
            What if I am not satisfied with my therapist?
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-left leading-7 mb-[1.5em]">
            You can change your therapist at any time by requesting to be
            matched with a another. All of our therapists have arrays of
            qualifications and expertise that are available based on your
            location, preferences, and therapist availability.
          </p>
        </div>
        <div className="w-5/6 mx-auto sm:w-4/6 lg:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl my-2 font-bold mb-[1.5em]">
            What is the pricing like?{" "}
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-left leading-7 mb-[1.5em]">
            Mental Health and You starts at 249.99 a month, roughly totaling 62$
            a week. Where as traditional therapist can cost anywhere from 150$
            to 180$, your Mental Health and You subscription comes with one
            secure meeting with your therapist a month, unlimited texting
            capability with your therapist, and fully HIPAA compliant video
            calls to ensure your meetings are safe and secure. The bill is
            renewed every 4 weeks unless cancelled.
          </p>
        </div>
        <div className="w-5/6 mx-auto sm:w-4/6 lg:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl my-2 font-bold mb-[1.5em]">
            How long will it take?
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-left leading-7 mb-[1.5em]">
            As long as you need it. You can manage your membership from your
            account page.
          </p>
        </div>
        <h1 className="pt-3 pb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-3/4 mx-auto">
          Mental Health and You vs Traditional Therapy
        </h1>
        <div className="relative">
          <div className="circle-left w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 left-[10%] rounded-full"></div>
          <hr className="border-2 md:border-4 lg:border-8 border-[#5EC7B6] w-[80%] mx-auto" />
          <div className="circle-right w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 right-[10%] rounded-full"></div>
        </div>
        <div className="mx-auto lg:w-5/6 py-4 mt-4">
          <BenefitsCheckList />
        </div>
        <div className=" lg:w-5/6 mx-auto">
          <h1 className="pt-4 pb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-[75%] mx-auto">
            Payment
          </h1>
          <div className="relative">
            <div className="circle-left w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 left-[10%] rounded-full"></div>
            <hr className="border-2 md:border-4 lg:border-8 border-[#5EC7B6] w-[80%] mx-auto" />
            <div className="circle-right w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 right-[10%] rounded-full"></div>
          </div>
        </div>
        <div className="w-5/6 mx-auto sm:w-4/6 lg:w-1/2">
          <small className="text-xs mt-4 mb-6 text-left leading-7 font-semibold">
            *Monthly subscriptions start at{" "}
            <span className="font-bold">249.99 a month</span>. Subscription will
            be automatically renewed every month until cancellation.
          </small>
          <div className="h-fit w-fit mx-auto mt-6">
            <div className="bg-secondary-green rounded-t-xl h-8 w-36 mx-auto flex align-middle justify-center">
              <h1 className="text-xl">Credit/Debit</h1>
            </div>
            <div className="rounded-xl p-4 max-w-full w-72 h-fit mx-auto border-solid border-4 border-secondary-green items-center grid">
              <label htmlFor="name" className="text-base">
                Name on Card
              </label>
              <input
                id="name"
                type="text"
                className="rounded-md border-2 bg-[#D9D9D9] border-primary-green p-2 mx-auto mb-[1.5em] text-base h-8 text-gray-900"
              />
              <label htmlFor="cardNumber" className="text-base">
                Card Number
              </label>
              <input
                id="cardNumber"
                type="text"
                className="rounded-md border-2 bg-[#D9D9D9] border-primary-green p-2 mx-auto mb-[1.5em] text-base h-8 text-gray-900"
              />
              <label htmlFor="expirationDate" className="text-base">
                Expiration Date
              </label>
              <input
                id="expirationDate"
                type="text"
                className="rounded-md border-2 bg-[#D9D9D9] border-primary-green p-2 mx-auto mb-[1.5em] text-base h-8 text-gray-900"
              />
              <label htmlFor="securityCode" className="text-base">
                Security Code
              </label>
              <input
                id="securityCode"
                type="text"
                className="rounded-md border-2 bg-[#D9D9D9] border-primary-green p-2 mx-auto mb-[1.5em] text-base h-8 text-gray-900"
              />
              <label htmlFor="billingAddress" className="text-base">
                Billing Address
              </label>
              <input
                id="billingAddress"
                type="text"
                className="rounded-md border-2 bg-[#D9D9D9] border-primary-green p-2 mx-auto mb-[1.5em] text-base h-8 text-gray-900"
              />
              <button className="rounded-xl bg-secondary-green text-primary-white w-3/4 mx-auto p-2">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default paymentProcessing;
