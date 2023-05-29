/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    screens: {
      'sm': '567px',
      'md': '768px',
      'lg': '1146px',
      'xl': '1146px'
    },
    extend: {
      colors: {
        black: '#000000',
        navBlack: '#0D0D0D',
        yellow: '#FFC000',
        navBg: '#FAFAFA',
        lightGrey: '#E5E5E5',
        voytiBtnBg: 'rgba(0, 0, 0, 0.05);',
        blueBg: 'radial-gradient(100% 1071.07% at 0% 0%, #0F0D2B 0%, #0C0926 100%);'
      },
      fontSize: {
        font10: '10px',
        font12: '12px',
        font14: '14px',
        font16: '16px',
        font23: '23px',
        font34: '34px',
      },
      container: {
        maxWidth: '500px'
      }
    },
  },
  plugins: [],
}

