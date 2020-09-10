import css from '@emotion/css';

export const DARK_BLUE = '#10498A';
export const LIGHT_BLUE = '#2B9AD6';
export const GRAY_BLUE = '#f0f6ff';

export const BLUE_GRADIENT = css`
  background-color: ${DARK_BLUE};
  background-image: linear-gradient(
    to bottom right,
    ${DARK_BLUE},
    ${LIGHT_BLUE},
    ${DARK_BLUE}
  );
  background-size: 180% 180%;
`;
