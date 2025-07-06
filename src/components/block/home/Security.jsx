import React from "react";
import { BsArrow90DegRight } from "react-icons/bs";

const SecurityNotice = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center m-25 max-w-3xl">
      <img
        src="https://storage.googleapis.com/new-abeg-avatar-dev/piggyvest-cms-staging/securitylock_7d5d97e5a1/securitylock_7d5d97e5a1.svg"
        alt="lock icon"
        className="w-20 h-20 mr-4 mb-4 md:mb-0"
      />

      <div>
        <h1 className="text-3xl font-bold mb-2">Your security is our priority</h1>

        <p className="text-gray-700 mb-3">
          PiggyVest uses the highest level of Internet Security and it is
          secured by 256 bits SSL security encryption to ensure that your
          information is completely protected from fraud.
        </p>

        <p className="flex items-center text-blue-600 hover:underline cursor-pointer">
          <BsArrow90DegRight className="mr-1" />
          More on our security measures
        </p>
      </div>
    </div>
  );
};

export default SecurityNotice;



