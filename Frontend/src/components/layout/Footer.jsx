import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-white">SCMS</h2>
          <p className="mt-4 text-sm leading-6">
            Smart Complaint Management System that helps users report,
            track, and resolve complaints efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Support
          </h3>

          <ul className="space-y-3">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer transition" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer transition" />
            <FaGithub className="hover:text-white cursor-pointer transition" />
          </div>
        </div>

      </div>

      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} SCMS. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;