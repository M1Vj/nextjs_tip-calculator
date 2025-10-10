import type { Config } from 'tailwindcss';

const config: Config = {
    content: ["./app/**/*.{ts,tsx", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                green: { 400: "hls(172, 67%, 45%)", 900: "hsl(183, 100%, 15%)" },
                grey: { 500: "hsl(186, 14%, 43%)", 400: "hsl(184, 14%, 56%)", 200: "hsl(185, 41%, 84%)", 50: "hsl(189, 47%, 97%)" }
            }
        }
    },
    plugins: [],
};
export default config;