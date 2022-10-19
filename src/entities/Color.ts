export const ColorTypes = {
  RED: 'red',
  YELLOW: 'yellow',
  GREEN: 'green',
  BLUE: 'blue'
} as const;

export const ColorArray = Object.values(ColorTypes);
export type ColorType = typeof ColorTypes[keyof typeof ColorTypes];
