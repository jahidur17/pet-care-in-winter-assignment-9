import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaCat, FaCalendarCheck } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-8 rounded-xl w-11/12 mx-auto">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">
            WarmPaws – Pet Care in Winter
          </h3>
          <p>Email: jahidurrahman9117@gmail.com</p>
          <p>Phone: +880 123 456 789</p>
          <p>present-Address: Pabna, Bangladesh</p>
          <p>permanent-Address: Rajshahi, Bangladesh</p>
        </div>

        <div className="flex gap-4 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.battersea.org.uk/pet-advice/cat-care-advice/winter-cat-care"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCat />
          </a>
        </div>

        <div className="text-center md:text-right flex gap-4">
          <p>
            <a href="/privacy-policy" className="hover:underline text-yellow-400">
              Privacy Policy
            </a>
          </p>
          <p>
            <a href="/terms" className="hover:underline text-blue-700">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} WarmPaws. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
