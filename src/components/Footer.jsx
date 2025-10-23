import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-8">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">
            WarmPaws – Pet Care in Winter
          </h3>
          <p>Email: info@warmpaws.com</p>
          <p>Phone: +880 123 456 789</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
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
        </div>

        {/* Policies */}
        <div className="text-center md:text-right">
          <p>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </p>
          <p>
            <a href="/terms" className="hover:underline">
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
