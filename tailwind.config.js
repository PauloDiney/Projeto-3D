/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                zentry: ['zentry', 'sans-serif'],
                general: ['general', 'sans-serif'],
                'circular-web': ['circular-web', 'sans-serif'],
                'robert-medium': ['robert-medium', 'sans-serif'],
                'robert-regular': ['robert-regular', 'sans-serif'],
            },

            colors: {
                blue: {
                    50: '#DFdff0',
                    75: '#DFDFF2',
                    100: '#F0F2FA',
                    200: '#010101',
                    300: '#4Fb7DD'
                },

                violet: {
                    50: '#f3e8ff',
                    100: '#e9d5ff',
                    200: '#d8b4fe',
                    300: '#8F00FF',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95'
                },
                yellow: {
                    100: '#8E983F',
                    300: '#EDFF66'
                }
            }
        },
    },
    plugins: [],
}
