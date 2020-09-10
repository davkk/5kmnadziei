import styled from '@emotion/styled';
import css from '@emotion/css';

import { MEDIA } from '@helpers';
import { BLUE_GRADIENT, BORDER_RADIUS } from '@constants';

const Column = styled.div`
  width: 48%;
  max-width: 48%;
  flex-basis: 48%;
  text-align: ${({ align }) => align};
  padding-top: ${({ offset }) => offset};


  ${({ gradient }) =>
    gradient &&
    css`
      ${BLUE_GRADIENT};
      color: white;
      padding: 2em;
      border-radius: ${BORDER_RADIUS};
      box-sizing: border-box;
    `}

  ${({ alignMiddle }) =>
    alignMiddle &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}

  ${MEDIA.SDESKTOP`
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
    text-align: center;
    padding-top: 0;
    transform: none;

    &:first-of-type {
      margin-bottom: 3em;
    }
  `};
`;

export default Column;
