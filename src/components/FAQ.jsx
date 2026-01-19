"use client";
import React, { useState } from "react";
import {
  FaChevronDown,
  FaHome,
  FaDollarSign,
  FaKey,
  FaFileContract,
  FaMapMarkedAlt,
  FaQuestionCircle,
} from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 0,
      icon: <FaHome className="text-purple-600" />,
      question: "How do I search for properties on your website?",
      answer:
        "Use our advanced search filters on the homepage to find properties by location, price range, property type, number of bedrooms, and more. You can also save your searches and set up alerts for new listings that match your criteria.",
    },
    {
      id: 1,
      icon: <FaDollarSign className="text-purple-600" />,
      question:
        "What is the typical down payment required for purchasing a property?",
      answer:
        "Down payments typically range from 3% to 20% of the property's purchase price, depending on the type of loan and your financial situation. First-time homebuyers may qualify for programs with lower down payment requirements. Contact our agents for personalized guidance.",
    },
    {
      id: 2,
      icon: <FaKey className="text-purple-600" />,
      question: "How can I schedule a property viewing?",
      answer:
        "Click the 'Schedule Tour' button on any property listing page, select your preferred date and time, and our agent will confirm your appointment. You can also call us directly or send a message through the property listing for immediate assistance.",
    },
    {
      id: 3,
      icon: <FaFileContract className="text-purple-600" />,
      question: "What documents do I need to buy or rent a property?",
      answer:
        "For buying: proof of income, tax returns, credit report, bank statements, and government-issued ID. For renting: proof of income, employment verification, rental history, references, and ID. Our agents will provide a complete checklist based on your specific situation.",
    },
    {
      id: 4,
      icon: <FaMapMarkedAlt className="text-purple-600" />,
      question: "Do you offer virtual tours for properties?",
      answer:
        "Yes! Many of our listings feature 3D virtual tours, video walkthroughs, and detailed photo galleries. Look for the 'Virtual Tour' badge on property listings, or contact our agents to schedule a live video tour at your convenience.",
    },
    {
      id: 5,
      icon: <FaQuestionCircle className="text-purple-600" />,
      question: "How do I get in touch with a real estate agent?",
      answer:
        "You can contact our agents directly through the 'Contact Agent' button on any listing, use our live chat feature, call our office during business hours, or submit an inquiry form. Our team typically responds within 24 hours.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold text-lg mb-2">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about buying, selling, and renting
            properties
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-200 hover:bg-purple-50"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-2xl flex-shrink-0">{faq.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-lg pr-4">
                    {faq.question}
                  </h3>
                </div>
                <FaChevronDown
                  className={`text-purple-600 text-xl flex-shrink-0 transition-transform duration-300 ${
                    openIndex === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === faq.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <div className="pl-12">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
          <p className="mb-6 text-purple-100">
            Our team of experts is here to help you find your dream property
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
