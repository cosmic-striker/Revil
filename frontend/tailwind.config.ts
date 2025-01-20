import type { Config } from 'tailwindcss';
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      'spl-ls': '4.5rem',
      'spl-md': '8rem',
      'spl-lg': '12rem',
    },
    screens: {
      'tab': "640px",
      'lap': "1024px",
    },
    extend: {
      colors: {
        'light': "#DFDED8",
        'dark': '#131B23',
        'red': '#DE1A1A',
      },
    },
  },
  plugins: [],
} satisfies Config;
