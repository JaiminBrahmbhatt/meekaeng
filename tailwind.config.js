/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "475px",
      // => @media (min-width: 475px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        loading: "url(/loading.svg)",
        updates_man: "url(/updates_man.png)",
        updates_laptop_calc: "url(/updates_laptop_calc.png)",
        updates_laptop_notes: "url(//updates_laptop_notes.png)",
      },
      colors: {
        black: "var(--black)",
        dark_grey: "var(--dark_grey)",
        grey: "var(--grey)",
        light_grey: "var(--light_grey)",
        grey_blue: "var(--grey_blue)",
        primary: "var(--primary)",
        silver: "var(--silver)",
        white: "var(--white)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        info: "var(--info)",
        shade_1: "var(--shade_1)",
        shade_2: "var(--shade_2)",
        shade_3: "var(--shade_3)",
        shade_4: "var(--shade_4)",
        shade_5: "var(--shade_5)",
        tint_1: "var(--tint_1)",
        tint_2: "var(--tint_2)",
        tint_3: "var(--tint_3)",
        tint_4: "var(--tint_4)",
        tint_5: "var(--tint_5)",
        warning: "var(--warning)",
        error: "var(--error)",
        success: "var(--success)",
        white_10: "var(--white_10)",
        white_20: "var(--white_20)",
      },
      fontSize: {
        64: "64px",
        36: "36px",
        28: "28px",
        20: "20px",
      },
      lineHeight: {
        76: "76px",
        44: "44px",
      },
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child-span", "& > span");
    },
  ],
};
