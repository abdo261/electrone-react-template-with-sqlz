/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Next UI default colors
        primary: '#0072F5', // Primary color (usually blue)
        secondary: '#9750DD', // Secondary color (purple)
        success: '#17C964', // Success (green)
        warning: '#F5A524', // Warning (orange)
        danger: '#F31260', // Danger (red)
        info: '#0091FF', // Info (light blue)
        neutral: '#889096', // Neutral (gray)

        // Additional grayscale colors
        foreground: '#000000', // Black or primary foreground text color
        background: '#FFFFFF', // White background

        // Shades of gray
        gray100: '#F1F3F5',
        gray200: '#E4E7EB',
        gray300: '#CFD4DA',
        gray400: '#A3A8AE',
        gray500: '#70757B',
        gray600: '#4A4F55',
        gray700: '#3E4349',
        gray800: '#2B2F36',
        gray900: '#1A1D21',

        // Text colors
        textPrimary: '#11181C',
        textSecondary: '#687076',
        textDisabled: '#889096',

        // Dark mode colors
        darkBackground: '#16181A', // Background for dark mode
        darkForeground: '#FFFFFF', // Foreground for dark mode (white text)
        darkPrimary: '#0072F5', // Primary color in dark mode
        darkSecondary: '#9750DD' // Secondary color in dark mode
      }
    }
  },
  plugins: [require('daisyui')],
  darkMode: 'class',
  
}
