import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    // TODO can't make dark mode toggle work for now
    // darkMode: 'selector',
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": {transform: "rotate(-3deg)"},
                    "50%": {transform: "rotate(3deg)"}
                },
            },
            animation: {
                wiggle: "wiggle 200ms ease-in-out"
            }
        },
    },plugins: [
        require('tailwindcss-animated')
    ],
};
export default config;
