import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Netflix?',
      answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'
    },
    {
      question: 'How much does Netflix cost?',
      answer: 'Netflix offers several subscription plans that vary in price depending on the features and number of screens. You can choose a plan that best fits your needs.'
    },
    {
      question: 'Where can I watch Netflix?',
      answer: 'You can watch Netflix on various devices, including smart TVs, computers, smartphones, tablets, and streaming devices like Roku and Amazon Fire TV.'
    },
    {
      question: 'How do I cancel Netflix?',
      answer: 'To cancel your Netflix subscription, go to your account settings and select the option to cancel your subscription. Follow the prompts to complete the cancellation process.'
    },
    {
      question: 'Where can I watch on Netflix?',
      answer: 'You can watch Netflix content on any compatible device that has an internet connection. This includes smart TVs, laptops, tablets, smartphones, and streaming devices.'
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white px-8 py-6">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 pb-4">
            <button
              className="text-xl font-semibold w-full text-left flex justify-between items-center"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              <svg
                className={`w-6 h-6 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-400">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
