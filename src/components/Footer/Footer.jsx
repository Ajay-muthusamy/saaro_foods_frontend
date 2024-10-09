import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 font-poppins">
      <div className="container mx-auto flex-col md:flex-row flex justify-around gap-5">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-semibold mb-4">SAROMA AGRO FOODS</h1>
          <p className="w-full md:w-80 text-center md:text-left text-sm leading-relaxed">
            171/5-A, KKC Complex, Tiruchengode Road, Sankari, Salem Dt.
            Tamilnadu 637 301. India
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h1 className="bg-yellow-600 rounded-full px-8 py-2 mb-4 text-center">
            FOR ENQUIRY
          </h1>
          <h1 className="text-lg font-medium">+91 99422 08824</h1>
        </div>
      </div>

      <div className="border-t border-gray-700 my-6"></div>

      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Saroma Agro Foods. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
