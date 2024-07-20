// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  daisyui: {
    themes: ["light"  ],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "my-bg-gif": "url(../../public/assets/gif/bg-gif.gif)",
        "card-gif": "url(../../public/assets/gif/card-gif.gif)",
        "login-circle": "url(../../public/assets/bg-circle-login.jpg)",
      },
    },
  },
  plugins: [
    require('daisyui'),
    // Add any additional plugins here if needed
  ],
});
