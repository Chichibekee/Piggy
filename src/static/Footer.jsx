import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-6 md:px-20 text-sm text-gray-700">
      {/* 🔥 Featured logos section */}
      <div className="max-w-7xl mx-auto mb-24"> {/* Increased mb to 24 for extra space */}
        <h1 className="text-center text-2xl font-bold mb-10">As featured in</h1>

        <div className="flex flex-wrap justify-center items-center gap-12 mb-24"> {/* Increased gap and mb */}
          <img src="src/assets/images/img1.png" alt="logo1" className="h-12 object-contain" />
          <img src="src/assets/images/img2.png" alt="logo2" className="h-12 object-contain" />
          <img src="src/assets/images/img3.png" alt="logo3" className="h-12 object-contain" />
          <img src="src/assets/images/img4.png" alt="logo4" className="h-12 object-contain" />
          <img src="src/assets/images/img5.png" alt="logo5" className="h-12 object-contain" />
          <img src="src/assets/images/img6.png" alt="logo6" className="h-12 object-contain" />
        </div>
      </div>

      {/* 🔥 Main footer grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo and badge */}
        <div>
          <h1 className="text-2xl font-bold mb-4">piggyvest</h1>
          <img
            src="src/assets/audit.avif"
            alt="NDPR Audit"
            className="w-32 mb-4"
          />
        </div>

        {/* Products */}
        <div>
          <h2 className="font-semibold mb-3">Products</h2>
          <ul className="space-y-2">
            <li>Piggybank</li>
            <li>Invest</li>
            <li>Safelock</li>
            <li>Target Savings</li>
            <li>Flex Naira</li>
            <li>Flex Dollar</li>
          </ul>
        </div>

        {/* Company & Legal */}
        <div>
          <h2 className="font-semibold mb-3">Company</h2>
          <ul className="space-y-2 mb-6">
            <li>About</li>
            <li>FAQs</li>
            <li>Blog</li>
          </ul>

          <h2 className="font-semibold mb-3">Legal</h2>
          <ul className="space-y-2">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Security</li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="space-y-4">
          <div className="flex space-x-4 text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaTiktok />
            <FaYoutube />
          </div>
          <p>
            Tesmot house, Abdulrahman Okene close, <br /> Victoria Island, Lagos, Nigeria.
          </p>
          <p>contact@piggyvest.com</p>
          <p>+2347009339339</p>
        </div>
      </div>

      {/* 🔥 Footer bottom note */}
      <div className="max-w-7xl text-gray-600 mt-16">
        <p className="mb-4">
          Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria.
          For over 9 years, our customers have <br /> saved and invested billions of Naira that they would normally be tempted to spend.
        </p>
        <p className="text-xs text-blue-600">
          2016 - 2025 PiggyTech Global Limited - RC 1405222
        </p>
      </div>
    </footer>
  );
}
