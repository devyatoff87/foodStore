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
      },
      maxHeight: {
        '100': '100px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '600': '600px'
      }
    },
  },
  plugins: [],
}
