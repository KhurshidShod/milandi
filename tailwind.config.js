/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        navBlack: '#0D0D0D',
        yellow: '#FFC000',
        lightGrey: '#E5E5E5',
        blueBg: 'radial-gradient(100% 1071.07% at 0% 0%, #0F0D2B 0%, #0C0926 100%);'
      },
      fontSize: {
        font10: '10px',
        font12: '12px',
        font14: '14px',
        font16: '16px',
        font23: '23px',
        font34: '34px',
      }
    },
  },
  plugins: [],
}

