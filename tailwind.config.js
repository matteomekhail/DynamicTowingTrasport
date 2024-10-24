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
                    black: '#000000',
                    'black-light': '#1A1A1A'
                }
            }
        },
    },

    plugins: [forms],
};
