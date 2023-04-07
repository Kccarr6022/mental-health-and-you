import React from "react"
import { BsFacebook } from "react-icons/bs"

const Footer = () => {
    return (
        <div className="bg-footer-background-green h-32 pt-8">
            <div className="inline">
                <ul className="items-center text-xl">
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <a href="/">Home</a>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <a href="/">Counselors</a>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <a href="/">Services</a>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <a href="/">Blog</a>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <a href="/">Booking</a>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <a href="/">About</a>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <a href="/">FAQ</a>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <a href="/">Contact</a>
                    </li>
                </ul>
                <div className="float-right">
                    <ul>
                        <li>
                            <a href="/">
                                <BsFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="/"></a>
                        </li>
                        <li>
                            <a href="/"></a>
                        </li>
                        <li>
                            <a href="/"></a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Footer
