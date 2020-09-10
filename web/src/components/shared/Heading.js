import styled from '@emotion/styled';

import { LIGHT_BLUE, DARK_BLUE } from '@constants';
import { MEDIA } from '@helpers';

const Heading = styled.h1`
  margin-bottom: 1.3em;
  text-align: ${({ align }) => align || 'center'};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 3.5em;
  line-height: 1.2;
  letter-spacing: 0.05em;
  word-break: break-word;
  hyphens: auto;
  background: ${DARK_BLUE};
  background: linear-gradient(
    to right bottom,
    ${DARK_BLUE},
    ${LIGHT_BLUE},
    ${DARK_BLUE}
  );
  background-size: 180% 180%;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${MEDIA.SDESKTOP`
    text-align: center;
    font-size: 2.7em;
  `}
`;

export default Heading;
