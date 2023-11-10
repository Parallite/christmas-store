import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "primary-green": "#062619",
      "dark-green": "#051d13",
      "primary-white": "#FDE8D8",
      "primary-blue": '#090f19',
      "primary-pink": '#fe2c40',
      "secondary-pink": '#dfa9a4'
    },
    backgroundImage: {
      "gradient-ribbon":
        "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(254,44,64,1) 100%)",
      "gradient-primary-bg":
        "radial-gradient(circle, rgba(180,206,202,1) 0%, rgba(102,121,124,1) 100%)",
      "christmas-dear":
        "url('@/images/dear.jpg')",
      "primary-bg":
        "url('../../public/images/background.png')"
    },
  },
  plugins: [],
}
export default config