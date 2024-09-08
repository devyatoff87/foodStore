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
      fontSize: {
        'heading-1': '40px',
        'heading-2': '32px',
        'heading-3': '24px',
        'heading-4': '20px',
      }
    },
  },
  plugins: [],
}
