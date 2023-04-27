/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            aspectRatio: {
                "6/9": "6 / 9",
                "60/90": "60 / 90",
                "600/900": "600 / 900",
                "1200/1800": "1200 / 1800",
            },
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                xxl: "1500px",
            },
        },
    },
    plugins: [],
};
