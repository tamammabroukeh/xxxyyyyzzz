import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '992px',
          lg: '1080px', 
          xl: '1259px', 
        },
      },
      fontSize: {
        xs:"0.75rem",
        sm: '0.875rem',
        base: '1rem',
        md:'1.25rem',
        lg:'1.5rem',
        xl:'1.75rem',
        '2xl':'2rem',
        '3xl': '2.125rem',
        '4xl': '2.25rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '3.25rem',
        '8xl': '4rem',
        '9xl': '6rem',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(140, 182, 239, 0.92) 0.01%, rgba(156, 131, 255, 0.75) 50.5%, rgba(113, 77, 255, 0.84) 100%)',
        'custom-border-gradient': 'linear-gradient(89.98deg, #66A5F5 0.02%, rgba(130, 181, 244, 0.695) 60.22%, rgba(158, 197, 242, 0.39) 103.81%)',
        'inspiring-gradient': 'linear-gradient(90deg, rgba(163, 199, 248, 0.92) 10%, rgba(225, 81, 255, 0.72) 49.5%, rgba(136, 100, 176, 0.85) 100%)',
        'themes-gradient': 'linear-gradient(90deg, #714DFF 0%, rgba(156, 131, 255, 0.72) 20.5%, rgba(212, 91, 255, 0.760411) 45%, rgba(205, 88, 230, 0.77) 70%, rgba(71, 166, 205, 0.9) 95%)'
      },
      keyframes: {
        "slide":{
          from:{
            'transform':"translateX(100%)",
          },
          to:{
            "transform":"translateX(0%)"
          }
        },
        "slide-left":{
          from:{
            'transform':"translateY(100%)",
          },
          to:{
            "transform":"translateY(0%)"
          }
        }
      },
      animation: {
        "slide":"slide 1s ease-in-out",
        "slide-left":"slide-left 1s ease-in-out"
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background:"#F9FBFF",
            navItem:"#777D7EC7",
            signupText: "#7B65D3",
            'black-100':'#44464A66',
            'black-200':'#44464A',
            'black-300':'#344054',
            'black-500':'#2C2F4D2B',
            'black-600':'#41809A1A',
            'black-700':'#252525BD',
            'black-800':'#C6E3E908',
            'black-900':'#2225260A',
            'blue-100':'#79A6B9',
            'blue-150':'#9FC6CE',
            'blue-200':'#82B5BF',
            'blue-300':'#6CA5F5',
            'blue-350':'#6099B0ED',
            'blue-400':'#41809A',
            'blue-500':'#4887A1',
            'cyan-500':'#149eca',
            'sky-500':'#128093',
            'sky-600':'#305D76F5',
            'white-50':'#FFFFFF',
            'white-100':'#FDFEFF',
            'white-200':'#DEDEFB',
            'white-250':'#D0E0E9',
            'white-300':'#F7F8FF',
            'white-400':'#DFE4E9',
            'white-450':'#E7ECF3',
            'white-500':'#FCFCFC',
            'white-600':'#FCFDFF',
            'white-700':'#F3F3FF70',
            'gray-100':'#18181A91',
            'gray-150':'#667085',
            'gray-200':'#94969B',
            'gray-250':'#ACACB870',
            'gray-300':'#BEC2CB78',
            'gray-400':'#BEC2CB4D',
            'gray-450':'#DDDFE29E',
            'gray-500':'#E9EDF466',
            'gray-600':'#787B82',
            'gray-800':'#35353A6E',
            'gray-850':'#474D59',
            'gray-900':'#4D5D64',
            'slate-200':'#B2CDD2',
            'slate-400':"#D9E6EB",
            'yellow-300':'#FFF86BF2',
            'yellow-500':'#EAC608',
            'red-500':'#FF7575'
          },
        },
        dark: {
          colors: {
            // background:"#000",
            navItem:"#777D7EC7"
          },
        },
      },
    }),
  ],
}
// #EAC608