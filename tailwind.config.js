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
      'Footer':'#CCCCCC',
      'gray':'#BDBDBD',
    },
    extend: {
      fontFamily: {
        'work-sans': ['"Work Sans"', 'Helvetica'],
        'space-mono': ['"Space Mono"', 'monospace'],
      },
      fontSize: {
        'h1': ['67px', { lineHeight: '1.1', fontWeight: 600}],
        'h2': ['51px', { lineHeight: '1.1', fontWeight: 600}],
        'h3': ['38px', { lineHeight: '1.2', fontWeight: 600}],
        'h4': ['28px', { lineHeight: '1.4', fontWeight: 600}],
        'h5': ['20px', {lineHeight: '1.4', fontWeight: 600}],
        'h6': ['16px', {lineHeight: '1.4', fontWeight: 600}],
        'body': ['22px', {lineHeight: '1.6', fontWeight: 400}],
        'Base(body)': ['16px', { lineHeight: '1.4' , fontWeight: 300}],
        'how': ['12px', {lineHeight: '1.4', fontWeight: 300}],
        'h4-spaceMono': ['28px', {lineHeight: '1.4', fontWeight: 700}],
        'h5-spaceMono': ['22px', {lineHeight: '1.6', fontWeight: 700}],
        'h-spaceMono': ['16px', {lineHeight: '1.4', fontWeight: 700}],
        'caption-spaceMono': ['12px', {lineHeight: '1.1', fontWeight: 400}],
      },
      backgroundImage: {
        'hero-pattern': "url('images/NFT Highlight.png')",
      }
    },
  },
  plugins: [],
}

