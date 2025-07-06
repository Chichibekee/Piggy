import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/reuseable/Button";

import autoSaving from "../assets/auto-saving.png";


const PiggyBank = () => {
  return (
    <div className="bg-blue-600 max-w-[1280px] mx-auto px-4 py-12 text-white">
  
      <img src={autoSaving} alt="Automated Savings" className="mb-20 float-end m" />

      <h1 className="text-3xl font-bold mb-4">Piggybank</h1>

      <p className="text-lg mb-6">Automated savings</p>

      <p className="mb-8">
        Strict daily, weekly or monthly automatic savings. Earn up to{" "}
        <span className="font-semibold">18% p.a.</span>
      </p>

      <div className="flex gap-4 mb-12">
        <Button title="Download on iPhone" bgColor="#122231" textColor="#fff" />
        <Button title="Download on Android" borderColor="#122231" />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Save without thinking about it.
        </h2>
        <p className="mb-2">
          Enjoy automated savings, quick manual savings top up and competitive
          interest rates.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Save automatically</h3>
        <p>
          Choose between automatic daily, weekly or monthly savings. Once you
          choose, our system does the rest for you. You’re in control, and can
          always change your settings anytime.
        </p>
      </section>

     
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Save on the go</h3>
        <p>
          Don’t fancy automatic savings? No problem, you can manually top up
          your Piggybank savings at anytime, anywhere.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Build discipline</h3>
        <p>
          With four free withdrawal days in the year, you are less tempted to
          spend your savings and meet your savings goals faster.
        </p>
      </section>

     
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-2">
          Build your savings small small!
        </h3>
        <p>
          With Piggybank, you can save periodically, automatically or manually.
          You can also save as you go, on your own terms. You’re the boss of
          your savings, choose how you want to save.
        </p>
      </section>

      
      <section className="mb-12">
        <h4 className="text-lg font-semibold mb-4">As featured in</h4>
        <div className="flex gap-4">
        
          <img src="brand1.png" alt="brand" className="h-10" />
          <img src="brand2.png" alt="brand" className="h-10" />
          <img src="brand3.png" alt="brand" className="h-10" />
         
        </div>
      </section>

     
      <footer className="border-t pt-8 text-sm text-gray-200">
        

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div>
            <h5 className="font-semibold mb-2">Products</h5>
            <ul className="space-y-1">
              <li>Piggybank</li>
              <li>Invest</li>
              <li>Safelock</li>
              <li>Target Savings</li>
              <li>Flex Naira</li>
              <li>Flex Dollar</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Company</h5>
            <ul className="space-y-1">
              <li>About</li>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Legal</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Legal</h5>
            <ul className="space-y-1">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Security</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Tiktok</a>
          <a href="#">Youtube</a>
        </div>

        <p className="mb-1">
          Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
          Nigeria.
        </p>
        <p className="mb-1">contact@piggyvest.com</p>
        <p className="mb-1">+234 700 933 9339</p>
        <p className="mt-4">
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 9 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </p>
        <p className="mt-2">
          2016 - 2025 PiggyTech Global Limited - RC 1405222
        </p>
      </footer>
    </div>
  );
};

export default PiggyBank;
