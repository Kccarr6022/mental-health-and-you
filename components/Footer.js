import React from "react"
import { BsFacebook } from "react-icons/bs"
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="bg-footer-background-green h-32 pt-8">
            <div className="inline">
                <ul className="items-center text-xl">
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link href="/">Counselors</Link>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link href="/">Services</Link>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link href="/">Blog</Link>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link href="/">Booking</Link>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link href="/">About</Link>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link href="/">FAQ</Link>
                    </li>
                    <li className="text-footer-text-green inline mx-5 cursor-pointer">
                        <Link href="/">Contact</Link>
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
