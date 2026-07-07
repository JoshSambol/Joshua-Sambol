// Maps a palette key to its soft + deep CSS-variable colors, plus a very light
// tint for card fills. Keeps the pastel-blocking consistent everywhere.
export const swatches = {
  lavender: { soft: 'var(--lavender)', deep: 'var(--lavender-deep)', tint: '#F1EDFF' },
  coral: { soft: 'var(--coral)', deep: 'var(--coral-deep)', tint: '#FFECE5' },
  mint: { soft: 'var(--mint)', deep: 'var(--mint-deep)', tint: '#E4F8EE' },
  sky: { soft: 'var(--sky)', deep: 'var(--sky-deep)', tint: '#E5F2FC' },
  butter: { soft: 'var(--butter)', deep: 'var(--butter-deep)', tint: '#FFF4D9' },
  pink: { soft: 'var(--pink)', deep: 'var(--pink-deep)', tint: '#FFEBF1' },
};

export const paletteKeys = Object.keys(swatches);

export const swatch = (key) => swatches[key] || swatches.lavender;

// Deterministic color pick for a list index.
export const colorForIndex = (i) => paletteKeys[i % paletteKeys.length];
