import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
    return (
        // Footer ok
        <footer className="bg-gray-900 text-gray-300 px-4 md:px-10 lg:px-20 py-10 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center md:text-left">

                <div>
                    <h3 className="text-xl font-bold text-white mb-3">QurbaniHat</h3>
                    <p className="text-sm leading-relaxed">
                        QurbaniHat is a modern livestock marketplace where you can easily
                        explore and book animals like cows, goats, and sheep for Qurbani.
                        We ensure quality, transparency, and trust.
                    </p>
                </div>


                <div className="flex flex-col items-center space-y-2">
                    <h3 className="text-xl font-bold text-white mb-3">Contact Info</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-1"><CiLocationOn className="text-2xl" /> Location: Dhaka, Bangladesh</li>
                        <li className="flex items-center gap-1"><CiPhone className="text-2xl" /> Phone: +880 1234-567890</li>
                        <li className="flex items-center gap-1"><MdOutlineEmail className="text-2xl" /> Email: support@qurbanihat.com</li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-xl font-bold text-white mb-3">Follow Us</h3>
                    <div className="flex justify-center md:justify-start gap-6 flex-wrap">
                        <a href="#" className="hover:text-white flex flex-col items-center gap-2">Facebook <CiFacebook className="text-2xl" /> </a>

                        <a href="#" className="hover:text-white flex flex-col items-center gap-2">Twitter <CiTwitter className="text-2xl" /></a>

                        <a href="#" className="hover:text-white flex flex-col items-center gap-2">Instagram <FaInstagram className="text-2xl" /></a>

                        <a href="#" className="hover:text-white flex flex-col items-center gap-2">YouTube <CiYoutube className="text-2xl" /></a>
                    </div>
                </div>

            </div>


            <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-5">
                © {new Date().getFullYear()} QurbaniHat. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;