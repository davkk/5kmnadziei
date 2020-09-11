import css from '@emotion/css';
import { DARK_BLUE, MAIN_FONT } from '@constants';
import { MEDIA, resetcss } from '@helpers';

export default css`
  ${resetcss};

  ::-webkit-scrollbar {
    width: 18px !important;
    background: white;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${DARK_BLUE};
    border: 4px solid white;
    border-radius: 30px;
  }


  body {
    font-family: ${MAIN_FONT};
    font-size: 27px;
    font-weight: 500;
    background: white;
    color: ${DARK_BLUE};
    letter-spacing: 0.04em;
    line-height: 1.7;
    overflow-x: hidden;

    ${MEDIA.LDESKTOP`
      font-size: 28px;
    `}

    ${MEDIA.TABLET`
      font-size: 26px;
    `}

    ${MEDIA.PHONE`
      font-size: 22px;
    `}
  }
`;
