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
        }
      }
      addUtilities(initialUtilities)
    }
  ],
}
export default config
