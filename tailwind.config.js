/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
              "2xl": "1400px",
            },
          },
        extend: {
            keyframes: {
                "accordion-down": {
                  from: { height: "0" },
                  to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                  from: { height: "var(--radix-accordion-content-height)" },
                  to: { height: "0" },
                },
              },
              animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
              },
            colors: {
                background: "#000000",
                primary: "#F2F2F2",
                secondary: "#8F9BA8",
                tertiary: "#212024",
                accent: "#0025CE",
                complementary: "#00EAFF",
            },
            fontFamily: {
                sans: "var(--font-poppins)",
                title: "var(--font-museoModerno)",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")({ nocompatible: true })],
};
