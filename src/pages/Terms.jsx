import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="w-full mx-auto py-10 text-center bg-base-100   shrink-0 shadow-2xl">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold mb-4 p-10 pb-5 text-blue-500">
        Terms & Conditions
      </h1>
      <p className="text-gray-700 leading-relaxed font-semibold">
        Welcome to WarmPaws! These terms and conditions outline the rules and
        regulations for using our Pet Care in Winter services.
      </p>
      <ol className="list-disc ml-6 mt-4 space-y-2 text-gray-600 font-semibold ">
        <li>Use the site responsibly and with care for your pets.</li>
        <li>Do not misuse or distribute our content without permission.</li>
        <li>
          We may update these terms at any time, so please review regularly.
        </li>
      </ol>
      <Footer></Footer>;
    </div>
  );
};
 


export default Terms;
