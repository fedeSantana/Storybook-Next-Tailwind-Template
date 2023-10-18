import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{.ts}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Brand colors
        'primary': {
          default: '#3562FF',
          hover: '#002DE3',
          pressed: '#C4C8FE',
        },
        'secondary': {
          default: '#A13DDF',
          hover: '#6412CB',
          pressed: '#DEBCF3',
        },
        'tertiary': {
          default: '#FFD300',
          hover: '#FFD300',
          pressed: '#FFF8BF',
        },
        // Text colors
        'text-primary': '#323338',
        'text-secondary': '#6F6F6F',
        'text-link': '#3562FF',
        'text-error': '#E71D1D',
        // Background color
        'background-light': '#FEFEFE',
        // State Colors
        'state-success': '#259B38',
        'state-error': '#E71D1D',
        'state-warning': '#FFB700',
        // State Colors Hover
        'state-success-hover': '#268a37',
        'state-error-hover': '#d22525',
        'state-warning-hover': '#e4a60a',
        // Greys
        'grey-1': '#333333',
        'grey-2': '#4F4F4F',
        'grey-3': '#828282',
        'grey-4': '#BDBDBD',
        'grey-5': '#E0E0E0',
        'grey-6': '#F2F2F2',
        // Deprecated
        'gray-800': '#2d3748',
        'red-600': '#D72727',
        'green-500': '#48bb78',
      },
    },
  },
  plugins: [],
}
export default config
