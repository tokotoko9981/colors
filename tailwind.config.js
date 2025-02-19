// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./public/index.html",
  ],
  safelist: [
    'bg-blue-200',
    'bg-green-200',
    'bg-yellow-200',
    'bg-purple-200',
    'bg-red-200',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-red-500',
    'bg-gray-500',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
