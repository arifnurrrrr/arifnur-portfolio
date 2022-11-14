/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
         colors:{
            primary: '#3F3BC4',
            second: '#E0CAF8',
            third: '#DF678C',
            four: '#B4CBF4',
            five: '#FDF1E3',
            gold: '#D7C0A7',
            hejo: '#066756',
            sky: '#E6F0EF',
            abu: '#F5F5F5',
      },
        screens: {
          '2xl': '1320px',
        },
    },
  },
  plugins: [],
};
