/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html',],
  theme: {
    colors: {
      'Background':'#2B2B2B',
      'Background-Secondry':'#3B3B3B',
      'Label':'#858584',
      'Text':'#FFFFFF',
      'Action':'#A259FF',
    },
    extend: {
      fontFamily: {
        'work-sans': ['"Work Sans"', 'Helvetica'],
        'space-mono': ['"Space Mono"', 'monospace'],
      },
      fontSize: {
        'h4': ['28px', { lineHeight: '1.4', fontWeight: 600}],
        'h5': ['20px', {lineHeight: '1.4', fontWeight: 600}],
        'Base(body)': ['16px', { lineHeight: '1.4' , fontWeight: 300}],
        'h5-spaceMono': ['22px', {lineHeight: '1.6', fontWeight: 700}],
        'h-spaceMono': ['16px', {lineHeight: '1.4', fontWeight: 700}],
      },
    },
  },
  plugins: [],
}

