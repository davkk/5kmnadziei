import styled from '@emotion/styled';

import { DARK_BLUE } from '@constants';

import { MEDIA } from '@helpers';

const Navbar = styled.nav`
  text-align: center;
  line-height: 1;

  ${MEDIA.SDESKTOP`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    padding: 0.7em 5%;
    background: white;
    border-top: 2px solid ${DARK_BLUE};
  `}

  ${MEDIA.TABLET`
    width: 94%;
    padding: 0.5em 3%;
  `}
`;

export default Navbar;
