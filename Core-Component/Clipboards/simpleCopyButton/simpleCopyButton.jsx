import React, { useState } from "react";

const SimpleCopyButton = () => {
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [inputValue, setInputValue] = useState("Default text value");
  const [iconState, setIconState] = useState("copy");

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue)
      .then(() => {
        setFeedbackVisible(true);
        setIconState("check");
        setTimeout(() => {
          setFeedbackVisible(false);
          setIconState("copy");
        }, 3000);
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center min-h-auto font-primarylw">
      <div className="w-full max-w-lg p-8">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Copy to Clipboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Type your text below and copy it with a single click.</p>

        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-5 py-3 text-gray-700 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
          />
          <button
            onClick={handleCopy}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:ring-offset-2"
          >
            {iconState === "copy" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>
        </div>

        {feedbackVisible && (
          <div className="mt-4">
            <div className="flex items-center p-4 text-green-800 dark:text-green-200 bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="ml-2">Text copied to clipboard successfully!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleCopyButton;
