import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <section className="w-full min-h-[85vh] h-fit flex items-center justify-center bg-primary-green overflow-hidden">
        <div className="w-3/4 sm:w-[680px] h-fit sm:h-[467px] bg-primary-white rounded-3xl grid grid-cols-1 sm:grid-cols-2 my-4 p-4">
          <div className="flex items-center justify-center">
            <img src={"/logo.png"} className="w-3/4 my-4" />
          </div>
          <div className="relative grid grid-cols-1 gap-1">
            <h1 className="mt-12 text-xl font-bold text-center sm:text-2xl md:text-3xl lg:text-4xl">
              Member Login
            </h1>
            <div>
              <input
                type="text"
                placeholder="Username"
                className="block w-3/4 h-12 pl-2 mx-auto my-4 text-base sm:text-lg md:text-xl lg:text-2xl"
              />
              <input
                type="password"
                placeholder="Password"
                className="block w-3/4 h-12 pl-2 mx-auto my-4 text-base sm:text-lg md:text-xl lg:text-2xl"
              />
            </div>
            <div className="grid grid-cols-1 gap-2 sm:gap-2">
              <button className="w-3/4 p-1 mx-auto text-base text-white bg-secondary-green rounded-2xl sm:text-lg md:text-xl lg:text-2xl">
                Login
              </button>
              <button
                className="w-3/4 p-1 mx-auto text-base text-white bg-secondary-green rounded-2xl sm:text-lg md:text-xl lg:text-2xl"
                onClick={() => {
                  router.push("/preassessment");
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
