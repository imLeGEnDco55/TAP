/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'terminal-green': '#00FF00',
                'terminal-bg': '#000000',
                'alert-red': '#FF0000',
                'chaos-orange': '#FF6600',
                'flow-blue': '#00FFFF',
            },
            fontFamily: {
                'mono': ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
            },
        },
    },
    plugins: [],
}