import Footer from "@/components/Footer"
import HoroAccentLine from "@/components/HoroAccentLine"
import Navbar from "@/components/NavBar"
import Counselor from "../components/Counselor"

const Counselors = () => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className="flex flex-col items-center bg-primary-green pt-[3%]">
                <span className="text-4xl text-slate-100 mb-5">Counselors</span>
                <HoroAccentLine />
                <Counselor src="/person3.png" />
            </div>
            <Footer />
        </div>
    )
}

export default Counselors
