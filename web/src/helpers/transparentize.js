import Color from 'color';

export default (hexColor, alpha) =>
  Color(hexColor)
    .alpha(alpha)
    .string();
