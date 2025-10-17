/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {

    screens: {
      
      desk: '1280px',
      tab:'800px',
      mob:'375px'
     
    },
    extend: {
      fontFamily: {
        crimson: ['"Crimson Text"', 'serif'],
        dm: ['"DM Sans"', 'sans-serif'],
        mono:[' "Roboto Mono" ', 'monospace'],
        rethink : [' "Rethink Sans" ', 'serif' ],
        reddit : [' "Reddit Mono" ', 'monospace']
      },

    },
  },
  plugins: [],
}

