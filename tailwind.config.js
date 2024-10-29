import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    theme: {
        extend: {
            colors: {
                dynamic: {
                    red: '#FF0000',
                    'red-dark': '#CC0000',
                    silver: '#C0C0C0',
                    'silver-dark': '#808080',
                    black: '#111111',
                    'black-light': '#1A1A1A',
                    'gray-custom': '#2A2A2A',
                    'red-gradient-start': '#ff0000',
                    'red-gradient-end': '#ff6b6b',
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-service': 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
            },
            boxShadow: {
                'custom': '0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06)',
            }
        },
    },
    plugins: [forms],
};
