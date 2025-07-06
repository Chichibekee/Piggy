import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/reuseable/Button";

const Invest = () => {
  return (
    <div className="bg-blue-600 max-w-[1280px] mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold mb-4">Invest</h1>

      <p className="text-lg mb-6">Earn more on your savings</p>

      <p className="mb-8">
        Invest securely and confidently in pre-vetted investment opportunities. Earn up to{" "}
        <span className="font-semibold">25% p.a.</span>
      </p>

      <div className="flex gap-4 mb-12">
        <Button title="Download on iPhone" bgColor="#122231" textColor="#fff" />
        <Button title="Download on Android" borderColor="#122231" />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Investments simplified</h2>
        <p>
          With minimum investments starting as low as N5,000, investment is no longer out of reach. Everyone is welcome.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Invest confidently</h2>
        <p>
          We work with leading licensed investment houses such as ARM, AIICO and Stanbic.
        </p>
      </section>

      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Diversify your portfolio</h2>
            <p>
              Invest in various industries such as fixed income instruments, agriculture, transportation, etc.
            </p>
          </div>
          <div>
            {/* Image removed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invest;
