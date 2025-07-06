

import React from "react";
import { BsArrow90DegRight } from "react-icons/bs";

const Savings = () => {
  const piggyCard = [
    {
      title: "Automated Saving",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      iconTitle: "Piggy bank",
      color: "#123456",
      img: "src/assets/auto-saving.png",
    },
    {
      title: "Fixed Savings",
      desc: "Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.",
      iconTitle: "Safe Lock",
      color: "yellow",
      img: "src/assets/fixed-saving.png",
    },
    {
      title: "Goal-oriented Savings",
      desc: "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
      iconTitle: "Target Savings",
      color: "green",
      img: "src/assets/goal-saving.png",
    },
    {
      title: "Flex Naira",
      desc: "save,transfer,manage,organize and withdraw your money at any time",
      iconTitle: "Flex Naira",
      color: "pink",
      img: "src/assets/flex-naira.png",
    },
    {
      title: "Flex Dollar",
      desc: "Save and grow your money in foreign currencies such as dollars",
      iconTitle: "Flex Dollar",
      color: "black",
      img: "src/assets/flex-dollar.png",
    },
    {
      title: "House Money",
      desc: "Plan for your rent and household expense",
      iconTitle: "House Money",
      color: "orange",
      img: "src/assets/house-money.png",
    },
  ]; // ✅ closed array properly here

  return (
    <div className="my-20 flex flex-col items-center">
      <section className="text-center mb-10">
        <h1 className="font-bold text-4xl">Many ways to build your savings</h1>
        <p className="text-2xl">
          Earn 12%-20% when you save with any of these Piggyvest plans.
        </p>
      </section>

      <section className="flex justify-center max-w-[1200px] flex-wrap">
        {piggyCard.map((data, i) => (
          <main
            key={i}
            className="bg-white h-[400px] w-[400px] m-9 p-5 rounded shadow flex flex-col items-center"
          >
            {/* image with fade animation */}
            <img
              src={data.img}
              alt={data.title}
              className="w-32 mb-4 fade"
            />

            <div className="text-center">
              <h1
                style={{ color: data.color }}
                className="font-bold text-3xl mb-4"
              >
                {data.title}
              </h1>
              <p>{data.desc}</p>
            </div>

            <button className="flex items-center text-blue-600 hover:underline mt-auto">
              <BsArrow90DegRight className="mr-2" />
              {data.iconTitle}
            </button>
          </main>
        ))}
      </section>
    </div>
  );
};

export default Savings;
