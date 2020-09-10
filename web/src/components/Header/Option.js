import { Link } from 'gatsby';

import styled from '@emotion/styled';

import { MEDIA } from '@helpers';

import { DARK_BLUE } from '@constants';

const Option = styled(Link)`
  color: ${DARK_BLUE};
  font-size: 0.6em;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 1.7em;

  &:hover {
    text-decoration: underline;
  }

  ${MEDIA.LDESKTOP`
    margin-right: 1.4em;
  `}

  ${MEDIA.SDESKTOP`
    margin: 0;
    text-decoration: underline;
  `}

  ${MEDIA.PHONE`
    letter-spacing: 0;
  `}

  & svg {
    display: block;
    margin: 0 auto 0.5em;
    font-size: 1.5em;

    ${MEDIA.MIN_SDESKTOP`
      display: none;
    `}
  }
`;

export default Option;
