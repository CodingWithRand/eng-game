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
        'ssm': {'max': '640px'},
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
        '.fr-jc': {
          '@apply f-jc flex-row': {},
        },
        '.check-box': {
          '@apply min-w-[35px] min-h-[35px] bg-transparent rounded-md p-1 w-10 h-10 border-solid border-gray-300 border-2 sm:min-w-[50px] sm:min-h-[50px] !important': {}
        },
        '.choice-list': {
          '@apply my-10 border-solid border-2 border-gray-400 rounded-md px-1 sm:my-14 !important': {}
        },
        '.choice-list .a-choice:last-child': {
          '@apply border-0 !important': {}
        },
        '.a-choice': {
          '@apply border-solid border-gray-300 fr-ic p-2 border-b-2 gap-x-2 sm:p-4 sm:gap-x-4 !important': {}
        },
        '.prev-next': {
          '@apply my-10 flex justify-between w-[90%]' :{}
        }
      }
      addUtilities(initialUtilities)
    }
  ],
}
export default config
