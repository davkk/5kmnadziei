import styled from '@emotion/styled';

import { LIGHT_BLUE } from '@constants';
import { MEDIA } from '@helpers';

const Subheading = styled.h3`
  text-align: ${({ align }) => align || 'center'};
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: ${LIGHT_BLUE};
  margin-bottom: 0.5em;
  word-break: break-word;
  word-wrap: break-word;
  hyphens: auto;

  ${MEDIA.SDESKTOP`
    text-align: center;
  `}
`;

export default Subheading;
