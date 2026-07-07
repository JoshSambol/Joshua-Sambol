import { createTheme } from '@mantine/core';

// Light, playful Mantine theme. Palette pops live in CSS variables (global.css);
// this mainly makes Mantine components (inputs, buttons) adopt the new look.
const theme = createTheme({
  fontFamily: 'Inter, system-ui, sans-serif',
  headings: { fontFamily: 'Fredoka, Poppins, sans-serif', fontWeight: '600' },
  defaultRadius: 'lg',
  primaryColor: 'coral',
  colors: {
    coral: [
      '#FFF0EB', '#FFDCD1', '#FFC3B0', '#FFA98E', '#FF9070',
      '#FF6B47', '#F5572F', '#DB431D', '#B23515', '#8A280F',
    ],
    lav: [
      '#F1EDFF', '#E1D8FF', '#CFC0FF', '#BBA6FF', '#A88CFF',
      '#8B6BFF', '#7451F0', '#5E3DD1', '#4B30A8', '#3A247F',
    ],
  },
});

export default theme;
