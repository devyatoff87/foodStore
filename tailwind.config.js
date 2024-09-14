module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px', // Custom border width of 3px
      },
      width: {
        '20': '20%',
        '30': '30%',
        '40': '40%',
        '60': '60%',
        '70': '70%',
        '80': '80%',
        'xxl': '1920px'
      },
      maxWidth: {
        'xxl': '1920px'
      },
      maxHeight: {
        '100': '100px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '600': '600px'
      },
      fontSize: {
        'heading-1': '40px',
        'heading-2': '32px',
        'heading-3': '24px',
        'heading-4': '20px',
      },
      screens: {
        'xxl': '1920px'
      }
    },
  },
  plugins: [],
}
