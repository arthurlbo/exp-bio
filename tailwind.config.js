/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        extend: {
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
            screens: {
                xs: { raw: "((min-width: 450px))" },
            },
        },
    },
    plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
