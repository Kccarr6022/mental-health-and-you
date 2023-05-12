import React from "react"
import { BsFacebook } from "react-icons/bs"
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="bg-footer-background-green h-32 pt-8">
            <div className="inline">
                <ul className="items-center text-xl">
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link to="/">Counselors</Link>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link to="/">Services</Link>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link to="/">Blog</Link>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link to="/">Booking</Link>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link to="/">About</Link>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link to="/">FAQ</Link>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
                <div className="float-right">
                    <ul>
                        <li>
                            <Link href="/">
                                <BsFacebook />
                            </Link>
                        </li>
                        <li>
                            <Link href="/"></Link>
                        </li>
                        <li>
                            <Link href="/"></Link>
                        </li>
                        <li>
                            <Link href="/"></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Footer
