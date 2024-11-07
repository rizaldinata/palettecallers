import React from 'react';

const CodeDisplay = () => {
  return (
    <div className="mx-auto mt-8 inline-block w-full max-w-3xl overflow-auto rounded-lg bg-gray-100 p-4 text-left">
      <pre className="rounded-lg bg-black p-4 text-sm text-white sm:text-base">
        {`/** @type {import('tailwindcss').Config} */
        module.exports = {
        content: ['./src/**/*.{html,js}'],
        theme: {
            extend: {},
        },
            plugins: [],
        }`}
      </pre>
    </div>
  );
}

export default CodeDisplay;
