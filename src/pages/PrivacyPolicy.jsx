import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
   
      <div className="w-11/12 mx-auto  p-6 bg-white shadow-md rounded-lg mt-10 mb-10">
       
        <h1 className="text-3xl font-bold text-orange-600 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-6">
          Effective Date: <strong>October 24, 2025</strong>
        </p>

        <p className="text-gray-700 mb-4">
          Welcome to <strong>PetCare</strong>. Your privacy is very important to
          us. This Privacy Policy explains how we collect, use, and protect your
          personal information when you use our website or services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-500">
          1. Information We Collect
        </h2>
        <ul className="list-decimal list-inside text-gray-700 space-y-1">
          <li>
            Personal Information such as your name, email address, and password
            when you register.
          </li>
          <li>
            Non-personal data like browser type, device info, and usage
            statistics.
          </li>
          <li>
            Cookies to improve your browsing experience and website performance.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-500">
          2. How We Use Your Information
        </h2>
        <ul className="list-decimal list-inside text-gray-700 space-y-1">
          <li>To create and manage your PetCare account.</li>
          <li>
            To send important updates or pet care tips (with your consent).
          </li>
          <li>To improve our website and personalize your experience.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-500">
          3. Information Sharing
        </h2>
        <p className="text-gray-700 mb-4">
          We do <strong>not</strong> sell, rent, or share your personal data
          with third parties. However, we may share limited information if
          required by law.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-500">
          4. Data Security
        </h2>
        <p className="text-gray-700 mb-4">
          We take appropriate security measures to protect your information from
          unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-500">
          5. Your Choices
        </h2>
        <ul className="list-decimal list-inside text-gray-700 space-y-1">
          <li>You can update or delete your account at any time.</li>
          <li>You can disable cookies through your browser settings.</li>
          <li>
            You can unsubscribe from email notifications whenever you want.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-500">
          6. Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated date.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-orange-500">
          7. Contact Us
        </h2>
        <p className="text-gray-700 mb-2">
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <p className="text-gray-700">
          📧 Email:{" "}
          <a
            href="mailto:support@petcare.com"
            className="text-blue-500 hover:underline"
          >
            support@petcare.com
          </a>
        </p>

        <p className="text-center text-gray-500 text-sm mt-10">
          © 2025 PetCare. All rights reserved.
        </p>
       
      </div>
   
  );
};

export default PrivacyPolicy;
