import React, { useState, useEffect } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Button from "../components/reuseable/Button"; 

// ✅ Define FAQs with titles and JSX contents
const faqs = [
  {
    title: "Statement of Account",
    content: (
      <div className="space-y-3">
        <p>Yes, you can!</p>
        <p>Note: This can be used as proof of funds.</p>

        <p className="font-semibold">How can I get a Piggyvest Statement of Account?</p>
        <p>
          To get your Piggyvest statement of account, please log into your Piggyvest app and click on 'Account', select 'Generate Account Statement' and follow the prompt.
        </p>
        <p>
          You can also send an email to <a href="mailto:contact@piggyvest.com" className="text-blue-600 underline">contact@piggyvest.com</a> stating your registered email address and the preferred duration of your statement of account.
        </p>
        <p>
          A well-detailed, signed, and stamped statement of account will be automatically generated to you from the app within minutes.
        </p>
        <p>Note: This will have your preferred start date till the exact date you initiated the request.</p>

        <p className="font-semibold">Are there any charges when requesting for a statement of account?</p>
        <p>No! It's completely FREE. There are no charges on softcopies of a statement of account.</p>
      </div>
    )
  },
  {
    title: "HouseMoney",
    content: <p>HouseMoney allows you to save for rent seamlessly and automatically...</p>
  },
  {
    title: "Safelock Dollar",
    content: <p>Safelock Dollar lets you lock dollars for fixed returns over time...</p>
  },
  {
    title: "Safelock Naira",
    content: <p>Safelock Naira lets you lock naira for fixed returns over time...</p>
  },
  {
    title: "Nextofkin",
    content: <p>Bring your next of kin details to ensure account security and proper documentation.</p>
  },
  {
    title: "Auto-save",
    content: <p>Auto-save helps you automate your savings seamlessly for consistent growth.</p>
  },
];

export default function FaqPage() {
  const [activeNav, setActiveNav] = useState(faqs[0].title);
  const [openAccordions, setOpenAccordions] = useState({});

  useEffect(() => {
    // ✅ Automatically open active FAQ accordion on load or nav change
    setOpenAccordions(prev => ({
      ...prev,
      [activeNav]: true,
    }));
  }, [activeNav]);

  const toggleAccordion = (title) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const activeFaq = faqs.find(faq => faq.title === activeNav);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="w-64 bg-white border-r overflow-y-auto">
        <ul>
          {faqs.map((faq) => (
            <li
              key={faq.title}
              onClick={() => setActiveNav(faq.title)}
              className={`
                px-6 py-4 cursor-pointer
                ${activeNav === faq.title ? "bg-blue-600 text-white" : "text-gray-800 hover:bg-gray-100"}
              `}
            >
              {faq.title}
            </li>
          ))}
        </ul>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activeFaq && (
          <>
            <h2 className="text-2xl font-semibold mb-6">{activeFaq.title}</h2>

            {/* Accordion style display for active content */}
            <div className="border-b mb-2">
              <button
                onClick={() => toggleAccordion(activeFaq.title)}
                className="w-full flex justify-between items-center py-4 focus:outline-none"
              >
                <span className="text-lg font-medium">{activeFaq.title}</span>
                {openAccordions[activeFaq.title]
                  ? <LuChevronUp size={20} />
                  : <LuChevronDown size={20} />
                }
              </button>

              {openAccordions[activeFaq.title] && (
                <div className="pb-4 px-4 text-gray-700">
                  {activeFaq.content}
                </div>
              )}
            </div>
          </>
        )}

        {/* ✅ CTA Section */}
        <div className="mt-10 text-center ">
          <img
            src="src/assets/stories-single.png" 
            alt="beauty"
            className="mx-auto mb-4 max-w-sm"
          />
          <h1 className="text-xl font-semibold mb-4">
            Join 5+ million people who save and invest with us
          </h1>
          <div className="flex justify-center gap-4">
            <Button
              title="Get on iPhone"
              bgColor="#122231"
              textColor="#fff"
              iconTitle={<FaApple />}
            />
            <Button
              title="Get on Android"
              bgColor="#122231"
              textColor="#fff"
              iconTitle={<FaGooglePlay />}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
