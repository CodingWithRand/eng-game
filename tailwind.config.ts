import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        'smd': {'min': '768px','max': '932px'},
        'xs': {'min': '520px', 'max': '640px'},
        '2xs': {'min': '435px', 'max': '520px'},
        '3xs': {'min': '376px', 'max': '434px' },
        '4xs': {'min': '320px', 'max': '376px'}
      }
    },
  },
  plugins: [
    function ({ addUtilities }: any){
      const initialUtilities = {
        '.f-ic': {
          '@apply flex items-center': {},
        },
        '.fr-ic': {
          '@apply f-ic flex-row': {},
        },
        '.f-jc': {
          '@apply flex justify-center': {},
        },
        '.btn-style': {
          '@apply rounded-xl p-5 text-white text-xl !important': {},
        },
        '.check-box': {
          '@apply bg-transparent rounded-md p-1 w-10 h-10 border-solid border-gray-300 border-2 !important': {}
        },
        '.choice-list': {
          '@apply my-14 border-solid border-2 border-gray-400 rounded-md px-1 !important': {}
        },
        '.choice-list .a-choice:last-child': {
          '@apply border-0 !important': {}
        },
        '.a-choice': {
          '@apply border-solid border-gray-300 fr-ic gap-x-4 p-4 border-b-2 !important': {}
        }
      }
      addUtilities(initialUtilities)
    }
  ],
}
export default config
